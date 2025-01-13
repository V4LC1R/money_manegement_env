import { z } from 'zod';
import { TransactionsFormsCreateInputObjectSchema } from './objects/TransactionsFormsCreateInput.schema';
import { TransactionsFormsUncheckedCreateInputObjectSchema } from './objects/TransactionsFormsUncheckedCreateInput.schema';

export const TransactionsFormsCreateOneSchema = z.object({
  data: z.union([
    TransactionsFormsCreateInputObjectSchema,
    TransactionsFormsUncheckedCreateInputObjectSchema,
  ]),
});
