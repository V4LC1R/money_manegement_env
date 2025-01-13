import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutParcelInputObjectSchema } from './FinancialTransactionUpdateWithoutParcelInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutParcelInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutParcelInput.schema';
import { FinancialTransactionCreateWithoutParcelInputObjectSchema } from './FinancialTransactionCreateWithoutParcelInput.schema';
import { FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutParcelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutParcelInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FinancialTransactionUpdateWithoutParcelInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutParcelInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => FinancialTransactionCreateWithoutParcelInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpsertWithWhereUniqueWithoutParcelInputObjectSchema =
  Schema;
