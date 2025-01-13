import { z } from 'zod';
import { AccountPlanOrderByWithRelationInputObjectSchema } from './objects/AccountPlanOrderByWithRelationInput.schema';
import { AccountPlanWhereInputObjectSchema } from './objects/AccountPlanWhereInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './objects/AccountPlanWhereUniqueInput.schema';
import { AccountPlanCountAggregateInputObjectSchema } from './objects/AccountPlanCountAggregateInput.schema';
import { AccountPlanMinAggregateInputObjectSchema } from './objects/AccountPlanMinAggregateInput.schema';
import { AccountPlanMaxAggregateInputObjectSchema } from './objects/AccountPlanMaxAggregateInput.schema';
import { AccountPlanAvgAggregateInputObjectSchema } from './objects/AccountPlanAvgAggregateInput.schema';
import { AccountPlanSumAggregateInputObjectSchema } from './objects/AccountPlanSumAggregateInput.schema';

export const AccountPlanAggregateSchema = z.object({
  orderBy: z
    .union([
      AccountPlanOrderByWithRelationInputObjectSchema,
      AccountPlanOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AccountPlanWhereInputObjectSchema.optional(),
  cursor: AccountPlanWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AccountPlanCountAggregateInputObjectSchema])
    .optional(),
  _min: AccountPlanMinAggregateInputObjectSchema.optional(),
  _max: AccountPlanMaxAggregateInputObjectSchema.optional(),
  _avg: AccountPlanAvgAggregateInputObjectSchema.optional(),
  _sum: AccountPlanSumAggregateInputObjectSchema.optional(),
});
