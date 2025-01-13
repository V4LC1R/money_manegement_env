import { z } from 'zod';
import { TransactionTypeWhereUniqueInputObjectSchema } from './objects/TransactionTypeWhereUniqueInput.schema';
import { TransactionTypeCreateInputObjectSchema } from './objects/TransactionTypeCreateInput.schema';
import { TransactionTypeUncheckedCreateInputObjectSchema } from './objects/TransactionTypeUncheckedCreateInput.schema';
import { TransactionTypeUpdateInputObjectSchema } from './objects/TransactionTypeUpdateInput.schema';
import { TransactionTypeUncheckedUpdateInputObjectSchema } from './objects/TransactionTypeUncheckedUpdateInput.schema';

export const TransactionTypeUpsertSchema = z.object({
  where: TransactionTypeWhereUniqueInputObjectSchema,
  create: z.union([
    TransactionTypeCreateInputObjectSchema,
    TransactionTypeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TransactionTypeUpdateInputObjectSchema,
    TransactionTypeUncheckedUpdateInputObjectSchema,
  ]),
});
