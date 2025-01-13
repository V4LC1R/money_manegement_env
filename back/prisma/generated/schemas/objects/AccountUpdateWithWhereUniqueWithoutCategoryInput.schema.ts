import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutCategoryInputObjectSchema } from './AccountUpdateWithoutCategoryInput.schema';
import { AccountUncheckedUpdateWithoutCategoryInputObjectSchema } from './AccountUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AccountUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const AccountUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
