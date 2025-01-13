import { z } from 'zod';
import { UserCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserCreateWithoutTransactionsFinancialsInput.schema';
import { UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserUncheckedCreateWithoutTransactionsFinancialsInput.schema';
import { UserCreateOrConnectWithoutTransactionsFinancialsInputObjectSchema } from './UserCreateOrConnectWithoutTransactionsFinancialsInput.schema';
import { UserUpsertWithoutTransactionsFinancialsInputObjectSchema } from './UserUpsertWithoutTransactionsFinancialsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTransactionsFinancialsInputObjectSchema } from './UserUpdateWithoutTransactionsFinancialsInput.schema';
import { UserUncheckedUpdateWithoutTransactionsFinancialsInputObjectSchema } from './UserUncheckedUpdateWithoutTransactionsFinancialsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTransactionsFinancialsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutTransactionsFinancialsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutTransactionsFinancialsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutTransactionsFinancialsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutTransactionsFinancialsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutTransactionsFinancialsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutTransactionsFinancialsNestedInputObjectSchema =
  Schema;
