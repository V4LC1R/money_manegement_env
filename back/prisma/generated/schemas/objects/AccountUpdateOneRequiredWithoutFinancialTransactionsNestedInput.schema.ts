import { z } from 'zod';
import { AccountCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountCreateWithoutFinancialTransactionsInput.schema';
import { AccountUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { AccountCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './AccountCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { AccountUpsertWithoutFinancialTransactionsInputObjectSchema } from './AccountUpsertWithoutFinancialTransactionsInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountUpdateWithoutFinancialTransactionsInput.schema';
import { AccountUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountUncheckedUpdateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutFinancialTransactionsNestedInput> =
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
      upsert: z
        .lazy(() => AccountUpsertWithoutFinancialTransactionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => AccountUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              AccountUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema =
  Schema;
