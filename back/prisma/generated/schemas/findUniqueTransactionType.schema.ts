import { z } from 'zod';
import { TransactionTypeWhereUniqueInputObjectSchema } from './objects/TransactionTypeWhereUniqueInput.schema';

export const TransactionTypeFindUniqueSchema = z.object({
  where: TransactionTypeWhereUniqueInputObjectSchema,
});
