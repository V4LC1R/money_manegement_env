import { z } from 'zod';
import { ParcelUpdateInputObjectSchema } from './objects/ParcelUpdateInput.schema';
import { ParcelUncheckedUpdateInputObjectSchema } from './objects/ParcelUncheckedUpdateInput.schema';
import { ParcelWhereUniqueInputObjectSchema } from './objects/ParcelWhereUniqueInput.schema';

export const ParcelUpdateOneSchema = z.object({
  data: z.union([
    ParcelUpdateInputObjectSchema,
    ParcelUncheckedUpdateInputObjectSchema,
  ]),
  where: ParcelWhereUniqueInputObjectSchema,
});
