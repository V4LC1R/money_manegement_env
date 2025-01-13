import { z } from 'zod';
import { AccountPlanUpdateWithoutRecurrencesInputObjectSchema } from './AccountPlanUpdateWithoutRecurrencesInput.schema';
import { AccountPlanUncheckedUpdateWithoutRecurrencesInputObjectSchema } from './AccountPlanUncheckedUpdateWithoutRecurrencesInput.schema';
import { AccountPlanCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanCreateWithoutRecurrencesInput.schema';
import { AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema } from './AccountPlanUncheckedCreateWithoutRecurrencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpsertWithoutRecurrencesInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountPlanUpdateWithoutRecurrencesInputObjectSchema),
      z.lazy(
        () => AccountPlanUncheckedUpdateWithoutRecurrencesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => AccountPlanCreateWithoutRecurrencesInputObjectSchema),
      z.lazy(
        () => AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const AccountPlanUpsertWithoutRecurrencesInputObjectSchema = Schema;
