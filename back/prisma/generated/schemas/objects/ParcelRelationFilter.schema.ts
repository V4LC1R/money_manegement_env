import { z } from 'zod';
import { ParcelWhereInputObjectSchema } from './ParcelWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelRelationFilter> = z
  .object({
    is: z
      .lazy(() => ParcelWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ParcelWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ParcelRelationFilterObjectSchema = Schema;
