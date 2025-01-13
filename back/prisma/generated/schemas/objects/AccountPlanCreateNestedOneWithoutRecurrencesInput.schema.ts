import { z } from 'zod';
import { AccountPlanCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanCreateWithoutRecurrencesInput.schema';
import { AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanUncheckedCreateWithoutRecurrencesInput.schema';
import { AccountPlanCreateOrConnectWithoutRecurrencesInputObjectSchema } from './AccountPlanCreateOrConnectWithoutRecurrencesInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateNestedOneWithoutRecurrencesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountPlanCreateWithoutRecurrencesInputObjectSchema),
          z.lazy(
            () => AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => AccountPlanCreateOrConnectWithoutRecurrencesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const AccountPlanCreateNestedOneWithoutRecurrencesInputObjectSchema =
  Schema;
