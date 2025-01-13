import { z } from 'zod';
import { AccountUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountUpdateWithoutFinancialTransactionsInput.schema';
import { AccountUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountUncheckedUpdateWithoutFinancialTransactionsInput.schema';
import { AccountCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountCreateWithoutFinancialTransactionsInput.schema';
import { AccountUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpsertWithoutFinancialTransactionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => AccountUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            AccountUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
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

export const AccountUpsertWithoutFinancialTransactionsInputObjectSchema =
  Schema;
