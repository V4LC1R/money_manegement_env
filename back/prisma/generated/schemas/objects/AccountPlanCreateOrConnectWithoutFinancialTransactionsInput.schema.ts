import { z } from 'zod';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanCreateWithoutFinancialTransactionsInput.schema';
import { AccountPlanUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateOrConnectWithoutFinancialTransactionsInput> =
  z
    .object({
      where: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema),
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

export const AccountPlanCreateOrConnectWithoutFinancialTransactionsInputObjectSchema =
  Schema;
