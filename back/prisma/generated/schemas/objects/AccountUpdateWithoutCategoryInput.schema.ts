import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAccountsNestedInput.schema';
import { ParcelUpdateManyWithoutAccountNestedInputObjectSchema } from './ParcelUpdateManyWithoutAccountNestedInput.schema';
import { FinancialTransactionUpdateManyWithoutAccountNestedInputObjectSchema } from './FinancialTransactionUpdateManyWithoutAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateWithoutCategoryInput> = z
  .object({
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema)
      .optional(),
    parcels: z
      .lazy(() => ParcelUpdateManyWithoutAccountNestedInputObjectSchema)
      .optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUpdateManyWithoutAccountNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUpdateWithoutCategoryInputObjectSchema = Schema;
