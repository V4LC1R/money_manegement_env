import { z } from 'zod';
import { AccountUpdateWithoutParcelsInputObjectSchema } from './AccountUpdateWithoutParcelsInput.schema';
import { AccountUncheckedUpdateWithoutParcelsInputObjectSchema } from './AccountUncheckedUpdateWithoutParcelsInput.schema';
import { AccountCreateWithoutParcelsInputObjectSchema } from './AccountCreateWithoutParcelsInput.schema';
import { AccountUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountUncheckedCreateWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpsertWithoutParcelsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountUpdateWithoutParcelsInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutParcelsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutParcelsInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutParcelsInputObjectSchema),
    ]),
  })
  .strict();

export const AccountUpsertWithoutParcelsInputObjectSchema = Schema;
