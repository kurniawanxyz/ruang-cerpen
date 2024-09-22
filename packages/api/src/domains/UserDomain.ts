
import { z } from 'zod';

// Contoh kode untuk domain: UserDomain
export const UserDomain = z.object({
    id: z.string().cuid(),
    email: z.string().email(),
    name: z.string().nullable(),
    password: z.string(),
    role: z.enum(['USER', 'ADMIN']).default('USER'),
    createdAt: z.date(),
    updatedAt: z.date()
})

export const UserLoginDTO = z.object({
    email: z.string().email(),
    password: z.string()
});

export const UserRegisterDTO = z.object({
    email: z.string().email(),
    name: z.string().nullable(),
    password: z.string()
});

export type UserLoginDTO = z.infer<typeof UserLoginDTO>
export type UserRegisterDTO = z.infer<typeof UserRegisterDTO>

export type UserDomain = z.infer<typeof UserDomain>
  