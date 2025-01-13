import { z } from 'zod';
import { ParcelCreateWithoutAccountInputObjectSchema } from './ParcelCreateWithoutAccountInput.schema';
import { ParcelUncheckedCreateWithoutAccountInputObjectSchema } from './ParcelUncheckedCreateWithoutAccountInput.schema';
import { ParcelCreateOrConnectWithoutAccountInputObjectSchema } from './ParcelCreateOrConnectWithoutAccountInput.schema';
import { ParcelUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from './ParcelUpsertWithWhereUniqueWithoutAccountInput.schema';
import { ParcelCreateManyAccountInputEnvelopeObjectSchema } from './ParcelCreateManyAccountInputEnvelope.schema';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from './ParcelUpdateWithWhereUniqueWithoutAccountInput.schema';
import { ParcelUpdateManyWithWhereWithoutAccountInputObjectSchema } from './ParcelUpdateManyWithWhereWithoutAccountInput.schema';
import { ParcelScalarWhereInputObjectSchema } from './ParcelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpdateManyWithoutAccountNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ParcelCreateWithoutAccountInputObjectSchema),
        z.lazy(() => ParcelCreateWithoutAccountInputObjectSchema).array(),
        z.lazy(() => ParcelUncheckedCreateWithoutAccountInputObjectSchema),
        z
          .lazy(() => ParcelUncheckedCreateWithoutAccountInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ParcelCreateOrConnectWithoutAccountInputObjectSchema),
        z
          .lazy(() => ParcelCreateOrConnectWithoutAccountInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ParcelUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
        ),
        z
          .lazy(
            () => ParcelUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ParcelCreateManyAccountInputEnvelopeObjectSchema)
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
          () => ParcelUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
        ),
        z
          .lazy(
            () => ParcelUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ParcelUpdateManyWithWhereWithoutAccountInputObjectSchema),
        z
          .lazy(() => ParcelUpdateManyWithWhereWithoutAccountInputObjectSchema)
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

export const ParcelUpdateManyWithoutAccountNestedInputObjectSchema = Schema;
