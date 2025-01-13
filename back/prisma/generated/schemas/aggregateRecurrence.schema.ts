import { z } from 'zod';
import { RecurrenceOrderByWithRelationInputObjectSchema } from './objects/RecurrenceOrderByWithRelationInput.schema';
import { RecurrenceWhereInputObjectSchema } from './objects/RecurrenceWhereInput.schema';
import { RecurrenceWhereUniqueInputObjectSchema } from './objects/RecurrenceWhereUniqueInput.schema';
import { RecurrenceCountAggregateInputObjectSchema } from './objects/RecurrenceCountAggregateInput.schema';
import { RecurrenceMinAggregateInputObjectSchema } from './objects/RecurrenceMinAggregateInput.schema';
import { RecurrenceMaxAggregateInputObjectSchema } from './objects/RecurrenceMaxAggregateInput.schema';
import { RecurrenceAvgAggregateInputObjectSchema } from './objects/RecurrenceAvgAggregateInput.schema';
import { RecurrenceSumAggregateInputObjectSchema } from './objects/RecurrenceSumAggregateInput.schema';

export const RecurrenceAggregateSchema = z.object({
  orderBy: z
    .union([
      RecurrenceOrderByWithRelationInputObjectSchema,
      RecurrenceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RecurrenceWhereInputObjectSchema.optional(),
  cursor: RecurrenceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RecurrenceCountAggregateInputObjectSchema])
    .optional(),
  _min: RecurrenceMinAggregateInputObjectSchema.optional(),
  _max: RecurrenceMaxAggregateInputObjectSchema.optional(),
  _avg: RecurrenceAvgAggregateInputObjectSchema.optional(),
  _sum: RecurrenceSumAggregateInputObjectSchema.optional(),
});
