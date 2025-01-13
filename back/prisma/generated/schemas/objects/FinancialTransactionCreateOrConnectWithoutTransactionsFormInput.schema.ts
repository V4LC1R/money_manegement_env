import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateWithoutTransactionsFormInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTransactionsFormInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutTransactionsFormInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
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

export const FinancialTransactionCreateOrConnectWithoutTransactionsFormInputObjectSchema =
  Schema;
