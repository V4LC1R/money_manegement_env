import { z } from 'zod';
import { HolderUpdateInputObjectSchema } from './objects/HolderUpdateInput.schema';
import { HolderUncheckedUpdateInputObjectSchema } from './objects/HolderUncheckedUpdateInput.schema';
import { HolderWhereUniqueInputObjectSchema } from './objects/HolderWhereUniqueInput.schema';

export const HolderUpdateOneSchema = z.object({
  data: z.union([
    HolderUpdateInputObjectSchema,
    HolderUncheckedUpdateInputObjectSchema,
  ]),
  where: HolderWhereUniqueInputObjectSchema,
});
