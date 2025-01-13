import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';

export const FinancialTransactionFindUniqueSchema = z.object({
  where: FinancialTransactionWhereUniqueInputObjectSchema,
});
