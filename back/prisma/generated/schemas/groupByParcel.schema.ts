import { z } from 'zod';
import { ParcelWhereInputObjectSchema } from './objects/ParcelWhereInput.schema';
import { ParcelOrderByWithAggregationInputObjectSchema } from './objects/ParcelOrderByWithAggregationInput.schema';
import { ParcelScalarWhereWithAggregatesInputObjectSchema } from './objects/ParcelScalarWhereWithAggregatesInput.schema';
import { ParcelScalarFieldEnumSchema } from './enums/ParcelScalarFieldEnum.schema';

export const ParcelGroupBySchema = z.object({
  where: ParcelWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ParcelOrderByWithAggregationInputObjectSchema,
      ParcelOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ParcelScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ParcelScalarFieldEnumSchema),
});
