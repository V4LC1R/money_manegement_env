import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAccountsNestedInput.schema';
import { ParcelUpdateManyWithoutAccountNestedInputObjectSchema } from './ParcelUpdateManyWithoutAccountNestedInput.schema';
import { AccountPlanUpdateOneRequiredWithoutAccountsNestedInputObjectSchema } from './AccountPlanUpdateOneRequiredWithoutAccountsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateWithoutFinancialTransactionsInput> =
  z
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
      category: z
        .lazy(
          () =>
            AccountPlanUpdateOneRequiredWithoutAccountsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const AccountUpdateWithoutFinancialTransactionsInputObjectSchema =
  Schema;
