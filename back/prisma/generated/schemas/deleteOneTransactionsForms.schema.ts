import { z } from 'zod';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './objects/TransactionsFormsWhereUniqueInput.schema';

export const TransactionsFormsDeleteOneSchema = z.object({
  where: TransactionsFormsWhereUniqueInputObjectSchema,
});
