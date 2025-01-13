import { z } from 'zod';
import { TransactionsFormsCreateManyHolderInputObjectSchema } from './TransactionsFormsCreateManyHolderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateManyHolderInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TransactionsFormsCreateManyHolderInputObjectSchema),
        z
          .lazy(() => TransactionsFormsCreateManyHolderInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TransactionsFormsCreateManyHolderInputEnvelopeObjectSchema =
  Schema;
