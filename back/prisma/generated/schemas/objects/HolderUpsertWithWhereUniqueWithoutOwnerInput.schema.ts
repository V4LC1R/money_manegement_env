import { z } from 'zod';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';
import { HolderUpdateWithoutOwnerInputObjectSchema } from './HolderUpdateWithoutOwnerInput.schema';
import { HolderUncheckedUpdateWithoutOwnerInputObjectSchema } from './HolderUncheckedUpdateWithoutOwnerInput.schema';
import { HolderCreateWithoutOwnerInputObjectSchema } from './HolderCreateWithoutOwnerInput.schema';
import { HolderUncheckedCreateWithoutOwnerInputObjectSchema } from './HolderUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUpsertWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => HolderWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => HolderUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => HolderUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => HolderCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => HolderUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const HolderUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
