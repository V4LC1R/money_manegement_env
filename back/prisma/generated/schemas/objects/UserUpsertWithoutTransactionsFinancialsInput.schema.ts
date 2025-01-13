import { z } from 'zod';
import { UserUpdateWithoutTransactionsFinancialsInputObjectSchema } from './UserUpdateWithoutTransactionsFinancialsInput.schema';
import { UserUncheckedUpdateWithoutTransactionsFinancialsInputObjectSchema } from './UserUncheckedUpdateWithoutTransactionsFinancialsInput.schema';
import { UserCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserCreateWithoutTransactionsFinancialsInput.schema';
import { UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema } from './UserUncheckedCreateWithoutTransactionsFinancialsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutTransactionsFinancialsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutTransactionsFinancialsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutTransactionsFinancialsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutTransactionsFinancialsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutTransactionsFinancialsInputObjectSchema = Schema;
