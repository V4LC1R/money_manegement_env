import { z } from 'zod';
import { HolderScalarWhereInputObjectSchema } from './HolderScalarWhereInput.schema';
import { HolderUpdateManyMutationInputObjectSchema } from './HolderUpdateManyMutationInput.schema';
import { HolderUncheckedUpdateManyWithoutHoldersInputObjectSchema } from './HolderUncheckedUpdateManyWithoutHoldersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => HolderScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => HolderUpdateManyMutationInputObjectSchema),
      z.lazy(() => HolderUncheckedUpdateManyWithoutHoldersInputObjectSchema),
    ]),
  })
  .strict();

export const HolderUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema;
