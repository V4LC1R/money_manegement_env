import { z } from 'zod';
import { HolderWhereInputObjectSchema } from './HolderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderRelationFilter> = z
  .object({
    is: z
      .lazy(() => HolderWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => HolderWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const HolderRelationFilterObjectSchema = Schema;
