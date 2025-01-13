import { z } from 'zod';
import { HolderCreateWithoutTransactionsFormsInputObjectSchema } from './HolderCreateWithoutTransactionsFormsInput.schema';
import { HolderUncheckedCreateWithoutTransactionsFormsInputObjectSchema } from './HolderUncheckedCreateWithoutTransactionsFormsInput.schema';
import { HolderCreateOrConnectWithoutTransactionsFormsInputObjectSchema } from './HolderCreateOrConnectWithoutTransactionsFormsInput.schema';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateNestedOneWithoutTransactionsFormsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HolderCreateWithoutTransactionsFormsInputObjectSchema),
          z.lazy(
            () =>
              HolderUncheckedCreateWithoutTransactionsFormsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => HolderCreateOrConnectWithoutTransactionsFormsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => HolderWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const HolderCreateNestedOneWithoutTransactionsFormsInputObjectSchema =
  Schema;
