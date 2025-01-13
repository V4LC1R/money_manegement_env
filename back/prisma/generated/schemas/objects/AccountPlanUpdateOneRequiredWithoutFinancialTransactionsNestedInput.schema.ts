import { z } from 'zod';
import { AccountPlanCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanCreateWithoutFinancialTransactionsInput.schema';
import { AccountPlanUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { AccountPlanCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { AccountPlanUpsertWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUpsertWithoutFinancialTransactionsInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUpdateWithoutFinancialTransactionsInput.schema';
import { AccountPlanUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpdateOneRequiredWithoutFinancialTransactionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              AccountPlanCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              AccountPlanUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            AccountPlanCreateOrConnectWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => AccountPlanUpsertWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              AccountPlanUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              AccountPlanUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const AccountPlanUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema =
  Schema;
