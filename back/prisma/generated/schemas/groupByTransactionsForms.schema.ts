import { z } from 'zod';
import { TransactionsFormsWhereInputObjectSchema } from './objects/TransactionsFormsWhereInput.schema';
import { TransactionsFormsOrderByWithAggregationInputObjectSchema } from './objects/TransactionsFormsOrderByWithAggregationInput.schema';
import { TransactionsFormsScalarWhereWithAggregatesInputObjectSchema } from './objects/TransactionsFormsScalarWhereWithAggregatesInput.schema';
import { TransactionsFormsScalarFieldEnumSchema } from './enums/TransactionsFormsScalarFieldEnum.schema';

export const TransactionsFormsGroupBySchema = z.object({
  where: TransactionsFormsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TransactionsFormsOrderByWithAggregationInputObjectSchema,
      TransactionsFormsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    TransactionsFormsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TransactionsFormsScalarFieldEnumSchema),
});
