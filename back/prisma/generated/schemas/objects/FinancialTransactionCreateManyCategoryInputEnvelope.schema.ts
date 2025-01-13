import { z } from 'zod';
import { FinancialTransactionCreateManyCategoryInputObjectSchema } from './FinancialTransactionCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateManyCategoryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FinancialTransactionCreateManyCategoryInputObjectSchema),
        z
          .lazy(() => FinancialTransactionCreateManyCategoryInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FinancialTransactionCreateManyCategoryInputEnvelopeObjectSchema =
  Schema;
