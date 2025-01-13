import { z } from 'zod';
import { AccountPlanUpdateWithoutParcelsInputObjectSchema } from './AccountPlanUpdateWithoutParcelsInput.schema';
import { AccountPlanUncheckedUpdateWithoutParcelsInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutParcelsInput.schema';
import { AccountPlanCreateWithoutParcelsInputObjectSchema } from './AccountPlanCreateWithoutParcelsInput.schema';
import { AccountPlanUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpsertWithoutParcelsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountPlanUpdateWithoutParcelsInputObjectSchema),
      z.lazy(() => AccountPlanUncheckedUpdateWithoutParcelsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountPlanCreateWithoutParcelsInputObjectSchema),
      z.lazy(() => AccountPlanUncheckedCreateWithoutParcelsInputObjectSchema),
    ]),
  })
  .strict();

export const AccountPlanUpsertWithoutParcelsInputObjectSchema = Schema;
