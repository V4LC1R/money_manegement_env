import { z } from 'zod';
import { HolderOrderByWithRelationInputObjectSchema } from './objects/HolderOrderByWithRelationInput.schema';
import { HolderWhereInputObjectSchema } from './objects/HolderWhereInput.schema';
import { HolderWhereUniqueInputObjectSchema } from './objects/HolderWhereUniqueInput.schema';
import { HolderCountAggregateInputObjectSchema } from './objects/HolderCountAggregateInput.schema';
import { HolderMinAggregateInputObjectSchema } from './objects/HolderMinAggregateInput.schema';
import { HolderMaxAggregateInputObjectSchema } from './objects/HolderMaxAggregateInput.schema';
import { HolderAvgAggregateInputObjectSchema } from './objects/HolderAvgAggregateInput.schema';
import { HolderSumAggregateInputObjectSchema } from './objects/HolderSumAggregateInput.schema';

export const HolderAggregateSchema = z.object({
  orderBy: z
    .union([
      HolderOrderByWithRelationInputObjectSchema,
      HolderOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: HolderWhereInputObjectSchema.optional(),
  cursor: HolderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), HolderCountAggregateInputObjectSchema])
    .optional(),
  _min: HolderMinAggregateInputObjectSchema.optional(),
  _max: HolderMaxAggregateInputObjectSchema.optional(),
  _avg: HolderAvgAggregateInputObjectSchema.optional(),
  _sum: HolderSumAggregateInputObjectSchema.optional(),
});
