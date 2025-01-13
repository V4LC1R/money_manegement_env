import { z } from 'zod';
import { RecurrenceCreateManyCategoryInputObjectSchema } from './RecurrenceCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RecurrenceCreateManyCategoryInputObjectSchema),
      z.lazy(() => RecurrenceCreateManyCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RecurrenceCreateManyCategoryInputEnvelopeObjectSchema = Schema;
