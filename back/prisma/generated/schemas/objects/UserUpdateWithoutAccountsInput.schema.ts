import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HolderUpdateManyWithoutOwnerNestedInputObjectSchema } from './HolderUpdateManyWithoutOwnerNestedInput.schema';
import { FinancialTransactionUpdateManyWithoutUserNestedInputObjectSchema } from './FinancialTransactionUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z
  .object({
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
    holders: z
      .lazy(() => HolderUpdateManyWithoutOwnerNestedInputObjectSchema)
      .optional(),
    transactionsFinancials: z
      .lazy(
        () => FinancialTransactionUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUpdateWithoutAccountsInputObjectSchema = Schema;
