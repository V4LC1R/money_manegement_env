import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelCreateWithoutAccountInputObjectSchema } from './ParcelCreateWithoutAccountInput.schema';
import { ParcelUncheckedCreateWithoutAccountInputObjectSchema } from './ParcelUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => ParcelWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ParcelCreateWithoutAccountInputObjectSchema),
      z.lazy(() => ParcelUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict();

export const ParcelCreateOrConnectWithoutAccountInputObjectSchema = Schema;
