import { z } from 'zod';
import { HolderCreateWithoutTransactionsFormsInputObjectSchema } from './HolderCreateWithoutTransactionsFormsInput.schema';
import { HolderUncheckedCreateWithoutTransactionsFormsInputObjectSchema } from './HolderUncheckedCreateWithoutTransactionsFormsInput.schema';
import { HolderCreateOrConnectWithoutTransactionsFormsInputObjectSchema } from './HolderCreateOrConnectWithoutTransactionsFormsInput.schema';
import { HolderUpsertWithoutTransactionsFormsInputObjectSchema } from './HolderUpsertWithoutTransactionsFormsInput.schema';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';
import { HolderUpdateWithoutTransactionsFormsInputObjectSchema } from './HolderUpdateWithoutTransactionsFormsInput.schema';
import { HolderUncheckedUpdateWithoutTransactionsFormsInputObjectSchema } from './HolderUncheckedUpdateWithoutTransactionsFormsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUpdateOneRequiredWithoutTransactionsFormsNestedInput> =
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
      upsert: z
        .lazy(() => HolderUpsertWithoutTransactionsFormsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => HolderWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => HolderUpdateWithoutTransactionsFormsInputObjectSchema),
          z.lazy(
            () =>
              HolderUncheckedUpdateWithoutTransactionsFormsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const HolderUpdateOneRequiredWithoutTransactionsFormsNestedInputObjectSchema =
  Schema;
