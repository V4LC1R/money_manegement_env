import { z } from 'zod';
import { HolderCreateManyInputObjectSchema } from './objects/HolderCreateManyInput.schema';

export const HolderCreateManySchema = z.object({
  data: z.union([
    HolderCreateManyInputObjectSchema,
    z.array(HolderCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
