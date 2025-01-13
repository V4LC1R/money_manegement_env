import { z } from 'zod';
import { AccountPlanUpdateWithoutAccountsInputObjectSchema } from './AccountPlanUpdateWithoutAccountsInput.schema';
import { AccountPlanUncheckedUpdateWithoutAccountsInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutAccountsInput.schema';
import { AccountPlanCreateWithoutAccountsInputObjectSchema } from './AccountPlanCreateWithoutAccountsInput.schema';
import { AccountPlanUncheckedCreateWithoutAccountsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpsertWithoutAccountsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountPlanUpdateWithoutAccountsInputObjectSchema),
      z.lazy(() => AccountPlanUncheckedUpdateWithoutAccountsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountPlanCreateWithoutAccountsInputObjectSchema),
      z.lazy(() => AccountPlanUncheckedCreateWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict();

export const AccountPlanUpsertWithoutAccountsInputObjectSchema = Schema;
