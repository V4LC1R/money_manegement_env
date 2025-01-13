import { z } from 'zod';
import { AccountPlanWhereInputObjectSchema } from './objects/AccountPlanWhereInput.schema';
import { AccountPlanOrderByWithAggregationInputObjectSchema } from './objects/AccountPlanOrderByWithAggregationInput.schema';
import { AccountPlanScalarWhereWithAggregatesInputObjectSchema } from './objects/AccountPlanScalarWhereWithAggregatesInput.schema';
import { AccountPlanScalarFieldEnumSchema } from './enums/AccountPlanScalarFieldEnum.schema';

export const AccountPlanGroupBySchema = z.object({
  where: AccountPlanWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AccountPlanOrderByWithAggregationInputObjectSchema,
      AccountPlanOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AccountPlanScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AccountPlanScalarFieldEnumSchema),
});
