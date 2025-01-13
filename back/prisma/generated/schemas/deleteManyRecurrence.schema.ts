import { z } from 'zod';
import { RecurrenceWhereInputObjectSchema } from './objects/RecurrenceWhereInput.schema';

export const RecurrenceDeleteManySchema = z.object({
  where: RecurrenceWhereInputObjectSchema.optional(),
});
