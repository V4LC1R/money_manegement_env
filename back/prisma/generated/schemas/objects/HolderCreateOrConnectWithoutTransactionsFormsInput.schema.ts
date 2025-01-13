import { z } from 'zod';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';
import { HolderCreateWithoutTransactionsFormsInputObjectSchema } from './HolderCreateWithoutTransactionsFormsInput.schema';
import { HolderUncheckedCreateWithoutTransactionsFormsInputObjectSchema } from './HolderUncheckedCreateWithoutTransactionsFormsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateOrConnectWithoutTransactionsFormsInput> =
  z
    .object({
      where: z.lazy(() => HolderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => HolderCreateWithoutTransactionsFormsInputObjectSchema),
        z.lazy(
          () => HolderUncheckedCreateWithoutTransactionsFormsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const HolderCreateOrConnectWithoutTransactionsFormsInputObjectSchema =
  Schema;
