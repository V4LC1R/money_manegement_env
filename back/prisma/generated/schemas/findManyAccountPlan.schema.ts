import { z } from 'zod';
import { AccountPlanOrderByWithRelationInputObjectSchema } from './objects/AccountPlanOrderByWithRelationInput.schema';
import { AccountPlanWhereInputObjectSchema } from './objects/AccountPlanWhereInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './objects/AccountPlanWhereUniqueInput.schema';
import { AccountPlanScalarFieldEnumSchema } from './enums/AccountPlanScalarFieldEnum.schema';

export const AccountPlanFindManySchema = z.object({
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
  distinct: z.array(AccountPlanScalarFieldEnumSchema).optional(),
});
