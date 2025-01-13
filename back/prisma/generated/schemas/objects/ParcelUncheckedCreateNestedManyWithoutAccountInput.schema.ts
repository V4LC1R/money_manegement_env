import { z } from 'zod';
import { ParcelCreateWithoutAccountInputObjectSchema } from './ParcelCreateWithoutAccountInput.schema';
import { ParcelUncheckedCreateWithoutAccountInputObjectSchema } from './ParcelUncheckedCreateWithoutAccountInput.schema';
import { ParcelCreateOrConnectWithoutAccountInputObjectSchema } from './ParcelCreateOrConnectWithoutAccountInput.schema';
import { ParcelCreateManyAccountInputEnvelopeObjectSchema } from './ParcelCreateManyAccountInputEnvelope.schema';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUncheckedCreateNestedManyWithoutAccountInput> =
  z
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
      createMany: z
        .lazy(() => ParcelCreateManyAccountInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParcelWhereUniqueInputObjectSchema),
          z.lazy(() => ParcelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ParcelUncheckedCreateNestedManyWithoutAccountInputObjectSchema =
  Schema;
