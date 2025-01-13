import { z } from 'zod';
import { RecurrenceUpdateInputObjectSchema } from './objects/RecurrenceUpdateInput.schema';
import { RecurrenceUncheckedUpdateInputObjectSchema } from './objects/RecurrenceUncheckedUpdateInput.schema';
import { RecurrenceWhereUniqueInputObjectSchema } from './objects/RecurrenceWhereUniqueInput.schema';

export const RecurrenceUpdateOneSchema = z.object({
  data: z.union([
    RecurrenceUpdateInputObjectSchema,
    RecurrenceUncheckedUpdateInputObjectSchema,
  ]),
  where: RecurrenceWhereUniqueInputObjectSchema,
});
