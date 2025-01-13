import { z } from 'zod';
import { TransactionsFormsWhereInputObjectSchema } from './objects/TransactionsFormsWhereInput.schema';

export const TransactionsFormsDeleteManySchema = z.object({
  where: TransactionsFormsWhereInputObjectSchema.optional(),
});
