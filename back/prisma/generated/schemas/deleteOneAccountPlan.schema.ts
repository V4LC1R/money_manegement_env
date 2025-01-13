import { z } from 'zod';
import { AccountPlanWhereUniqueInputObjectSchema } from './objects/AccountPlanWhereUniqueInput.schema';

export const AccountPlanDeleteOneSchema = z.object({
  where: AccountPlanWhereUniqueInputObjectSchema,
});
