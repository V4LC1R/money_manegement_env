import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutHoldersInputObjectSchema } from './UserCreateWithoutHoldersInput.schema';
import { UserUncheckedCreateWithoutHoldersInputObjectSchema } from './UserUncheckedCreateWithoutHoldersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutHoldersInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutHoldersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutHoldersInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutHoldersInputObjectSchema = Schema;
