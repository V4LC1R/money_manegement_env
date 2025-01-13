import { z } from 'zod';
import { ParcelWhereInputObjectSchema } from './objects/ParcelWhereInput.schema';

export const ParcelDeleteManySchema = z.object({
  where: ParcelWhereInputObjectSchema.optional(),
});
