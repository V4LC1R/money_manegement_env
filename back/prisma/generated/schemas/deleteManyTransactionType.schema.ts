import { z } from 'zod';
import { TransactionTypeWhereInputObjectSchema } from './objects/TransactionTypeWhereInput.schema';

export const TransactionTypeDeleteManySchema = z.object({
  where: TransactionTypeWhereInputObjectSchema.optional(),
});
