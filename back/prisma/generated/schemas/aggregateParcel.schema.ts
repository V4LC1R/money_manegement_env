import { z } from 'zod';
import { ParcelOrderByWithRelationInputObjectSchema } from './objects/ParcelOrderByWithRelationInput.schema';
import { ParcelWhereInputObjectSchema } from './objects/ParcelWhereInput.schema';
import { ParcelWhereUniqueInputObjectSchema } from './objects/ParcelWhereUniqueInput.schema';
import { ParcelCountAggregateInputObjectSchema } from './objects/ParcelCountAggregateInput.schema';
import { ParcelMinAggregateInputObjectSchema } from './objects/ParcelMinAggregateInput.schema';
import { ParcelMaxAggregateInputObjectSchema } from './objects/ParcelMaxAggregateInput.schema';
import { ParcelAvgAggregateInputObjectSchema } from './objects/ParcelAvgAggregateInput.schema';
import { ParcelSumAggregateInputObjectSchema } from './objects/ParcelSumAggregateInput.schema';

export const ParcelAggregateSchema = z.object({
  orderBy: z
    .union([
      ParcelOrderByWithRelationInputObjectSchema,
      ParcelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ParcelWhereInputObjectSchema.optional(),
  cursor: ParcelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ParcelCountAggregateInputObjectSchema])
    .optional(),
  _min: ParcelMinAggregateInputObjectSchema.optional(),
  _max: ParcelMaxAggregateInputObjectSchema.optional(),
  _avg: ParcelAvgAggregateInputObjectSchema.optional(),
  _sum: ParcelSumAggregateInputObjectSchema.optional(),
});
