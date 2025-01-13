import { z } from 'zod';
import { HolderOrderByWithRelationInputObjectSchema } from './objects/HolderOrderByWithRelationInput.schema';
import { HolderWhereInputObjectSchema } from './objects/HolderWhereInput.schema';
import { HolderWhereUniqueInputObjectSchema } from './objects/HolderWhereUniqueInput.schema';
import { HolderScalarFieldEnumSchema } from './enums/HolderScalarFieldEnum.schema';

export const HolderFindFirstSchema = z.object({
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
  distinct: z.array(HolderScalarFieldEnumSchema).optional(),
});
