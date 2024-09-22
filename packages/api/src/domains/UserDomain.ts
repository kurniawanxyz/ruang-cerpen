
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

// Contoh kode untuk domain: UserDomain
export const UserDomain = z.object({

})
export type User = z.infer<typeof UserDomain>
;
  