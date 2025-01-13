import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutAccountInputObjectSchema } from './FinancialTransactionUpdateWithoutAccountInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutAccountInput.schema';
import { FinancialTransactionCreateWithoutAccountInputObjectSchema } from './FinancialTransactionCreateWithoutAccountInput.schema';
import { FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FinancialTransactionUpdateWithoutAccountInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutAccountInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => FinancialTransactionCreateWithoutAccountInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpsertWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
