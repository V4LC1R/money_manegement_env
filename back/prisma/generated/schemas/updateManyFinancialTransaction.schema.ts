import { z } from 'zod';
import { FinancialTransactionUpdateManyMutationInputObjectSchema } from './objects/FinancialTransactionUpdateManyMutationInput.schema';
import { FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';

export const FinancialTransactionUpdateManySchema = z.object({
  data: FinancialTransactionUpdateManyMutationInputObjectSchema,
  where: FinancialTransactionWhereInputObjectSchema.optional(),
});
