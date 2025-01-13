import { z } from 'zod';
import { AccountCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountCreateWithoutFinancialTransactionsInput.schema';
import { AccountUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { AccountCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './AccountCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateNestedOneWithoutFinancialTransactionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => AccountCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              AccountUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            AccountCreateOrConnectWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const AccountCreateNestedOneWithoutFinancialTransactionsInputObjectSchema =
  Schema;
