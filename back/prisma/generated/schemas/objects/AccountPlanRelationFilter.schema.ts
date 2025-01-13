import { z } from 'zod';
import { AccountPlanWhereInputObjectSchema } from './AccountPlanWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanRelationFilter> = z
  .object({
    is: z
      .lazy(() => AccountPlanWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AccountPlanWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const AccountPlanRelationFilterObjectSchema = Schema;
