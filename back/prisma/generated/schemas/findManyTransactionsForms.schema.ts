import { z } from 'zod';
import { TransactionsFormsOrderByWithRelationInputObjectSchema } from './objects/TransactionsFormsOrderByWithRelationInput.schema';
import { TransactionsFormsWhereInputObjectSchema } from './objects/TransactionsFormsWhereInput.schema';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './objects/TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsScalarFieldEnumSchema } from './enums/TransactionsFormsScalarFieldEnum.schema';

export const TransactionsFormsFindManySchema = z.object({
  orderBy: z
    .union([
      TransactionsFormsOrderByWithRelationInputObjectSchema,
      TransactionsFormsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionsFormsWhereInputObjectSchema.optional(),
  cursor: TransactionsFormsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TransactionsFormsScalarFieldEnumSchema).optional(),
});
