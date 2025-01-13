import { z } from 'zod';
import { UserCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserCreateWithoutTransactionsFinancialsInput.schema';
import { UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserUncheckedCreateWithoutTransactionsFinancialsInput.schema';
import { UserCreateOrConnectWithoutTransactionsFinancialsInputObjectSchema } from './UserCreateOrConnectWithoutTransactionsFinancialsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTransactionsFinancialsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutTransactionsFinancialsInputObjectSchema =
  Schema;
