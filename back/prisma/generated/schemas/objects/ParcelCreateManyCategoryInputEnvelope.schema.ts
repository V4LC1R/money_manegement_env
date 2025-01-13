import { z } from 'zod';
import { ParcelCreateManyCategoryInputObjectSchema } from './ParcelCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ParcelCreateManyCategoryInputObjectSchema),
      z.lazy(() => ParcelCreateManyCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ParcelCreateManyCategoryInputEnvelopeObjectSchema = Schema;
