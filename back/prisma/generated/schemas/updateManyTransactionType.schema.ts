import { z } from 'zod';
import { TransactionTypeUpdateManyMutationInputObjectSchema } from './objects/TransactionTypeUpdateManyMutationInput.schema';
import { TransactionTypeWhereInputObjectSchema } from './objects/TransactionTypeWhereInput.schema';

export const TransactionTypeUpdateManySchema = z.object({
  data: TransactionTypeUpdateManyMutationInputObjectSchema,
  where: TransactionTypeWhereInputObjectSchema.optional(),
});
