import { z } from 'zod';
import { HolderCreateInputObjectSchema } from './objects/HolderCreateInput.schema';
import { HolderUncheckedCreateInputObjectSchema } from './objects/HolderUncheckedCreateInput.schema';

export const HolderCreateOneSchema = z.object({
  data: z.union([
    HolderCreateInputObjectSchema,
    HolderUncheckedCreateInputObjectSchema,
  ]),
});
