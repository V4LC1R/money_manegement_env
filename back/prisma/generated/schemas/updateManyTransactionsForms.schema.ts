import { z } from 'zod';
import { TransactionsFormsUpdateManyMutationInputObjectSchema } from './objects/TransactionsFormsUpdateManyMutationInput.schema';
import { TransactionsFormsWhereInputObjectSchema } from './objects/TransactionsFormsWhereInput.schema';

export const TransactionsFormsUpdateManySchema = z.object({
  data: TransactionsFormsUpdateManyMutationInputObjectSchema,
  where: TransactionsFormsWhereInputObjectSchema.optional(),
});
