import { z } from 'zod';
import { RecurrenceCreateInputObjectSchema } from './objects/RecurrenceCreateInput.schema';
import { RecurrenceUncheckedCreateInputObjectSchema } from './objects/RecurrenceUncheckedCreateInput.schema';

export const RecurrenceCreateOneSchema = z.object({
  data: z.union([
    RecurrenceCreateInputObjectSchema,
    RecurrenceUncheckedCreateInputObjectSchema,
  ]),
});
