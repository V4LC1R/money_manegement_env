import { z } from 'zod';
import { TransactionsFormsUpdateInputObjectSchema } from './objects/TransactionsFormsUpdateInput.schema';
import { TransactionsFormsUncheckedUpdateInputObjectSchema } from './objects/TransactionsFormsUncheckedUpdateInput.schema';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './objects/TransactionsFormsWhereUniqueInput.schema';

export const TransactionsFormsUpdateOneSchema = z.object({
  data: z.union([
    TransactionsFormsUpdateInputObjectSchema,
    TransactionsFormsUncheckedUpdateInputObjectSchema,
  ]),
  where: TransactionsFormsWhereUniqueInputObjectSchema,
});
