import { z } from 'zod';
import { FinancialTransactionCreateManyTypeTransactionInputObjectSchema } from './FinancialTransactionCreateManyTypeTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateManyTypeTransactionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => FinancialTransactionCreateManyTypeTransactionInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              FinancialTransactionCreateManyTypeTransactionInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FinancialTransactionCreateManyTypeTransactionInputEnvelopeObjectSchema =
  Schema;
