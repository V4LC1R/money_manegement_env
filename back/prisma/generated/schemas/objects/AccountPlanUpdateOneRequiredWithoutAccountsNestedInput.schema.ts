import { z } from 'zod';
import { AccountPlanCreateWithoutAccountsInputObjectSchema } from './AccountPlanCreateWithoutAccountsInput.schema';
import { AccountPlanUncheckedCreateWithoutAccountsInputObjectSchema } from './AccountPlanUncheckedCreateWithoutAccountsInput.schema';
import { AccountPlanCreateOrConnectWithoutAccountsInputObjectSchema } from './AccountPlanCreateOrConnectWithoutAccountsInput.schema';
import { AccountPlanUpsertWithoutAccountsInputObjectSchema } from './AccountPlanUpsertWithoutAccountsInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanUpdateWithoutAccountsInputObjectSchema } from './AccountPlanUpdateWithoutAccountsInput.schema';
import { AccountPlanUncheckedUpdateWithoutAccountsInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpdateOneRequiredWithoutAccountsNestedInput> =
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
      upsert: z
        .lazy(() => AccountPlanUpsertWithoutAccountsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccountPlanUpdateWithoutAccountsInputObjectSchema),
          z.lazy(
            () => AccountPlanUncheckedUpdateWithoutAccountsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const AccountPlanUpdateOneRequiredWithoutAccountsNestedInputObjectSchema =
  Schema;
