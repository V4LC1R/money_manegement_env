import { z } from 'zod';
import { AccountPlanWhereInputObjectSchema } from './objects/AccountPlanWhereInput.schema';

export const AccountPlanDeleteManySchema = z.object({
  where: AccountPlanWhereInputObjectSchema.optional(),
});
