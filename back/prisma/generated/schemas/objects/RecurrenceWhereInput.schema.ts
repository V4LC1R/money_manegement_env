import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AccountPlanRelationFilterObjectSchema } from './AccountPlanRelationFilter.schema';
import { AccountPlanWhereInputObjectSchema } from './AccountPlanWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RecurrenceWhereInputObjectSchema),
        z.lazy(() => RecurrenceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RecurrenceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RecurrenceWhereInputObjectSchema),
        z.lazy(() => RecurrenceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reptition: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    range: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    value: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    type: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    category: z
      .union([
        z.lazy(() => AccountPlanRelationFilterObjectSchema),
        z.lazy(() => AccountPlanWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RecurrenceWhereInputObjectSchema = Schema;
