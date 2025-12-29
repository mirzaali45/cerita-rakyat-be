// ==================== AUTH TYPES ====================

export interface AuthUser {
  userId: string;
  email: string;
  role: string;
}

export interface UserWithoutPassword {
  id: string;
  email: string;
  nama: string;
  avatar: string | null;
  role: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginResponse {
  user: UserWithoutPassword;
  token: string;
}

// ==================== PAGINATION TYPES ====================

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

// ==================== FILTER TYPES ====================

export interface CeritaFilter {
  status?: 'DRAFT' | 'PUBLISHED';
  kategoriId?: string;
  search?: string;
}

export interface UserFilter {
  role?: 'ADMIN' | 'USER';
  isActive?: boolean;
  search?: string;
}

// ==================== QUIZ TYPES ====================

export interface QuizAnswer {
  quizId: string;
  pilihanId: string;
}

export interface QuizResultDetail {
  quizId: string;
  pertanyaan: string;
  isBenar: boolean;
  jawabanBenar: string;
  jawabanUser: string;
}

export interface QuizResult {
  skor: number;
  totalSoal: number;
  persentase: number;
  detail: QuizResultDetail[];
}
