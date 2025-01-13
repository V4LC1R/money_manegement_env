import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserCreateWithoutTransactionsFinancialsInput.schema';
import { UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserUncheckedCreateWithoutTransactionsFinancialsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutTransactionsFinancialsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutTransactionsFinancialsInputObjectSchema),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutTransactionsFinancialsInputObjectSchema =
  Schema;
