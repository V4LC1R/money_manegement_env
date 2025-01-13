import { z } from 'zod';
import { RecurrenceUpdateManyMutationInputObjectSchema } from './objects/RecurrenceUpdateManyMutationInput.schema';
import { RecurrenceWhereInputObjectSchema } from './objects/RecurrenceWhereInput.schema';

export const RecurrenceUpdateManySchema = z.object({
  data: RecurrenceUpdateManyMutationInputObjectSchema,
  where: RecurrenceWhereInputObjectSchema.optional(),
});
