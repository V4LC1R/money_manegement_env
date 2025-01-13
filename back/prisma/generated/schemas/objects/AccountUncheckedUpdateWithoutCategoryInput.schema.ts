import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ParcelUncheckedUpdateManyWithoutAccountNestedInputObjectSchema } from './ParcelUncheckedUpdateManyWithoutAccountNestedInput.schema';
import { FinancialTransactionUncheckedUpdateManyWithoutAccountNestedInputObjectSchema } from './FinancialTransactionUncheckedUpdateManyWithoutAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutCategoryInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    balance: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
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
    parcels: z
      .lazy(
        () => ParcelUncheckedUpdateManyWithoutAccountNestedInputObjectSchema,
      )
      .optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUncheckedUpdateManyWithoutAccountNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUncheckedUpdateWithoutCategoryInputObjectSchema = Schema;
