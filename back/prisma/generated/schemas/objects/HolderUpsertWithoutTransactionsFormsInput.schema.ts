import { z } from 'zod';
import { HolderUpdateWithoutTransactionsFormsInputObjectSchema } from './HolderUpdateWithoutTransactionsFormsInput.schema';
import { HolderUncheckedUpdateWithoutTransactionsFormsInputObjectSchema } from './HolderUncheckedUpdateWithoutTransactionsFormsInput.schema';
import { HolderCreateWithoutTransactionsFormsInputObjectSchema } from './HolderCreateWithoutTransactionsFormsInput.schema';
import { HolderUncheckedCreateWithoutTransactionsFormsInputObjectSchema } from './HolderUncheckedCreateWithoutTransactionsFormsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUpsertWithoutTransactionsFormsInput> = z
  .object({
    update: z.union([
      z.lazy(() => HolderUpdateWithoutTransactionsFormsInputObjectSchema),
      z.lazy(
        () => HolderUncheckedUpdateWithoutTransactionsFormsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => HolderCreateWithoutTransactionsFormsInputObjectSchema),
      z.lazy(
        () => HolderUncheckedCreateWithoutTransactionsFormsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const HolderUpsertWithoutTransactionsFormsInputObjectSchema = Schema;
