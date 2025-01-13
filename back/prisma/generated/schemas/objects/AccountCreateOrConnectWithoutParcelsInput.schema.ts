import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutParcelsInputObjectSchema } from './AccountCreateWithoutParcelsInput.schema';
import { AccountUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountUncheckedCreateWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutParcelsInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutParcelsInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutParcelsInputObjectSchema),
    ]),
  })
  .strict();

export const AccountCreateOrConnectWithoutParcelsInputObjectSchema = Schema;
