import { z } from 'zod';

// ==================== AUTH SCHEMAS ====================

export const registerSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  nama: z.string().min(2, 'Nama minimal 2 karakter'),
});

export const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(1, 'Password wajib diisi'),
});

export const updateProfileSchema = z.object({
  nama: z.string().min(2, 'Nama minimal 2 karakter').optional(),
  avatar: z.string().url('Avatar harus berupa URL').optional().nullable(),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, 'Password lama wajib diisi'),
  newPassword: z.string().min(6, 'Password baru minimal 6 karakter'),
});

// ==================== KATEGORI SCHEMAS ====================

export const kategoriSchema = z.object({
  nama: z.string().min(2, 'Nama kategori minimal 2 karakter'),
  icon: z.string().optional().nullable(),
});

// ==================== CERITA SCHEMAS ====================

export const ceritaSchema = z.object({
  judul: z.string().min(3, 'Judul minimal 3 karakter'),
  deskripsi: z.string().optional().nullable(),
  thumbnail: z.string().url('Thumbnail harus berupa URL').optional().nullable(),
  status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
  kategoriId: z.string().uuid('Kategori ID tidak valid'),
});

export const updateCeritaSchema = ceritaSchema.partial();

// ==================== SCENE SCHEMAS ====================

export const sceneSchema = z.object({
  urutan: z.number().int().positive('Urutan harus positif'),
  gambar: z.string().url('Gambar harus berupa URL').optional().nullable(),
  teks: z.string().min(1, 'Teks wajib diisi'),
  audio: z.string().url('Audio harus berupa URL').optional().nullable(),
  ceritaId: z.string().uuid('Cerita ID tidak valid'),
});

export const updateSceneSchema = sceneSchema.partial().omit({ ceritaId: true });

export const reorderScenesSchema = z.object({
  ceritaId: z.string().uuid('Cerita ID tidak valid'),
  scenes: z.array(
    z.object({
      id: z.string().uuid('Scene ID tidak valid'),
      urutan: z.number().int().positive('Urutan harus positif'),
    })
  ).min(1, 'Minimal 1 scene'),
});

// ==================== QUIZ SCHEMAS ====================

export const quizSchema = z.object({
  pertanyaan: z.string().min(5, 'Pertanyaan minimal 5 karakter'),
  urutan: z.number().int().min(0).optional(),
  ceritaId: z.string().uuid('Cerita ID tidak valid'),
  pilihan: z.array(
    z.object({
      teks: z.string().min(1, 'Teks pilihan wajib diisi'),
      isBenar: z.boolean(),
    })
  ).min(2, 'Minimal 2 pilihan jawaban'),
});

export const submitQuizSchema = z.object({
  ceritaId: z.string().uuid('Cerita ID tidak valid'),
  answers: z.array(
    z.object({
      quizId: z.string().uuid('Quiz ID tidak valid'),
      pilihanId: z.string().uuid('Pilihan ID tidak valid'),
    })
  ).min(1, 'Minimal 1 jawaban'),
});

// ==================== PROGRES SCHEMAS ====================

// export const progresSchema = z.object({
//   ceritaId: z.string().uuid('Cerita ID tidak valid'),
//   lastScene: z.number().int().positive('Scene harus positif'),
//   isSelesai: z.boolean().optional(),
// });

// ==================== SETTING SCHEMAS ====================

export const settingSchema = z.object({
  key: z.string().min(1, 'Key wajib diisi'),
  value: z.string().min(1, 'Value wajib diisi'),
});

// ==================== TYPE EXPORTS ====================

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type KategoriInput = z.infer<typeof kategoriSchema>;
export type CeritaInput = z.infer<typeof ceritaSchema>;
export type UpdateCeritaInput = z.infer<typeof updateCeritaSchema>;
export type SceneInput = z.infer<typeof sceneSchema>;
export type UpdateSceneInput = z.infer<typeof updateSceneSchema>;
export type ReorderScenesInput = z.infer<typeof reorderScenesSchema>;
export type QuizInput = z.infer<typeof quizSchema>;
export type SubmitQuizInput = z.infer<typeof submitQuizSchema>;
// export type ProgresInput = z.infer<typeof progresSchema>;
export type SettingInput = z.infer<typeof settingSchema>;
