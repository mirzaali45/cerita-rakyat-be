import { Request, Response } from 'express';
import { ceritaService } from '../services';
import { successResponse, createdResponse, paginatedResponse, errorResponse } from '../utils/response';
import { CeritaInput, UpdateCeritaInput } from '../utils/validation';
import { prisma } from '../config/database';

export async function getAllAdmin(req: Request, res: Response): Promise<void> {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const status = req.query.status as 'DRAFT' | 'PUBLISHED' | undefined;
  const kategoriId = req.query.kategoriId as string | undefined;
  const search = req.query.search as string | undefined;

  const result = await ceritaService.getAllCerita(
    { page, limit },
    { status, kategoriId, search }
  );

  paginatedResponse(
    res,
    result.data as unknown[],
    result.meta.total,
    result.meta.page,
    result.meta.limit,
    'Berhasil mendapatkan cerita'
  );
}

export async function getAll(req: Request, res: Response): Promise<void> {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const kategoriId = req.query.kategoriId as string | undefined;
  const search = req.query.search as string | undefined;

  const result = await ceritaService.getPublishedCerita(
    { page, limit },
    { kategoriId, search }
  );

  paginatedResponse(
    res,
    result.data as unknown[],
    result.meta.total,
    result.meta.page,
    result.meta.limit,
    'Berhasil mendapatkan cerita'
  );
}

export async function getByIdAdmin(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data = await ceritaService.getCeritaById(id);
  successResponse(res, data, 'Berhasil mendapatkan cerita');
}

export async function getById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data = await ceritaService.getPublishedCeritaById(id);
  successResponse(res, data, 'Berhasil mendapatkan cerita');
}

export async function create(req: Request, res: Response): Promise<void> {
  const data: CeritaInput = req.body;
  const result = await ceritaService.createCerita(data);
  createdResponse(res, result, 'Cerita berhasil dibuat');
}

export async function update(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data: UpdateCeritaInput = req.body;
  const result = await ceritaService.updateCerita(id, data);
  successResponse(res, result, 'Cerita berhasil diupdate');
}

export async function remove(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await ceritaService.deleteCerita(id);
  successResponse(res, null, 'Cerita berhasil dihapus');
}

export async function publish(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const result = await ceritaService.publishCerita(id);
  successResponse(res, result, 'Cerita berhasil dipublish');
}

export async function unpublish(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const result = await ceritaService.unpublishCerita(id);
  successResponse(res, result, 'Cerita berhasil di-unpublish');
}

// Increment view count (1 user = 1 view per cerita)
// export const incrementView = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const userId = req.user?.userId;

//     if (!userId) {
//       return errorResponse(res, "User tidak ditemukan", 401);
//     }

//     // Cek apakah user sudah pernah view cerita ini
//     const existingView = await prisma.ceritaView.findUnique({
//       where: {
//         userId_ceritaId: {
//           userId,
//           ceritaId: id,
//         },
//       },
//     });

//     // Jika belum pernah view, tambahkan view
//     if (!existingView) {
//       await prisma.$transaction([
//         // Create view record
//         prisma.ceritaView.create({
//           data: {
//             userId,
//             ceritaId: id,
//           },
//         }),
//         // Increment view count
//         prisma.cerita.update({
//           where: { id },
//           data: {
//             views: {
//               increment: 1,
//             },
//           },
//         }),
//       ]);
//     }

//     successResponse(res, null, "View count updated");
//   } catch (error) {
//     errorResponse(res, "Gagal update view count");
//   }
// };

export const incrementView = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.cerita.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    successResponse(res, null, "View count updated");
  } catch (error) {
    errorResponse(res, "Gagal update view count");
  }
};