import { z } from 'zod';
import { RecurrenceCreateWithoutCategoryInputObjectSchema } from './RecurrenceCreateWithoutCategoryInput.schema';
import { RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema } from './RecurrenceUncheckedCreateWithoutCategoryInput.schema';
import { RecurrenceCreateOrConnectWithoutCategoryInputObjectSchema } from './RecurrenceCreateOrConnectWithoutCategoryInput.schema';
import { RecurrenceCreateManyCategoryInputEnvelopeObjectSchema } from './RecurrenceCreateManyCategoryInputEnvelope.schema';
import { RecurrenceWhereUniqueInputObjectSchema } from './RecurrenceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceCreateNestedManyWithoutCategoryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RecurrenceCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => RecurrenceCreateWithoutCategoryInputObjectSchema)
            .array(),
          z.lazy(
            () => RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RecurrenceCreateOrConnectWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => RecurrenceCreateOrConnectWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RecurrenceCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RecurrenceCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
