import { z } from 'zod';
import { FinancialTransactionUpdateInputObjectSchema } from './objects/FinancialTransactionUpdateInput.schema';
import { FinancialTransactionUncheckedUpdateInputObjectSchema } from './objects/FinancialTransactionUncheckedUpdateInput.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';

export const FinancialTransactionUpdateOneSchema = z.object({
  data: z.union([
    FinancialTransactionUpdateInputObjectSchema,
    FinancialTransactionUncheckedUpdateInputObjectSchema,
  ]),
  where: FinancialTransactionWhereUniqueInputObjectSchema,
});
