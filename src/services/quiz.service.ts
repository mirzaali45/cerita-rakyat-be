import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';
import { QuizInput, SubmitQuizInput } from '../utils/validation';
import { QuizResult } from '../types';

export async function getQuizzesByCeritaId(ceritaId: string) {
  return prisma.quiz.findMany({
    where: { ceritaId },
    include: {
      pilihan: true,
    },
    orderBy: { urutan: 'asc' },
  });
}

export async function getQuizzesForClient(ceritaId: string) {
  const quizzes = await prisma.quiz.findMany({
    where: { ceritaId },
    include: {
      pilihan: {
        select: {
          id: true,
          teks: true,
        },
      },
    },
    orderBy: { urutan: 'asc' },
  });

  return quizzes;
}

export async function getQuizById(id: string) {
  const quiz = await prisma.quiz.findUnique({
    where: { id },
    include: {
      pilihan: true,
    },
  });

  if (!quiz) {
    throw new ApiError('Quiz tidak ditemukan', 404);
  }

  return quiz;
}

export async function createQuiz(data: QuizInput) {
  const cerita = await prisma.cerita.findUnique({
    where: { id: data.ceritaId },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  const hasCorrectAnswer = data.pilihan.some((p) => p.isBenar);
  if (!hasCorrectAnswer) {
    throw new ApiError('Harus ada minimal 1 jawaban benar', 400);
  }

  const lastQuiz = await prisma.quiz.findFirst({
    where: { ceritaId: data.ceritaId },
    orderBy: { urutan: 'desc' },
  });

  const urutan = data.urutan ?? (lastQuiz?.urutan || 0) + 1;

  return prisma.quiz.create({
    data: {
      pertanyaan: data.pertanyaan,
      urutan,
      ceritaId: data.ceritaId,
      pilihan: {
        create: data.pilihan,
      },
    },
    include: {
      pilihan: true,
    },
  });
}

export async function updateQuiz(id: string, data: Partial<QuizInput>) {
  const quiz = await getQuizById(id);

  if (data.pilihan) {
    const hasCorrectAnswer = data.pilihan.some((p) => p.isBenar);
    if (!hasCorrectAnswer) {
      throw new ApiError('Harus ada minimal 1 jawaban benar', 400);
    }

    await prisma.pilihanJawaban.deleteMany({
      where: { quizId: id },
    });

    return prisma.quiz.update({
      where: { id },
      data: {
        pertanyaan: data.pertanyaan ?? quiz.pertanyaan,
        urutan: data.urutan ?? quiz.urutan,
        pilihan: {
          create: data.pilihan,
        },
      },
      include: {
        pilihan: true,
      },
    });
  }

  return prisma.quiz.update({
    where: { id },
    data: {
      pertanyaan: data.pertanyaan,
      urutan: data.urutan,
    },
    include: {
      pilihan: true,
    },
  });
}

export async function deleteQuiz(id: string) {
  await getQuizById(id);

  return prisma.quiz.delete({
    where: { id },
  });
}

// export async function submitQuiz(userId: string, data: SubmitQuizInput): Promise<QuizResult> {
//   const quizzes = await prisma.quiz.findMany({
//     where: { ceritaId: data.ceritaId },
//     include: {
//       pilihan: true,
//     },
//   });

//   if (quizzes.length === 0) {
//     throw new ApiError('Cerita tidak memiliki quiz', 400);
//   }

//   let skor = 0;
//   const detail: QuizResult['detail'] = [];

//   for (const answer of data.answers) {
//     const quiz = quizzes.find((q: { id: string }) => q.id === answer.quizId);
//     if (!quiz) continue;

//     const userPilihan = quiz.pilihan.find((p: { id: string }) => p.id === answer.pilihanId);
//     const correctPilihan = quiz.pilihan.find((p: { isBenar: boolean }) => p.isBenar);

//     const isBenar = userPilihan?.isBenar || false;
//     if (isBenar) skor++;

//     detail.push({
//       quizId: quiz.id,
//       pertanyaan: quiz.pertanyaan,
//       isBenar,
//       jawabanBenar: correctPilihan?.teks || '',
//       jawabanUser: userPilihan?.teks || '',
//     });
//   }

//   const totalSoal = data.answers.length;
//   const persentase = Math.round((skor / totalSoal) * 100);

//   await prisma.quizResult.create({
//     data: {
//       score,
//       totalQuestions,
//       userId,
//       ceritaId: data.ceritaId,
//     },
//   });

//   return {
//     skor,
//     totalSoal,
//     persentase,
//     detail,
//   };
// }

export async function submitQuiz(
  userId: string,
  data: SubmitQuizInput
): Promise<QuizResult> {
  const quizzes = await prisma.quiz.findMany({
    where: { ceritaId: data.ceritaId },
    include: {
      pilihan: true,
    },
  });

  if (quizzes.length === 0) {
    throw new ApiError('Cerita tidak memiliki quiz', 400);
  }

  let skor = 0;
  const detail: QuizResult['detail'] = [];

  for (const answer of data.answers) {
    const quiz = quizzes.find((q) => q.id === answer.quizId);
    if (!quiz) continue;

    const userPilihan = quiz.pilihan.find(
      (p) => p.id === answer.pilihanId
    );
    const correctPilihan = quiz.pilihan.find((p) => p.isBenar);

    const isBenar = userPilihan?.isBenar ?? false;
    if (isBenar) skor++;

    detail.push({
      quizId: quiz.id,
      pertanyaan: quiz.pertanyaan,
      isBenar,
      jawabanBenar: correctPilihan?.teks ?? '',
      jawabanUser: userPilihan?.teks ?? '',
    });
  }

  const totalSoal = data.answers.length;
  const persentase = Math.round((skor / totalSoal) * 100);

  await prisma.quizResult.create({
    data: {
      score: skor,
      totalQuestions: totalSoal,
      userId,
      ceritaId: data.ceritaId,
    },
  });

  return {
    skor,
    totalSoal,
    persentase,
    detail,
  };
}


export async function getQuizResults(userId: string, ceritaId: string) {
  return prisma.quizResult.findMany({
    where: { userId, ceritaId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getBestQuizResult(userId: string, ceritaId: string) {
  return prisma.quizResult.findFirst({
    where: { userId, ceritaId },
    orderBy: { score: 'desc' },
  });
}

export async function getAllQuizResultsByUser(userId: string) {
  return prisma.quizResult.findMany({
    where: { userId },
    include: {
      cerita: {
        select: {
          id: true,
          judul: true,
          thumbnail: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
}
