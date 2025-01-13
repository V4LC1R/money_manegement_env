import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecurrenceOrderByRelationAggregateInputObjectSchema } from './RecurrenceOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { ParcelOrderByRelationAggregateInputObjectSchema } from './ParcelOrderByRelationAggregateInput.schema';
import { FinancialTransactionOrderByRelationAggregateInputObjectSchema } from './FinancialTransactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    recurrences: z
      .lazy(() => RecurrenceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    parcels: z
      .lazy(() => ParcelOrderByRelationAggregateInputObjectSchema)
      .optional(),
    financialTransactions: z
      .lazy(() => FinancialTransactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AccountPlanOrderByWithRelationInputObjectSchema = Schema;
