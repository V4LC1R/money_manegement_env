import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TransactionTypeUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema } from './TransactionTypeUpdateOneRequiredWithoutFinancialTransactionsNestedInput.schema';
import { AccountPlanUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema } from './AccountPlanUpdateOneRequiredWithoutFinancialTransactionsNestedInput.schema';
import { AccountUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema } from './AccountUpdateOneRequiredWithoutFinancialTransactionsNestedInput.schema';
import { ParcelUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema } from './ParcelUpdateOneRequiredWithoutFinancialTransactionsNestedInput.schema';
import { TransactionsFormsUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema } from './TransactionsFormsUpdateOneRequiredWithoutFinancialTransactionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateWithoutUserInput> = z
  .object({
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    value: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
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
    typeTransaction: z
      .lazy(
        () =>
          TransactionTypeUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema,
      )
      .optional(),
    category: z
      .lazy(
        () =>
          AccountPlanUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema,
      )
      .optional(),
    account: z
      .lazy(
        () =>
          AccountUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema,
      )
      .optional(),
    parcel: z
      .lazy(
        () =>
          ParcelUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema,
      )
      .optional(),
    transactionsForm: z
      .lazy(
        () =>
          TransactionsFormsUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FinancialTransactionUpdateWithoutUserInputObjectSchema = Schema;
