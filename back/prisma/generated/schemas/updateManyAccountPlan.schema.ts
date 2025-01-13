import { z } from 'zod';
import { AccountPlanUpdateManyMutationInputObjectSchema } from './objects/AccountPlanUpdateManyMutationInput.schema';
import { AccountPlanWhereInputObjectSchema } from './objects/AccountPlanWhereInput.schema';

export const AccountPlanUpdateManySchema = z.object({
  data: AccountPlanUpdateManyMutationInputObjectSchema,
  where: AccountPlanWhereInputObjectSchema.optional(),
});
