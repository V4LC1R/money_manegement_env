import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateOneRequiredWithoutParcelsNestedInputObjectSchema } from './AccountUpdateOneRequiredWithoutParcelsNestedInput.schema';
import { FinancialTransactionUpdateManyWithoutParcelNestedInputObjectSchema } from './FinancialTransactionUpdateManyWithoutParcelNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpdateWithoutCategoryInput> = z
  .object({
    value: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    dueDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    competence: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
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
    account: z
      .lazy(() => AccountUpdateOneRequiredWithoutParcelsNestedInputObjectSchema)
      .optional(),
    FinancialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUpdateManyWithoutParcelNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ParcelUpdateWithoutCategoryInputObjectSchema = Schema;
