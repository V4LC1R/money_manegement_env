import { z } from 'zod';
import { AccountPlanCreateNestedOneWithoutRecurrencesInputObjectSchema } from './AccountPlanCreateNestedOneWithoutRecurrencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceCreateInput> = z
  .object({
    name: z.string(),
    reptition: z.number(),
    range: z.number(),
    value: z.number(),
    type: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    category: z.lazy(
      () => AccountPlanCreateNestedOneWithoutRecurrencesInputObjectSchema,
    ),
  })
  .strict();

export const RecurrenceCreateInputObjectSchema = Schema;
