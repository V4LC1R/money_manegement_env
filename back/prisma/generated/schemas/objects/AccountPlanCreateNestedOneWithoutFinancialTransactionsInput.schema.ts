import { z } from 'zod';
import { AccountPlanCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanCreateWithoutFinancialTransactionsInput.schema';
import { AccountPlanUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { AccountPlanCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateNestedOneWithoutFinancialTransactionsInput> =
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
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const AccountPlanCreateNestedOneWithoutFinancialTransactionsInputObjectSchema =
  Schema;
