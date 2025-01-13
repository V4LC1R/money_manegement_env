import { z } from 'zod';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './objects/TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsCreateInputObjectSchema } from './objects/TransactionsFormsCreateInput.schema';
import { TransactionsFormsUncheckedCreateInputObjectSchema } from './objects/TransactionsFormsUncheckedCreateInput.schema';
import { TransactionsFormsUpdateInputObjectSchema } from './objects/TransactionsFormsUpdateInput.schema';
import { TransactionsFormsUncheckedUpdateInputObjectSchema } from './objects/TransactionsFormsUncheckedUpdateInput.schema';

export const TransactionsFormsUpsertSchema = z.object({
  where: TransactionsFormsWhereUniqueInputObjectSchema,
  create: z.union([
    TransactionsFormsCreateInputObjectSchema,
    TransactionsFormsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TransactionsFormsUpdateInputObjectSchema,
    TransactionsFormsUncheckedUpdateInputObjectSchema,
  ]),
});
