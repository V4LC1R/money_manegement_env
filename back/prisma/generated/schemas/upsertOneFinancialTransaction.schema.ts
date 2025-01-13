import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateInputObjectSchema } from './objects/FinancialTransactionCreateInput.schema';
import { FinancialTransactionUncheckedCreateInputObjectSchema } from './objects/FinancialTransactionUncheckedCreateInput.schema';
import { FinancialTransactionUpdateInputObjectSchema } from './objects/FinancialTransactionUpdateInput.schema';
import { FinancialTransactionUncheckedUpdateInputObjectSchema } from './objects/FinancialTransactionUncheckedUpdateInput.schema';

export const FinancialTransactionUpsertSchema = z.object({
  where: FinancialTransactionWhereUniqueInputObjectSchema,
  create: z.union([
    FinancialTransactionCreateInputObjectSchema,
    FinancialTransactionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FinancialTransactionUpdateInputObjectSchema,
    FinancialTransactionUncheckedUpdateInputObjectSchema,
  ]),
});
