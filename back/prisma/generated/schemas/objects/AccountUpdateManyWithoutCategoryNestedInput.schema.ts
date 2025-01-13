import { z } from 'zod';
import { AccountCreateWithoutCategoryInputObjectSchema } from './AccountCreateWithoutCategoryInput.schema';
import { AccountUncheckedCreateWithoutCategoryInputObjectSchema } from './AccountUncheckedCreateWithoutCategoryInput.schema';
import { AccountCreateOrConnectWithoutCategoryInputObjectSchema } from './AccountCreateOrConnectWithoutCategoryInput.schema';
import { AccountUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './AccountUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { AccountCreateManyCategoryInputEnvelopeObjectSchema } from './AccountCreateManyCategoryInputEnvelope.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './AccountUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { AccountUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './AccountUpdateManyWithWhereWithoutCategoryInput.schema';
import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateManyWithoutCategoryNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => AccountCreateWithoutCategoryInputObjectSchema).array(),
        z.lazy(() => AccountUncheckedCreateWithoutCategoryInputObjectSchema),
        z
          .lazy(() => AccountUncheckedCreateWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AccountCreateOrConnectWithoutCategoryInputObjectSchema),
        z
          .lazy(() => AccountCreateOrConnectWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => AccountUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
        ),
        z
          .lazy(
            () => AccountUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AccountCreateManyCategoryInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => AccountWhereUniqueInputObjectSchema),
        z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputObjectSchema),
        z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AccountWhereUniqueInputObjectSchema),
        z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputObjectSchema),
        z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => AccountUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
        ),
        z
          .lazy(
            () => AccountUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => AccountUpdateManyWithWhereWithoutCategoryInputObjectSchema,
        ),
        z
          .lazy(
            () => AccountUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AccountScalarWhereInputObjectSchema),
        z.lazy(() => AccountScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AccountUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
