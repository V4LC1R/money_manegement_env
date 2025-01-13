import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateWithoutAccountInputObjectSchema } from './FinancialTransactionCreateWithoutAccountInput.schema';
import { FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FinancialTransactionCreateWithoutAccountInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionCreateOrConnectWithoutAccountInputObjectSchema =
  Schema;
