import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateWithoutParcelInputObjectSchema } from './FinancialTransactionCreateWithoutParcelInput.schema';
import { FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutParcelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutParcelInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FinancialTransactionCreateWithoutParcelInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionCreateOrConnectWithoutParcelInputObjectSchema =
  Schema;
