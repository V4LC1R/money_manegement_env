import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceCreateManyCategoryInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    reptition: z.number(),
    range: z.number(),
    value: z.number(),
    type: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const RecurrenceCreateManyCategoryInputObjectSchema = Schema;
