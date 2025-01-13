import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelUpdateWithoutCategoryInputObjectSchema } from './ParcelUpdateWithoutCategoryInput.schema';
import { ParcelUncheckedUpdateWithoutCategoryInputObjectSchema } from './ParcelUncheckedUpdateWithoutCategoryInput.schema';
import { ParcelCreateWithoutCategoryInputObjectSchema } from './ParcelCreateWithoutCategoryInput.schema';
import { ParcelUncheckedCreateWithoutCategoryInputObjectSchema } from './ParcelUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => ParcelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ParcelUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => ParcelUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ParcelCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => ParcelUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const ParcelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
