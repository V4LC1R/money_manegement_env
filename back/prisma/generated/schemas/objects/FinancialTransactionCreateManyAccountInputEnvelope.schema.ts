import { z } from 'zod';
import { FinancialTransactionCreateManyAccountInputObjectSchema } from './FinancialTransactionCreateManyAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateManyAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FinancialTransactionCreateManyAccountInputObjectSchema),
        z
          .lazy(() => FinancialTransactionCreateManyAccountInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FinancialTransactionCreateManyAccountInputEnvelopeObjectSchema =
  Schema;
