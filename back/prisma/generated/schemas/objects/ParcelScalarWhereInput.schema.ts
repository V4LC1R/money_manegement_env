import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ParcelScalarWhereInputObjectSchema),
        z.lazy(() => ParcelScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ParcelScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ParcelScalarWhereInputObjectSchema),
        z.lazy(() => ParcelScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    value: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    dueDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    competence: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    accountId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const ParcelScalarWhereInputObjectSchema = Schema;
