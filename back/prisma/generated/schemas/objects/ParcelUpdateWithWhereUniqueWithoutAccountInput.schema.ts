import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelUpdateWithoutAccountInputObjectSchema } from './ParcelUpdateWithoutAccountInput.schema';
import { ParcelUncheckedUpdateWithoutAccountInputObjectSchema } from './ParcelUncheckedUpdateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ParcelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ParcelUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => ParcelUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const ParcelUpdateWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
