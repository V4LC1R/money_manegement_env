import { z } from 'zod';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsCreateWithoutHolderInputObjectSchema } from './TransactionsFormsCreateWithoutHolderInput.schema';
import { TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutHolderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateOrConnectWithoutHolderInput> =
  z
    .object({
      where: z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TransactionsFormsCreateWithoutHolderInputObjectSchema),
        z.lazy(
          () => TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionsFormsCreateOrConnectWithoutHolderInputObjectSchema =
  Schema;
