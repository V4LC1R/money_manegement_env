import { z } from 'zod';
import { UserCreateWithoutHoldersInputObjectSchema } from './UserCreateWithoutHoldersInput.schema';
import { UserUncheckedCreateWithoutHoldersInputObjectSchema } from './UserUncheckedCreateWithoutHoldersInput.schema';
import { UserCreateOrConnectWithoutHoldersInputObjectSchema } from './UserCreateOrConnectWithoutHoldersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutHoldersInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutHoldersInputObjectSchema = Schema;
