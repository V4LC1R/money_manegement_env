import { z } from 'zod';
import { ParcelCreateManyInputObjectSchema } from './objects/ParcelCreateManyInput.schema';

export const ParcelCreateManySchema = z.object({
  data: z.union([
    ParcelCreateManyInputObjectSchema,
    z.array(ParcelCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
