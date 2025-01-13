import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutCategoryInputObjectSchema } from './AccountUpdateWithoutCategoryInput.schema';
import { AccountUncheckedUpdateWithoutCategoryInputObjectSchema } from './AccountUncheckedUpdateWithoutCategoryInput.schema';
import { AccountCreateWithoutCategoryInputObjectSchema } from './AccountCreateWithoutCategoryInput.schema';
import { AccountUncheckedCreateWithoutCategoryInputObjectSchema } from './AccountUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AccountUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const AccountUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
