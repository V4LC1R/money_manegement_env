import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './objects/ParcelWhereUniqueInput.schema';
import { ParcelCreateInputObjectSchema } from './objects/ParcelCreateInput.schema';
import { ParcelUncheckedCreateInputObjectSchema } from './objects/ParcelUncheckedCreateInput.schema';
import { ParcelUpdateInputObjectSchema } from './objects/ParcelUpdateInput.schema';
import { ParcelUncheckedUpdateInputObjectSchema } from './objects/ParcelUncheckedUpdateInput.schema';

export const ParcelUpsertSchema = z.object({
  where: ParcelWhereUniqueInputObjectSchema,
  create: z.union([
    ParcelCreateInputObjectSchema,
    ParcelUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ParcelUpdateInputObjectSchema,
    ParcelUncheckedUpdateInputObjectSchema,
  ]),
});
