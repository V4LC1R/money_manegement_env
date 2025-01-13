import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUpdateWithoutTransactionsFormInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutTransactionsFormInput.schema';
import { FinancialTransactionCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateWithoutTransactionsFormInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTransactionsFormInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutTransactionsFormInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            FinancialTransactionUpdateWithoutTransactionsFormInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutTransactionsFormInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            FinancialTransactionCreateWithoutTransactionsFormInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutTransactionsFormInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpsertWithWhereUniqueWithoutTransactionsFormInputObjectSchema =
  Schema;
