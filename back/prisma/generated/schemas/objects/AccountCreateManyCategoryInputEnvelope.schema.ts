import { z } from 'zod';
import { AccountCreateManyCategoryInputObjectSchema } from './AccountCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => AccountCreateManyCategoryInputObjectSchema),
      z.lazy(() => AccountCreateManyCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const AccountCreateManyCategoryInputEnvelopeObjectSchema = Schema;
