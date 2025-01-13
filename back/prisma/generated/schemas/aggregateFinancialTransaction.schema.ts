import { z } from 'zod';
import { FinancialTransactionOrderByWithRelationInputObjectSchema } from './objects/FinancialTransactionOrderByWithRelationInput.schema';
import { FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCountAggregateInputObjectSchema } from './objects/FinancialTransactionCountAggregateInput.schema';
import { FinancialTransactionMinAggregateInputObjectSchema } from './objects/FinancialTransactionMinAggregateInput.schema';
import { FinancialTransactionMaxAggregateInputObjectSchema } from './objects/FinancialTransactionMaxAggregateInput.schema';
import { FinancialTransactionAvgAggregateInputObjectSchema } from './objects/FinancialTransactionAvgAggregateInput.schema';
import { FinancialTransactionSumAggregateInputObjectSchema } from './objects/FinancialTransactionSumAggregateInput.schema';

export const FinancialTransactionAggregateSchema = z.object({
  orderBy: z
    .union([
      FinancialTransactionOrderByWithRelationInputObjectSchema,
      FinancialTransactionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FinancialTransactionWhereInputObjectSchema.optional(),
  cursor: FinancialTransactionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      FinancialTransactionCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: FinancialTransactionMinAggregateInputObjectSchema.optional(),
  _max: FinancialTransactionMaxAggregateInputObjectSchema.optional(),
  _avg: FinancialTransactionAvgAggregateInputObjectSchema.optional(),
  _sum: FinancialTransactionSumAggregateInputObjectSchema.optional(),
});
