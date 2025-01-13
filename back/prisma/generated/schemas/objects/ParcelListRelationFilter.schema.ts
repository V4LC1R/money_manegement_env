import { z } from 'zod';
import { ParcelWhereInputObjectSchema } from './ParcelWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelListRelationFilter> = z
  .object({
    every: z.lazy(() => ParcelWhereInputObjectSchema).optional(),
    some: z.lazy(() => ParcelWhereInputObjectSchema).optional(),
    none: z.lazy(() => ParcelWhereInputObjectSchema).optional(),
  })
  .strict();

export const ParcelListRelationFilterObjectSchema = Schema;
