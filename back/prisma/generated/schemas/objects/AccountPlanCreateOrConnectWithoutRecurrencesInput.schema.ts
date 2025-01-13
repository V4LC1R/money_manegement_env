import { z } from 'zod';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanCreateWithoutRecurrencesInput.schema';
import { AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanUncheckedCreateWithoutRecurrencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateOrConnectWithoutRecurrencesInput> =
  z
    .object({
      where: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccountPlanCreateWithoutRecurrencesInputObjectSchema),
        z.lazy(
          () => AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AccountPlanCreateOrConnectWithoutRecurrencesInputObjectSchema =
  Schema;
