import { z } from 'zod';
import { RecurrenceWhereUniqueInputObjectSchema } from './RecurrenceWhereUniqueInput.schema';
import { RecurrenceCreateWithoutCategoryInputObjectSchema } from './RecurrenceCreateWithoutCategoryInput.schema';
import { RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema } from './RecurrenceUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RecurrenceCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const RecurrenceCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
