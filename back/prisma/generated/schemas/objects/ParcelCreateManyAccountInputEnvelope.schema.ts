import { z } from 'zod';
import { ParcelCreateManyAccountInputObjectSchema } from './ParcelCreateManyAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateManyAccountInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ParcelCreateManyAccountInputObjectSchema),
      z.lazy(() => ParcelCreateManyAccountInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ParcelCreateManyAccountInputEnvelopeObjectSchema = Schema;
