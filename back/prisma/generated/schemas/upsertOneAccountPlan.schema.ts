import { z } from 'zod';
import { AccountPlanWhereUniqueInputObjectSchema } from './objects/AccountPlanWhereUniqueInput.schema';
import { AccountPlanCreateInputObjectSchema } from './objects/AccountPlanCreateInput.schema';
import { AccountPlanUncheckedCreateInputObjectSchema } from './objects/AccountPlanUncheckedCreateInput.schema';
import { AccountPlanUpdateInputObjectSchema } from './objects/AccountPlanUpdateInput.schema';
import { AccountPlanUncheckedUpdateInputObjectSchema } from './objects/AccountPlanUncheckedUpdateInput.schema';

export const AccountPlanUpsertSchema = z.object({
  where: AccountPlanWhereUniqueInputObjectSchema,
  create: z.union([
    AccountPlanCreateInputObjectSchema,
    AccountPlanUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AccountPlanUpdateInputObjectSchema,
    AccountPlanUncheckedUpdateInputObjectSchema,
  ]),
});
