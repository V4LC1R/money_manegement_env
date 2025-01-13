import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelUpdateWithoutAccountInputObjectSchema } from './ParcelUpdateWithoutAccountInput.schema';
import { ParcelUncheckedUpdateWithoutAccountInputObjectSchema } from './ParcelUncheckedUpdateWithoutAccountInput.schema';
import { ParcelCreateWithoutAccountInputObjectSchema } from './ParcelCreateWithoutAccountInput.schema';
import { ParcelUncheckedCreateWithoutAccountInputObjectSchema } from './ParcelUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ParcelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ParcelUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => ParcelUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ParcelCreateWithoutAccountInputObjectSchema),
        z.lazy(() => ParcelUncheckedCreateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const ParcelUpsertWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
