import { z } from 'zod';
import { RecurrenceWhereInputObjectSchema } from './RecurrenceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceListRelationFilter> = z
  .object({
    every: z.lazy(() => RecurrenceWhereInputObjectSchema).optional(),
    some: z.lazy(() => RecurrenceWhereInputObjectSchema).optional(),
    none: z.lazy(() => RecurrenceWhereInputObjectSchema).optional(),
  })
  .strict();

export const RecurrenceListRelationFilterObjectSchema = Schema;
