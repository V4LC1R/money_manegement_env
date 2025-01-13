import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelCreateWithoutCategoryInputObjectSchema } from './ParcelCreateWithoutCategoryInput.schema';
import { ParcelUncheckedCreateWithoutCategoryInputObjectSchema } from './ParcelUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => ParcelWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ParcelCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => ParcelUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const ParcelCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
