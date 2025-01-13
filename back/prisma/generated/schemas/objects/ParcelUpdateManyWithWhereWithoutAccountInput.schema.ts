import { z } from 'zod';
import { ParcelScalarWhereInputObjectSchema } from './ParcelScalarWhereInput.schema';
import { ParcelUpdateManyMutationInputObjectSchema } from './ParcelUpdateManyMutationInput.schema';
import { ParcelUncheckedUpdateManyWithoutParcelsInputObjectSchema } from './ParcelUncheckedUpdateManyWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpdateManyWithWhereWithoutAccountInput> = z
  .object({
    where: z.lazy(() => ParcelScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ParcelUpdateManyMutationInputObjectSchema),
      z.lazy(() => ParcelUncheckedUpdateManyWithoutParcelsInputObjectSchema),
    ]),
  })
  .strict();

export const ParcelUpdateManyWithWhereWithoutAccountInputObjectSchema = Schema;
