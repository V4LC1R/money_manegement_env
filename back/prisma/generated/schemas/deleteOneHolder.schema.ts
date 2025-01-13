import { z } from 'zod';
import { HolderWhereUniqueInputObjectSchema } from './objects/HolderWhereUniqueInput.schema';

export const HolderDeleteOneSchema = z.object({
  where: HolderWhereUniqueInputObjectSchema,
});
