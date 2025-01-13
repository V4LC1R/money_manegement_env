import { z } from 'zod';
import { TransactionsFormsOrderByWithRelationInputObjectSchema } from './objects/TransactionsFormsOrderByWithRelationInput.schema';
import { TransactionsFormsWhereInputObjectSchema } from './objects/TransactionsFormsWhereInput.schema';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './objects/TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsCountAggregateInputObjectSchema } from './objects/TransactionsFormsCountAggregateInput.schema';
import { TransactionsFormsMinAggregateInputObjectSchema } from './objects/TransactionsFormsMinAggregateInput.schema';
import { TransactionsFormsMaxAggregateInputObjectSchema } from './objects/TransactionsFormsMaxAggregateInput.schema';
import { TransactionsFormsAvgAggregateInputObjectSchema } from './objects/TransactionsFormsAvgAggregateInput.schema';
import { TransactionsFormsSumAggregateInputObjectSchema } from './objects/TransactionsFormsSumAggregateInput.schema';

export const TransactionsFormsAggregateSchema = z.object({
  orderBy: z
    .union([
      TransactionsFormsOrderByWithRelationInputObjectSchema,
      TransactionsFormsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionsFormsWhereInputObjectSchema.optional(),
  cursor: TransactionsFormsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TransactionsFormsCountAggregateInputObjectSchema])
    .optional(),
  _min: TransactionsFormsMinAggregateInputObjectSchema.optional(),
  _max: TransactionsFormsMaxAggregateInputObjectSchema.optional(),
  _avg: TransactionsFormsAvgAggregateInputObjectSchema.optional(),
  _sum: TransactionsFormsSumAggregateInputObjectSchema.optional(),
});
