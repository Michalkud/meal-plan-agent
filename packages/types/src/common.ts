import { z } from 'zod';

// Base entity schema
export const BaseEntitySchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type BaseEntity = z.infer<typeof BaseEntitySchema>;

// API response schemas
export const ApiSuccessResponseSchema = z.object({
  success: z.literal(true),
  data: z.unknown(),
  message: z.string().optional(),
});

export const ApiErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  code: z.string().optional(),
});

export const ApiResponseSchema = z.union([
  ApiSuccessResponseSchema,
  ApiErrorResponseSchema,
]);

export type ApiResponse<T = unknown> = {
  success: true;
  data: T;
  message?: string;
} | {
  success: false;
  error: string;
  code?: string;
};

// Pagination schemas
export const PaginationParamsSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
});

export const PaginatedResponseSchema = z.object({
  items: z.array(z.unknown()),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
});

export type PaginationParams = z.infer<typeof PaginationParamsSchema>;
export type PaginatedResponse<T> = Omit<z.infer<typeof PaginatedResponseSchema>, 'items'> & {
  items: T[];
}; 