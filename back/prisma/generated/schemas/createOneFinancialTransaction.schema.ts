import { z } from 'zod';
import { FinancialTransactionCreateInputObjectSchema } from './objects/FinancialTransactionCreateInput.schema';
import { FinancialTransactionUncheckedCreateInputObjectSchema } from './objects/FinancialTransactionUncheckedCreateInput.schema';

export const FinancialTransactionCreateOneSchema = z.object({
  data: z.union([
    FinancialTransactionCreateInputObjectSchema,
    FinancialTransactionUncheckedCreateInputObjectSchema,
  ]),
});
