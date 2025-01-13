import { z } from 'zod';
import { TransactionTypeCreateManyInputObjectSchema } from './objects/TransactionTypeCreateManyInput.schema';

export const TransactionTypeCreateManySchema = z.object({
  data: z.union([
    TransactionTypeCreateManyInputObjectSchema,
    z.array(TransactionTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
