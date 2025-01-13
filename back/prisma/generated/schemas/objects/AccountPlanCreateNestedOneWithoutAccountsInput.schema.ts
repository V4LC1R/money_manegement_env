import { z } from 'zod';
import { AccountPlanCreateWithoutAccountsInputObjectSchema } from './AccountPlanCreateWithoutAccountsInput.schema';
import { AccountPlanUncheckedCreateWithoutAccountsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutAccountsInput.schema';
import { AccountPlanCreateOrConnectWithoutAccountsInputObjectSchema } from './AccountPlanCreateOrConnectWithoutAccountsInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateNestedOneWithoutAccountsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountPlanCreateWithoutAccountsInputObjectSchema),
          z.lazy(
            () => AccountPlanUncheckedCreateWithoutAccountsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountPlanCreateOrConnectWithoutAccountsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const AccountPlanCreateNestedOneWithoutAccountsInputObjectSchema =
  Schema;
