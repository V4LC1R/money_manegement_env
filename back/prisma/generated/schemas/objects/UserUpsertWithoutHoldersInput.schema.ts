import { z } from 'zod';
import { UserUpdateWithoutHoldersInputObjectSchema } from './UserUpdateWithoutHoldersInput.schema';
import { UserUncheckedUpdateWithoutHoldersInputObjectSchema } from './UserUncheckedUpdateWithoutHoldersInput.schema';
import { UserCreateWithoutHoldersInputObjectSchema } from './UserCreateWithoutHoldersInput.schema';
import { UserUncheckedCreateWithoutHoldersInputObjectSchema } from './UserUncheckedCreateWithoutHoldersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutHoldersInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutHoldersInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutHoldersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutHoldersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutHoldersInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutHoldersInputObjectSchema = Schema;
