import { z } from 'zod';
import { FinancialTransactionCreateManyUserInputObjectSchema } from './FinancialTransactionCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FinancialTransactionCreateManyUserInputObjectSchema),
        z
          .lazy(() => FinancialTransactionCreateManyUserInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FinancialTransactionCreateManyUserInputEnvelopeObjectSchema =
  Schema;
