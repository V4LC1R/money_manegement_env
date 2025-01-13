import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelUpdateWithoutCategoryInputObjectSchema } from './ParcelUpdateWithoutCategoryInput.schema';
import { ParcelUncheckedUpdateWithoutCategoryInputObjectSchema } from './ParcelUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => ParcelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ParcelUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => ParcelUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const ParcelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
