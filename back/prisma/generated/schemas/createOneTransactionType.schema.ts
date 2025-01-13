import { z } from 'zod';
import { TransactionTypeCreateInputObjectSchema } from './objects/TransactionTypeCreateInput.schema';
import { TransactionTypeUncheckedCreateInputObjectSchema } from './objects/TransactionTypeUncheckedCreateInput.schema';

export const TransactionTypeCreateOneSchema = z.object({
  data: z.union([
    TransactionTypeCreateInputObjectSchema,
    TransactionTypeUncheckedCreateInputObjectSchema,
  ]),
});
