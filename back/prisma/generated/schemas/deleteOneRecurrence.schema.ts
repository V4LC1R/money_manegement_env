import { z } from 'zod';
import { RecurrenceWhereUniqueInputObjectSchema } from './objects/RecurrenceWhereUniqueInput.schema';

export const RecurrenceDeleteOneSchema = z.object({
  where: RecurrenceWhereUniqueInputObjectSchema,
});
