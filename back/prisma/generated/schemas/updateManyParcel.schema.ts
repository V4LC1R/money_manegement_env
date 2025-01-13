import { z } from 'zod';
import { ParcelUpdateManyMutationInputObjectSchema } from './objects/ParcelUpdateManyMutationInput.schema';
import { ParcelWhereInputObjectSchema } from './objects/ParcelWhereInput.schema';

export const ParcelUpdateManySchema = z.object({
  data: ParcelUpdateManyMutationInputObjectSchema,
  where: ParcelWhereInputObjectSchema.optional(),
});
