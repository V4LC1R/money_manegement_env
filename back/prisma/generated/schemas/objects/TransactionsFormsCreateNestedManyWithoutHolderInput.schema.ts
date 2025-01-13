import { z } from 'zod';
import { TransactionsFormsCreateWithoutHolderInputObjectSchema } from './TransactionsFormsCreateWithoutHolderInput.schema';
import { TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutHolderInput.schema';
import { TransactionsFormsCreateOrConnectWithoutHolderInputObjectSchema } from './TransactionsFormsCreateOrConnectWithoutHolderInput.schema';
import { TransactionsFormsCreateManyHolderInputEnvelopeObjectSchema } from './TransactionsFormsCreateManyHolderInputEnvelope.schema';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateNestedManyWithoutHolderInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TransactionsFormsCreateWithoutHolderInputObjectSchema),
          z
            .lazy(() => TransactionsFormsCreateWithoutHolderInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TransactionsFormsCreateOrConnectWithoutHolderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionsFormsCreateOrConnectWithoutHolderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TransactionsFormsCreateManyHolderInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TransactionsFormsCreateNestedManyWithoutHolderInputObjectSchema =
  Schema;
