import { z } from 'zod';
import { TransactionTypeUpdateInputObjectSchema } from './objects/TransactionTypeUpdateInput.schema';
import { TransactionTypeUncheckedUpdateInputObjectSchema } from './objects/TransactionTypeUncheckedUpdateInput.schema';
import { TransactionTypeWhereUniqueInputObjectSchema } from './objects/TransactionTypeWhereUniqueInput.schema';

export const TransactionTypeUpdateOneSchema = z.object({
  data: z.union([
    TransactionTypeUpdateInputObjectSchema,
    TransactionTypeUncheckedUpdateInputObjectSchema,
  ]),
  where: TransactionTypeWhereUniqueInputObjectSchema,
});
