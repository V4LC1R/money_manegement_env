import { z } from 'zod';
import { TransactionTypeWhereInputObjectSchema } from './objects/TransactionTypeWhereInput.schema';
import { TransactionTypeOrderByWithAggregationInputObjectSchema } from './objects/TransactionTypeOrderByWithAggregationInput.schema';
import { TransactionTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/TransactionTypeScalarWhereWithAggregatesInput.schema';
import { TransactionTypeScalarFieldEnumSchema } from './enums/TransactionTypeScalarFieldEnum.schema';

export const TransactionTypeGroupBySchema = z.object({
  where: TransactionTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TransactionTypeOrderByWithAggregationInputObjectSchema,
      TransactionTypeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TransactionTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TransactionTypeScalarFieldEnumSchema),
});
