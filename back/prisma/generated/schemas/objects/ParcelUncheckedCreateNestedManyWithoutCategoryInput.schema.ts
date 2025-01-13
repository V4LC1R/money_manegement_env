import { z } from 'zod';
import { ParcelCreateWithoutCategoryInputObjectSchema } from './ParcelCreateWithoutCategoryInput.schema';
import { ParcelUncheckedCreateWithoutCategoryInputObjectSchema } from './ParcelUncheckedCreateWithoutCategoryInput.schema';
import { ParcelCreateOrConnectWithoutCategoryInputObjectSchema } from './ParcelCreateOrConnectWithoutCategoryInput.schema';
import { ParcelCreateManyCategoryInputEnvelopeObjectSchema } from './ParcelCreateManyCategoryInputEnvelope.schema';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUncheckedCreateNestedManyWithoutCategoryInput> =
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
      createMany: z
        .lazy(() => ParcelCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParcelWhereUniqueInputObjectSchema),
          z.lazy(() => ParcelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ParcelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
