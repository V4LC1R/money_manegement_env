import { z } from 'zod';
import { AccountCreateWithoutParcelsInputObjectSchema } from './AccountCreateWithoutParcelsInput.schema';
import { AccountUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountUncheckedCreateWithoutParcelsInput.schema';
import { AccountCreateOrConnectWithoutParcelsInputObjectSchema } from './AccountCreateOrConnectWithoutParcelsInput.schema';
import { AccountUpsertWithoutParcelsInputObjectSchema } from './AccountUpsertWithoutParcelsInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutParcelsInputObjectSchema } from './AccountUpdateWithoutParcelsInput.schema';
import { AccountUncheckedUpdateWithoutParcelsInputObjectSchema } from './AccountUncheckedUpdateWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutParcelsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutParcelsInputObjectSchema),
          z.lazy(() => AccountUncheckedCreateWithoutParcelsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutParcelsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => AccountUpsertWithoutParcelsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithoutParcelsInputObjectSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutParcelsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateOneRequiredWithoutParcelsNestedInputObjectSchema =
  Schema;
