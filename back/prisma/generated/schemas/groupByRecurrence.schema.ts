import { z } from 'zod';
import { RecurrenceWhereInputObjectSchema } from './objects/RecurrenceWhereInput.schema';
import { RecurrenceOrderByWithAggregationInputObjectSchema } from './objects/RecurrenceOrderByWithAggregationInput.schema';
import { RecurrenceScalarWhereWithAggregatesInputObjectSchema } from './objects/RecurrenceScalarWhereWithAggregatesInput.schema';
import { RecurrenceScalarFieldEnumSchema } from './enums/RecurrenceScalarFieldEnum.schema';

export const RecurrenceGroupBySchema = z.object({
  where: RecurrenceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RecurrenceOrderByWithAggregationInputObjectSchema,
      RecurrenceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RecurrenceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RecurrenceScalarFieldEnumSchema),
});
