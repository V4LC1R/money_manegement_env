import { z } from 'zod';
import { AccountPlanCreateWithoutParcelsInputObjectSchema } from './AccountPlanCreateWithoutParcelsInput.schema';
import { AccountPlanUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutParcelsInput.schema';
import { AccountPlanCreateOrConnectWithoutParcelsInputObjectSchema } from './AccountPlanCreateOrConnectWithoutParcelsInput.schema';
import { AccountPlanUpsertWithoutParcelsInputObjectSchema } from './AccountPlanUpsertWithoutParcelsInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanUpdateWithoutParcelsInputObjectSchema } from './AccountPlanUpdateWithoutParcelsInput.schema';
import { AccountPlanUncheckedUpdateWithoutParcelsInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpdateOneRequiredWithoutParcelsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountPlanCreateWithoutParcelsInputObjectSchema),
          z.lazy(
            () => AccountPlanUncheckedCreateWithoutParcelsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountPlanCreateOrConnectWithoutParcelsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => AccountPlanUpsertWithoutParcelsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccountPlanUpdateWithoutParcelsInputObjectSchema),
          z.lazy(
            () => AccountPlanUncheckedUpdateWithoutParcelsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const AccountPlanUpdateOneRequiredWithoutParcelsNestedInputObjectSchema =
  Schema;
