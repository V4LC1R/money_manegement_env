import { z } from 'zod';
import { RecurrenceCreateManyInputObjectSchema } from './objects/RecurrenceCreateManyInput.schema';

export const RecurrenceCreateManySchema = z.object({
  data: z.union([
    RecurrenceCreateManyInputObjectSchema,
    z.array(RecurrenceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
