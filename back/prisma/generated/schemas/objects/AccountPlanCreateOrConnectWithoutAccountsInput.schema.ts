import { z } from 'zod';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanCreateWithoutAccountsInputObjectSchema } from './AccountPlanCreateWithoutAccountsInput.schema';
import { AccountPlanUncheckedCreateWithoutAccountsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateOrConnectWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccountPlanCreateWithoutAccountsInputObjectSchema),
        z.lazy(
          () => AccountPlanUncheckedCreateWithoutAccountsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AccountPlanCreateOrConnectWithoutAccountsInputObjectSchema =
  Schema;
