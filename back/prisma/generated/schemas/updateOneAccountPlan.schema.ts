import { z } from 'zod';
import { AccountPlanUpdateInputObjectSchema } from './objects/AccountPlanUpdateInput.schema';
import { AccountPlanUncheckedUpdateInputObjectSchema } from './objects/AccountPlanUncheckedUpdateInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './objects/AccountPlanWhereUniqueInput.schema';

export const AccountPlanUpdateOneSchema = z.object({
  data: z.union([
    AccountPlanUpdateInputObjectSchema,
    AccountPlanUncheckedUpdateInputObjectSchema,
  ]),
  where: AccountPlanWhereUniqueInputObjectSchema,
});
