import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Contoh kode untuk repository: UserRepository
export const createUserRepository = async (data: any) => {
  return await prisma.user.create({ data });
};

export const readUserRepository = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const updateUserRepository = async (id: string, data: any) => {
  return await prisma.user.update({ where: { id }, data });
};

export const deleteUserRepository = async (id: string) => {
  return await prisma.user.delete({ where: { id } });
};

export const listUserRepository = async () => {
  return await prisma.user.findMany();
};
  