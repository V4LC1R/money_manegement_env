import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './objects/ParcelWhereUniqueInput.schema';

export const ParcelDeleteOneSchema = z.object({
  where: ParcelWhereUniqueInputObjectSchema,
});
