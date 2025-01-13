import { z } from 'zod';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';
import { HolderUpdateWithoutOwnerInputObjectSchema } from './HolderUpdateWithoutOwnerInput.schema';
import { HolderUncheckedUpdateWithoutOwnerInputObjectSchema } from './HolderUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUpdateWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => HolderWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => HolderUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => HolderUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const HolderUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
