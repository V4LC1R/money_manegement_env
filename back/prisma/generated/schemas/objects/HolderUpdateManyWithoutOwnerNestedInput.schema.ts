import { z } from 'zod';
import { HolderCreateWithoutOwnerInputObjectSchema } from './HolderCreateWithoutOwnerInput.schema';
import { HolderUncheckedCreateWithoutOwnerInputObjectSchema } from './HolderUncheckedCreateWithoutOwnerInput.schema';
import { HolderCreateOrConnectWithoutOwnerInputObjectSchema } from './HolderCreateOrConnectWithoutOwnerInput.schema';
import { HolderUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './HolderUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { HolderCreateManyOwnerInputEnvelopeObjectSchema } from './HolderCreateManyOwnerInputEnvelope.schema';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';
import { HolderUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './HolderUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { HolderUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './HolderUpdateManyWithWhereWithoutOwnerInput.schema';
import { HolderScalarWhereInputObjectSchema } from './HolderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUpdateManyWithoutOwnerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => HolderCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => HolderCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => HolderUncheckedCreateWithoutOwnerInputObjectSchema),
        z
          .lazy(() => HolderUncheckedCreateWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => HolderCreateOrConnectWithoutOwnerInputObjectSchema),
        z
          .lazy(() => HolderCreateOrConnectWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => HolderUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => HolderUpsertWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => HolderCreateManyOwnerInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => HolderWhereUniqueInputObjectSchema),
        z.lazy(() => HolderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => HolderWhereUniqueInputObjectSchema),
        z.lazy(() => HolderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => HolderWhereUniqueInputObjectSchema),
        z.lazy(() => HolderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => HolderWhereUniqueInputObjectSchema),
        z.lazy(() => HolderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => HolderUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => HolderUpdateWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => HolderUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        z
          .lazy(() => HolderUpdateManyWithWhereWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => HolderScalarWhereInputObjectSchema),
        z.lazy(() => HolderScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const HolderUpdateManyWithoutOwnerNestedInputObjectSchema = Schema;
