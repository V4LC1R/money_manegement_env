import { z } from 'zod';
import { HolderWhereUniqueInputObjectSchema } from './objects/HolderWhereUniqueInput.schema';
import { HolderCreateInputObjectSchema } from './objects/HolderCreateInput.schema';
import { HolderUncheckedCreateInputObjectSchema } from './objects/HolderUncheckedCreateInput.schema';
import { HolderUpdateInputObjectSchema } from './objects/HolderUpdateInput.schema';
import { HolderUncheckedUpdateInputObjectSchema } from './objects/HolderUncheckedUpdateInput.schema';

export const HolderUpsertSchema = z.object({
  where: HolderWhereUniqueInputObjectSchema,
  create: z.union([
    HolderCreateInputObjectSchema,
    HolderUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    HolderUpdateInputObjectSchema,
    HolderUncheckedUpdateInputObjectSchema,
  ]),
});
