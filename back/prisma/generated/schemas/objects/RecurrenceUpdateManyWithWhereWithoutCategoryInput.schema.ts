import { z } from 'zod';
import { RecurrenceScalarWhereInputObjectSchema } from './RecurrenceScalarWhereInput.schema';
import { RecurrenceUpdateManyMutationInputObjectSchema } from './RecurrenceUpdateManyMutationInput.schema';
import { RecurrenceUncheckedUpdateManyWithoutRecurrencesInputObjectSchema } from './RecurrenceUncheckedUpdateManyWithoutRecurrencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => RecurrenceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RecurrenceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RecurrenceUncheckedUpdateManyWithoutRecurrencesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RecurrenceUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
