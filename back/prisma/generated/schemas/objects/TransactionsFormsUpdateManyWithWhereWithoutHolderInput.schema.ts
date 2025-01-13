import { z } from 'zod';
import { TransactionsFormsScalarWhereInputObjectSchema } from './TransactionsFormsScalarWhereInput.schema';
import { TransactionsFormsUpdateManyMutationInputObjectSchema } from './TransactionsFormsUpdateManyMutationInput.schema';
import { TransactionsFormsUncheckedUpdateManyWithoutTransactionsFormsInputObjectSchema } from './TransactionsFormsUncheckedUpdateManyWithoutTransactionsFormsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsUpdateManyWithWhereWithoutHolderInput> =
  z
    .object({
      where: z.lazy(() => TransactionsFormsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionsFormsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TransactionsFormsUncheckedUpdateManyWithoutTransactionsFormsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionsFormsUpdateManyWithWhereWithoutHolderInputObjectSchema =
  Schema;
