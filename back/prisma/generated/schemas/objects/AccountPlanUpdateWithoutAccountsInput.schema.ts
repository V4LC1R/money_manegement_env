import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RecurrenceUpdateManyWithoutCategoryNestedInputObjectSchema } from './RecurrenceUpdateManyWithoutCategoryNestedInput.schema';
import { ParcelUpdateManyWithoutCategoryNestedInputObjectSchema } from './ParcelUpdateManyWithoutCategoryNestedInput.schema';
import { FinancialTransactionUpdateManyWithoutCategoryNestedInputObjectSchema } from './FinancialTransactionUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUpdateWithoutAccountsInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    recurrences: z
      .lazy(() => RecurrenceUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    parcels: z
      .lazy(() => ParcelUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountPlanUpdateWithoutAccountsInputObjectSchema = Schema;
