import { z } from 'zod';
import { HolderWhereUniqueInputObjectSchema } from './objects/HolderWhereUniqueInput.schema';

export const HolderFindUniqueSchema = z.object({
  where: HolderWhereUniqueInputObjectSchema,
});
