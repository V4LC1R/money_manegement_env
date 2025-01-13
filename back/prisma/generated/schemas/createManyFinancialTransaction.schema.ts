import { z } from 'zod';
import { FinancialTransactionCreateManyInputObjectSchema } from './objects/FinancialTransactionCreateManyInput.schema';

export const FinancialTransactionCreateManySchema = z.object({
  data: z.union([
    FinancialTransactionCreateManyInputObjectSchema,
    z.array(FinancialTransactionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
