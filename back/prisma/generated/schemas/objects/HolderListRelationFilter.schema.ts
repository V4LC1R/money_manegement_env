import { z } from 'zod';
import { HolderWhereInputObjectSchema } from './HolderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderListRelationFilter> = z
  .object({
    every: z.lazy(() => HolderWhereInputObjectSchema).optional(),
    some: z.lazy(() => HolderWhereInputObjectSchema).optional(),
    none: z.lazy(() => HolderWhereInputObjectSchema).optional(),
  })
  .strict();

export const HolderListRelationFilterObjectSchema = Schema;
