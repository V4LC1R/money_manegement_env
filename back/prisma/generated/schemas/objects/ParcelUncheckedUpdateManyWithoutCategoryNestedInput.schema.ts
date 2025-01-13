import { z } from 'zod';
import { ParcelCreateWithoutCategoryInputObjectSchema } from './ParcelCreateWithoutCategoryInput.schema';
import { ParcelUncheckedCreateWithoutCategoryInputObjectSchema } from './ParcelUncheckedCreateWithoutCategoryInput.schema';
import { ParcelCreateOrConnectWithoutCategoryInputObjectSchema } from './ParcelCreateOrConnectWithoutCategoryInput.schema';
import { ParcelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ParcelUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ParcelCreateManyCategoryInputEnvelopeObjectSchema } from './ParcelCreateManyCategoryInputEnvelope.schema';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ParcelUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ParcelUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ParcelUpdateManyWithWhereWithoutCategoryInput.schema';
import { ParcelScalarWhereInputObjectSchema } from './ParcelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUncheckedUpdateManyWithoutCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParcelCreateWithoutCategoryInputObjectSchema),
          z.lazy(() => ParcelCreateWithoutCategoryInputObjectSchema).array(),
          z.lazy(() => ParcelUncheckedCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => ParcelUncheckedCreateWithoutCategoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ParcelCreateOrConnectWithoutCategoryInputObjectSchema),
          z
            .lazy(() => ParcelCreateOrConnectWithoutCategoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ParcelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => ParcelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ParcelCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ParcelWhereUniqueInputObjectSchema),
          z.lazy(() => ParcelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ParcelWhereUniqueInputObjectSchema),
          z.lazy(() => ParcelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ParcelWhereUniqueInputObjectSchema),
          z.lazy(() => ParcelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParcelWhereUniqueInputObjectSchema),
          z.lazy(() => ParcelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ParcelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => ParcelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ParcelUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => ParcelUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ParcelScalarWhereInputObjectSchema),
          z.lazy(() => ParcelScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ParcelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
