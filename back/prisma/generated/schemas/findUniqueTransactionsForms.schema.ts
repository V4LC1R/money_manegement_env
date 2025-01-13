import { z } from 'zod';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './objects/TransactionsFormsWhereUniqueInput.schema';

export const TransactionsFormsFindUniqueSchema = z.object({
  where: TransactionsFormsWhereUniqueInputObjectSchema,
});
