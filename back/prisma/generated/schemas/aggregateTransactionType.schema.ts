import { z } from 'zod';
import { TransactionTypeOrderByWithRelationInputObjectSchema } from './objects/TransactionTypeOrderByWithRelationInput.schema';
import { TransactionTypeWhereInputObjectSchema } from './objects/TransactionTypeWhereInput.schema';
import { TransactionTypeWhereUniqueInputObjectSchema } from './objects/TransactionTypeWhereUniqueInput.schema';
import { TransactionTypeCountAggregateInputObjectSchema } from './objects/TransactionTypeCountAggregateInput.schema';
import { TransactionTypeMinAggregateInputObjectSchema } from './objects/TransactionTypeMinAggregateInput.schema';
import { TransactionTypeMaxAggregateInputObjectSchema } from './objects/TransactionTypeMaxAggregateInput.schema';
import { TransactionTypeAvgAggregateInputObjectSchema } from './objects/TransactionTypeAvgAggregateInput.schema';
import { TransactionTypeSumAggregateInputObjectSchema } from './objects/TransactionTypeSumAggregateInput.schema';

export const TransactionTypeAggregateSchema = z.object({
  orderBy: z
    .union([
      TransactionTypeOrderByWithRelationInputObjectSchema,
      TransactionTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionTypeWhereInputObjectSchema.optional(),
  cursor: TransactionTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TransactionTypeCountAggregateInputObjectSchema])
    .optional(),
  _min: TransactionTypeMinAggregateInputObjectSchema.optional(),
  _max: TransactionTypeMaxAggregateInputObjectSchema.optional(),
  _avg: TransactionTypeAvgAggregateInputObjectSchema.optional(),
  _sum: TransactionTypeSumAggregateInputObjectSchema.optional(),
});
