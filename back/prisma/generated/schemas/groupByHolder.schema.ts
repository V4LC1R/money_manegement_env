import { z } from 'zod';
import { HolderWhereInputObjectSchema } from './objects/HolderWhereInput.schema';
import { HolderOrderByWithAggregationInputObjectSchema } from './objects/HolderOrderByWithAggregationInput.schema';
import { HolderScalarWhereWithAggregatesInputObjectSchema } from './objects/HolderScalarWhereWithAggregatesInput.schema';
import { HolderScalarFieldEnumSchema } from './enums/HolderScalarFieldEnum.schema';

export const HolderGroupBySchema = z.object({
  where: HolderWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      HolderOrderByWithAggregationInputObjectSchema,
      HolderOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: HolderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(HolderScalarFieldEnumSchema),
});
