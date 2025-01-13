import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TransactionsFormsListRelationFilterObjectSchema } from './TransactionsFormsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => HolderWhereInputObjectSchema),
        z.lazy(() => HolderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HolderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HolderWhereInputObjectSchema),
        z.lazy(() => HolderWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    value: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    ownerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    transactionsForms: z
      .lazy(() => TransactionsFormsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const HolderWhereInputObjectSchema = Schema;
