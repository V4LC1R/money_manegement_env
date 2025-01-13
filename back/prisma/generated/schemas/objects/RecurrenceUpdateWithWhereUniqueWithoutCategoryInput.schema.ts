import { z } from 'zod';
import { RecurrenceWhereUniqueInputObjectSchema } from './RecurrenceWhereUniqueInput.schema';
import { RecurrenceUpdateWithoutCategoryInputObjectSchema } from './RecurrenceUpdateWithoutCategoryInput.schema';
import { RecurrenceUncheckedUpdateWithoutCategoryInputObjectSchema } from './RecurrenceUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RecurrenceUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => RecurrenceUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const RecurrenceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
