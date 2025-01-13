import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RecurrenceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './RecurrenceUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { ParcelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './ParcelUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { FinancialTransactionUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './FinancialTransactionUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUncheckedUpdateWithoutAccountsInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
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
        .lazy(
          () =>
            RecurrenceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
      parcels: z
        .lazy(
          () => ParcelUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
      financialTransactions: z
        .lazy(
          () =>
            FinancialTransactionUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const AccountPlanUncheckedUpdateWithoutAccountsInputObjectSchema =
  Schema;
