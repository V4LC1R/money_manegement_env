import { z } from 'zod';
import { AccountCreateWithoutParcelsInputObjectSchema } from './AccountCreateWithoutParcelsInput.schema';
import { AccountUncheckedCreateWithoutParcelsInputObjectSchema } from './AccountUncheckedCreateWithoutParcelsInput.schema';
import { AccountCreateOrConnectWithoutParcelsInputObjectSchema } from './AccountCreateOrConnectWithoutParcelsInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateNestedOneWithoutParcelsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutParcelsInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutParcelsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AccountCreateOrConnectWithoutParcelsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AccountCreateNestedOneWithoutParcelsInputObjectSchema = Schema;
