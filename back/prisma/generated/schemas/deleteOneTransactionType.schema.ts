import { z } from 'zod';
import { TransactionTypeWhereUniqueInputObjectSchema } from './objects/TransactionTypeWhereUniqueInput.schema';

export const TransactionTypeDeleteOneSchema = z.object({
  where: TransactionTypeWhereUniqueInputObjectSchema,
});
