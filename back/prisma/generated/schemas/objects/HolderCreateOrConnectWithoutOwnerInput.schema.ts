import { z } from 'zod';
import { HolderWhereUniqueInputObjectSchema } from './HolderWhereUniqueInput.schema';
import { HolderCreateWithoutOwnerInputObjectSchema } from './HolderCreateWithoutOwnerInput.schema';
import { HolderUncheckedCreateWithoutOwnerInputObjectSchema } from './HolderUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => HolderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => HolderCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => HolderUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const HolderCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
