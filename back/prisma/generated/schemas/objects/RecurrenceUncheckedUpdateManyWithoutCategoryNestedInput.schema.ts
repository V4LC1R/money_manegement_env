import { z } from 'zod';
import { RecurrenceCreateWithoutCategoryInputObjectSchema } from './RecurrenceCreateWithoutCategoryInput.schema';
import { RecurrenceUncheckedCreateWithoutCategoryInputObjectSchema } from './RecurrenceUncheckedCreateWithoutCategoryInput.schema';
import { RecurrenceCreateOrConnectWithoutCategoryInputObjectSchema } from './RecurrenceCreateOrConnectWithoutCategoryInput.schema';
import { RecurrenceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './RecurrenceUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { RecurrenceCreateManyCategoryInputEnvelopeObjectSchema } from './RecurrenceCreateManyCategoryInputEnvelope.schema';
import { RecurrenceWhereUniqueInputObjectSchema } from './RecurrenceWhereUniqueInput.schema';
import { RecurrenceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './RecurrenceUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { RecurrenceUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './RecurrenceUpdateManyWithWhereWithoutCategoryInput.schema';
import { RecurrenceScalarWhereInputObjectSchema } from './RecurrenceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceUncheckedUpdateManyWithoutCategoryNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              RecurrenceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RecurrenceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RecurrenceCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema),
          z.lazy(() => RecurrenceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RecurrenceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RecurrenceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RecurrenceUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RecurrenceUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RecurrenceScalarWhereInputObjectSchema),
          z.lazy(() => RecurrenceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RecurrenceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
