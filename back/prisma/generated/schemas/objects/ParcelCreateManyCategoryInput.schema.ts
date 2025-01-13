import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateManyCategoryInput> = z
  .object({
    id: z.number().optional(),
    value: z.number(),
    dueDate: z.coerce.date(),
    competence: z.coerce.date(),
    accountId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ParcelCreateManyCategoryInputObjectSchema = Schema;
