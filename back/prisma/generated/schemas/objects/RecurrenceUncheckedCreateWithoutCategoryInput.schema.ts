import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceUncheckedCreateWithoutCategoryInput> =
  z
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

export const RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema = Schema;
