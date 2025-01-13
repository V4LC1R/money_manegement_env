import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutHoldersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutHoldersNestedInput.schema';
import { TransactionsFormsUpdateManyWithoutHolderNestedInputObjectSchema } from './TransactionsFormsUpdateManyWithoutHolderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUpdateInput> = z
  .object({
    name: z
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
    owner: z
      .lazy(() => UserUpdateOneRequiredWithoutHoldersNestedInputObjectSchema)
      .optional(),
    transactionsForms: z
      .lazy(
        () => TransactionsFormsUpdateManyWithoutHolderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HolderUpdateInputObjectSchema = Schema;
