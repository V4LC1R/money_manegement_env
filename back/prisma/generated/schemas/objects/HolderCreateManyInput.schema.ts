import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    value: z.number(),
    ownerId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const HolderCreateManyInputObjectSchema = Schema;
