import { z } from 'zod';
import { AccountPlanCreateInputObjectSchema } from './objects/AccountPlanCreateInput.schema';
import { AccountPlanUncheckedCreateInputObjectSchema } from './objects/AccountPlanUncheckedCreateInput.schema';

export const AccountPlanCreateOneSchema = z.object({
  data: z.union([
    AccountPlanCreateInputObjectSchema,
    AccountPlanUncheckedCreateInputObjectSchema,
  ]),
});
