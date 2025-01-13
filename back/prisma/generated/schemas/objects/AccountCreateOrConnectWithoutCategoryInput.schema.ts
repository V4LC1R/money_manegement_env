import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutCategoryInputObjectSchema } from './AccountCreateWithoutCategoryInput.schema';
import { AccountUncheckedCreateWithoutCategoryInputObjectSchema } from './AccountUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const AccountCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
