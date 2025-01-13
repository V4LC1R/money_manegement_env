import { z } from 'zod';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsUpdateWithoutHolderInputObjectSchema } from './TransactionsFormsUpdateWithoutHolderInput.schema';
import { TransactionsFormsUncheckedUpdateWithoutHolderInputObjectSchema } from './TransactionsFormsUncheckedUpdateWithoutHolderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsUpdateWithWhereUniqueWithoutHolderInput> =
  z
    .object({
      where: z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionsFormsUpdateWithoutHolderInputObjectSchema),
        z.lazy(
          () => TransactionsFormsUncheckedUpdateWithoutHolderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionsFormsUpdateWithWhereUniqueWithoutHolderInputObjectSchema =
  Schema;
