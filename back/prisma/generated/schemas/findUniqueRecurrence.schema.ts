import { z } from 'zod';
import { RecurrenceWhereUniqueInputObjectSchema } from './objects/RecurrenceWhereUniqueInput.schema';

export const RecurrenceFindUniqueSchema = z.object({
  where: RecurrenceWhereUniqueInputObjectSchema,
});
