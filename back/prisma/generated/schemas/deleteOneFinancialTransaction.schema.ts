import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';

export const FinancialTransactionDeleteOneSchema = z.object({
  where: FinancialTransactionWhereUniqueInputObjectSchema,
});
