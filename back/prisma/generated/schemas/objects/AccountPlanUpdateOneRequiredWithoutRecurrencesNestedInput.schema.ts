import { z } from 'zod';
import { AccountPlanCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanCreateWithoutRecurrencesInput.schema';
import { AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanUncheckedCreateWithoutRecurrencesInput.schema';
import { AccountPlanCreateOrConnectWithoutRecurrencesInputObjectSchema } from './AccountPlanCreateOrConnectWithoutRecurrencesInput.schema';
import { AccountPlanUpsertWithoutRecurrencesInputObjectSchema } from './AccountPlanUpsertWithoutRecurrencesInput.schema';
import { AccountPlanWhereUniqueInputObjectSchema } from './AccountPlanWhereUniqueInput.schema';
import { AccountPlanUpdateWithoutRecurrencesInputObjectSchema } from './AccountPlanUpdateWithoutRecurrencesInput.schema';
import { AccountPlanUncheckedUpdateWithoutRecurrencesInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutRecurrencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpdateOneRequiredWithoutRecurrencesNestedInput> =
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
      upsert: z
        .lazy(() => AccountPlanUpsertWithoutRecurrencesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountPlanWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccountPlanUpdateWithoutRecurrencesInputObjectSchema),
          z.lazy(
            () => AccountPlanUncheckedUpdateWithoutRecurrencesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const AccountPlanUpdateOneRequiredWithoutRecurrencesNestedInputObjectSchema =
  Schema;
