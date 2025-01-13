import { z } from 'zod';
import { HolderCreateManyOwnerInputObjectSchema } from './HolderCreateManyOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => HolderCreateManyOwnerInputObjectSchema),
      z.lazy(() => HolderCreateManyOwnerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const HolderCreateManyOwnerInputEnvelopeObjectSchema = Schema;
