import { z } from 'zod';
import { AccountPlanUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUpdateWithoutFinancialTransactionsInput.schema';
import { AccountPlanUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutFinancialTransactionsInput.schema';
import { AccountPlanCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanCreateWithoutFinancialTransactionsInput.schema';
import { AccountPlanUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpsertWithoutFinancialTransactionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => AccountPlanUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            AccountPlanUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => AccountPlanCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            AccountPlanUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AccountPlanUpsertWithoutFinancialTransactionsInputObjectSchema =
  Schema;
