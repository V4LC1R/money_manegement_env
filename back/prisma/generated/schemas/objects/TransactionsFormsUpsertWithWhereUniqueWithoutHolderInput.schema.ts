import { z } from 'zod';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsUpdateWithoutHolderInputObjectSchema } from './TransactionsFormsUpdateWithoutHolderInput.schema';
import { TransactionsFormsUncheckedUpdateWithoutHolderInputObjectSchema } from './TransactionsFormsUncheckedUpdateWithoutHolderInput.schema';
import { TransactionsFormsCreateWithoutHolderInputObjectSchema } from './TransactionsFormsCreateWithoutHolderInput.schema';
import { TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutHolderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsUpsertWithWhereUniqueWithoutHolderInput> =
  z
    .object({
      where: z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TransactionsFormsUpdateWithoutHolderInputObjectSchema),
        z.lazy(
          () => TransactionsFormsUncheckedUpdateWithoutHolderInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TransactionsFormsCreateWithoutHolderInputObjectSchema),
        z.lazy(
          () => TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionsFormsUpsertWithWhereUniqueWithoutHolderInputObjectSchema =
  Schema;
