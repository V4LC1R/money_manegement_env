import { z } from 'zod';
import { AccountPlanCreateWithoutParcelsInputObjectSchema } from './AccountPlanCreateWithoutParcelsInput.schema';
import { AccountPlanUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutParcelsInput.schema';
import { AccountPlanCreateOrConnectWithoutParcelsInputObjectSchema } from './AccountPlanCreateOrConnectWithoutParcelsInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateNestedOneWithoutParcelsInput> =
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
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const AccountPlanCreateNestedOneWithoutParcelsInputObjectSchema = Schema;
