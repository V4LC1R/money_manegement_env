import { z } from 'zod';
import { TransactionsFormsCreateManyInputObjectSchema } from './objects/TransactionsFormsCreateManyInput.schema';

export const TransactionsFormsCreateManySchema = z.object({
  data: z.union([
    TransactionsFormsCreateManyInputObjectSchema,
    z.array(TransactionsFormsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
