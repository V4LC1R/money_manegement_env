import { z } from 'zod';
import { UserCreateWithoutHoldersInputObjectSchema } from './UserCreateWithoutHoldersInput.schema';
import { UserUncheckedCreateWithoutHoldersInputObjectSchema } from './UserUncheckedCreateWithoutHoldersInput.schema';
import { UserCreateOrConnectWithoutHoldersInputObjectSchema } from './UserCreateOrConnectWithoutHoldersInput.schema';
import { UserUpsertWithoutHoldersInputObjectSchema } from './UserUpsertWithoutHoldersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutHoldersInputObjectSchema } from './UserUpdateWithoutHoldersInput.schema';
import { UserUncheckedUpdateWithoutHoldersInputObjectSchema } from './UserUncheckedUpdateWithoutHoldersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutHoldersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutHoldersInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutHoldersInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutHoldersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutHoldersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutHoldersInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutHoldersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutHoldersNestedInputObjectSchema =
  Schema;
