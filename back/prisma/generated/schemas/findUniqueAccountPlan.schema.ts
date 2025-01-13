import { z } from 'zod';
import { AccountPlanWhereUniqueInputObjectSchema } from './objects/AccountPlanWhereUniqueInput.schema';

export const AccountPlanFindUniqueSchema = z.object({
  where: AccountPlanWhereUniqueInputObjectSchema,
});
