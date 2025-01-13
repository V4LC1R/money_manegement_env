import { z } from 'zod';
import { ParcelCreateInputObjectSchema } from './objects/ParcelCreateInput.schema';
import { ParcelUncheckedCreateInputObjectSchema } from './objects/ParcelUncheckedCreateInput.schema';

export const ParcelCreateOneSchema = z.object({
  data: z.union([
    ParcelCreateInputObjectSchema,
    ParcelUncheckedCreateInputObjectSchema,
  ]),
});
