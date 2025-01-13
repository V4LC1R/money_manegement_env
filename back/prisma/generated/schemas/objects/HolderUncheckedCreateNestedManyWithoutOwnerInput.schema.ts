import { z } from 'zod';
import { HolderCreateWithoutOwnerInputObjectSchema } from './HolderCreateWithoutOwnerInput.schema';
import { HolderUncheckedCreateWithoutOwnerInputObjectSchema } from './HolderUncheckedCreateWithoutOwnerInput.schema';
import { HolderCreateOrConnectWithoutOwnerInputObjectSchema } from './HolderCreateOrConnectWithoutOwnerInput.schema';
import { HolderCreateManyOwnerInputEnvelopeObjectSchema } from './HolderCreateManyOwnerInputEnvelope.schema';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUncheckedCreateNestedManyWithoutOwnerInput> =
  z
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
      createMany: z
        .lazy(() => HolderCreateManyOwnerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => HolderWhereUniqueInputObjectSchema),
          z.lazy(() => HolderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const HolderUncheckedCreateNestedManyWithoutOwnerInputObjectSchema =
  Schema;
