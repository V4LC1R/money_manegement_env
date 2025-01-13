import { z } from 'zod';
import { FinancialTransactionCreateManyParcelInputObjectSchema } from './FinancialTransactionCreateManyParcelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateManyParcelInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FinancialTransactionCreateManyParcelInputObjectSchema),
        z
          .lazy(() => FinancialTransactionCreateManyParcelInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FinancialTransactionCreateManyParcelInputEnvelopeObjectSchema =
  Schema;
