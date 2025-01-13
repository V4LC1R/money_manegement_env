import { z } from 'zod';
import { TransactionsFormsCreateWithoutHolderInputObjectSchema } from './TransactionsFormsCreateWithoutHolderInput.schema';
import { TransactionsFormsUncheckedCreateWithoutHolderInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutHolderInput.schema';
import { TransactionsFormsCreateOrConnectWithoutHolderInputObjectSchema } from './TransactionsFormsCreateOrConnectWithoutHolderInput.schema';
import { TransactionsFormsUpsertWithWhereUniqueWithoutHolderInputObjectSchema } from './TransactionsFormsUpsertWithWhereUniqueWithoutHolderInput.schema';
import { TransactionsFormsCreateManyHolderInputEnvelopeObjectSchema } from './TransactionsFormsCreateManyHolderInputEnvelope.schema';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsUpdateWithWhereUniqueWithoutHolderInputObjectSchema } from './TransactionsFormsUpdateWithWhereUniqueWithoutHolderInput.schema';
import { TransactionsFormsUpdateManyWithWhereWithoutHolderInputObjectSchema } from './TransactionsFormsUpdateManyWithWhereWithoutHolderInput.schema';
import { TransactionsFormsScalarWhereInputObjectSchema } from './TransactionsFormsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsUncheckedUpdateManyWithoutHolderNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              TransactionsFormsUpsertWithWhereUniqueWithoutHolderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionsFormsUpsertWithWhereUniqueWithoutHolderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TransactionsFormsCreateManyHolderInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TransactionsFormsUpdateWithWhereUniqueWithoutHolderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionsFormsUpdateWithWhereUniqueWithoutHolderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TransactionsFormsUpdateManyWithWhereWithoutHolderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionsFormsUpdateManyWithWhereWithoutHolderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TransactionsFormsScalarWhereInputObjectSchema),
          z.lazy(() => TransactionsFormsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TransactionsFormsUncheckedUpdateManyWithoutHolderNestedInputObjectSchema =
  Schema;
