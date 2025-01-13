import { z } from 'zod';
import { AccountPlanCreateManyInputObjectSchema } from './objects/AccountPlanCreateManyInput.schema';

export const AccountPlanCreateManySchema = z.object({
  data: z.union([
    AccountPlanCreateManyInputObjectSchema,
    z.array(AccountPlanCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
