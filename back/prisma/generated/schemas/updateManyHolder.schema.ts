import { z } from 'zod';
import { HolderUpdateManyMutationInputObjectSchema } from './objects/HolderUpdateManyMutationInput.schema';
import { HolderWhereInputObjectSchema } from './objects/HolderWhereInput.schema';

export const HolderUpdateManySchema = z.object({
  data: HolderUpdateManyMutationInputObjectSchema,
  where: HolderWhereInputObjectSchema.optional(),
});
