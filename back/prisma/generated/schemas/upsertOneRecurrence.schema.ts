import { z } from 'zod';
import { RecurrenceWhereUniqueInputObjectSchema } from './objects/RecurrenceWhereUniqueInput.schema';
import { RecurrenceCreateInputObjectSchema } from './objects/RecurrenceCreateInput.schema';
import { RecurrenceUncheckedCreateInputObjectSchema } from './objects/RecurrenceUncheckedCreateInput.schema';
import { RecurrenceUpdateInputObjectSchema } from './objects/RecurrenceUpdateInput.schema';
import { RecurrenceUncheckedUpdateInputObjectSchema } from './objects/RecurrenceUncheckedUpdateInput.schema';

export const RecurrenceUpsertSchema = z.object({
  where: RecurrenceWhereUniqueInputObjectSchema,
  create: z.union([
    RecurrenceCreateInputObjectSchema,
    RecurrenceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RecurrenceUpdateInputObjectSchema,
    RecurrenceUncheckedUpdateInputObjectSchema,
  ]),
});
