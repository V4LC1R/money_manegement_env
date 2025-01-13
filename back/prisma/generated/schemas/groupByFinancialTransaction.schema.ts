import { z } from 'zod';
import { FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';
import { FinancialTransactionOrderByWithAggregationInputObjectSchema } from './objects/FinancialTransactionOrderByWithAggregationInput.schema';
import { FinancialTransactionScalarWhereWithAggregatesInputObjectSchema } from './objects/FinancialTransactionScalarWhereWithAggregatesInput.schema';
import { FinancialTransactionScalarFieldEnumSchema } from './enums/FinancialTransactionScalarFieldEnum.schema';

export const FinancialTransactionGroupBySchema = z.object({
  where: FinancialTransactionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FinancialTransactionOrderByWithAggregationInputObjectSchema,
      FinancialTransactionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    FinancialTransactionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FinancialTransactionScalarFieldEnumSchema),
});
