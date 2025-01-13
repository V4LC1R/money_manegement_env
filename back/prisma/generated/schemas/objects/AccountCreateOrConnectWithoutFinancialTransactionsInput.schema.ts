import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountCreateWithoutFinancialTransactionsInput.schema';
import { AccountUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutFinancialTransactionsInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => AccountCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            AccountUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AccountCreateOrConnectWithoutFinancialTransactionsInputObjectSchema =
  Schema;
