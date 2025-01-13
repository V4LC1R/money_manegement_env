import { z } from 'zod';
import { FinancialTransactionCreateManyTransactionsFormInputObjectSchema } from './FinancialTransactionCreateManyTransactionsFormInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateManyTransactionsFormInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => FinancialTransactionCreateManyTransactionsFormInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              FinancialTransactionCreateManyTransactionsFormInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FinancialTransactionCreateManyTransactionsFormInputEnvelopeObjectSchema =
  Schema;
