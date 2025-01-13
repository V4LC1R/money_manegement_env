import { z } from 'zod';
import { FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';

export const FinancialTransactionDeleteManySchema = z.object({
  where: FinancialTransactionWhereInputObjectSchema.optional(),
});
