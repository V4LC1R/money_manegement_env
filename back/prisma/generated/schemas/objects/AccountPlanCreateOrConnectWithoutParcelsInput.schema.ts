import { z } from 'zod';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanCreateWithoutParcelsInputObjectSchema } from './AccountPlanCreateWithoutParcelsInput.schema';
import { AccountPlanUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateOrConnectWithoutParcelsInput> =
  z
    .object({
      where: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccountPlanCreateWithoutParcelsInputObjectSchema),
        z.lazy(() => AccountPlanUncheckedCreateWithoutParcelsInputObjectSchema),
      ]),
    })
    .strict();

export const AccountPlanCreateOrConnectWithoutParcelsInputObjectSchema = Schema;
