import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateManyAccountInput> = z
  .object({
    id: z.number().optional(),
    value: z.number(),
    dueDate: z.coerce.date(),
    competence: z.coerce.date(),
    categoryId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ParcelCreateManyAccountInputObjectSchema = Schema;
