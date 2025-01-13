import { z } from 'zod';
import { AccountCreateWithoutCategoryInputObjectSchema } from './AccountCreateWithoutCategoryInput.schema';
import { AccountUncheckedCreateWithoutCategoryInputObjectSchema } from './AccountUncheckedCreateWithoutCategoryInput.schema';
import { AccountCreateOrConnectWithoutCategoryInputObjectSchema } from './AccountCreateOrConnectWithoutCategoryInput.schema';
import { AccountCreateManyCategoryInputEnvelopeObjectSchema } from './AccountCreateManyCategoryInputEnvelope.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateNestedManyWithoutCategoryInput> = z
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
    createMany: z
      .lazy(() => AccountCreateManyCategoryInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputObjectSchema),
        z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AccountCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
