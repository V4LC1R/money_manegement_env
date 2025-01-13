import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './objects/ParcelWhereUniqueInput.schema';

export const ParcelFindUniqueSchema = z.object({
  where: ParcelWhereUniqueInputObjectSchema,
});
