import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutUserInputObjectSchema } from './FinancialTransactionUpdateWithoutUserInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutUserInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutUserInput.schema';
import { FinancialTransactionCreateWithoutUserInputObjectSchema } from './FinancialTransactionCreateWithoutUserInput.schema';
import { FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FinancialTransactionUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => FinancialTransactionUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => FinancialTransactionCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
