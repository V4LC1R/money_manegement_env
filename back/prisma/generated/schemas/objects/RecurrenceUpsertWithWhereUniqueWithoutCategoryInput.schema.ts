import { z } from 'zod';
import { RecurrenceWhereUniqueInputObjectSchema } from './RecurrenceWhereUniqueInput.schema';
import { RecurrenceUpdateWithoutCategoryInputObjectSchema } from './RecurrenceUpdateWithoutCategoryInput.schema';
import { RecurrenceUncheckedUpdateWithoutCategoryInputObjectSchema } from './RecurrenceUncheckedUpdateWithoutCategoryInput.schema';
import { RecurrenceCreateWithoutCategoryInputObjectSchema } from './RecurrenceCreateWithoutCategoryInput.schema';
import { RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema } from './RecurrenceUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RecurrenceUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => RecurrenceUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RecurrenceCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const RecurrenceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
