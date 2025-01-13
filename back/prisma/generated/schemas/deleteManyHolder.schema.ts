import { z } from 'zod';
import { HolderWhereInputObjectSchema } from './objects/HolderWhereInput.schema';

export const HolderDeleteManySchema = z.object({
  where: HolderWhereInputObjectSchema.optional(),
});
