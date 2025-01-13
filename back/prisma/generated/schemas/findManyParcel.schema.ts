import { z } from 'zod';
import { ParcelOrderByWithRelationInputObjectSchema } from './objects/ParcelOrderByWithRelationInput.schema';
import { ParcelWhereInputObjectSchema } from './objects/ParcelWhereInput.schema';
import { ParcelWhereUniqueInputObjectSchema } from './objects/ParcelWhereUniqueInput.schema';
import { ParcelScalarFieldEnumSchema } from './enums/ParcelScalarFieldEnum.schema';

export const ParcelFindManySchema = z.object({
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
  distinct: z.array(ParcelScalarFieldEnumSchema).optional(),
});
