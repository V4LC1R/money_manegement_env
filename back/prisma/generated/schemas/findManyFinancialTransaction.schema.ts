import { z } from 'zod';
import { FinancialTransactionOrderByWithRelationInputObjectSchema } from './objects/FinancialTransactionOrderByWithRelationInput.schema';
import { FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionScalarFieldEnumSchema } from './enums/FinancialTransactionScalarFieldEnum.schema';

export const FinancialTransactionFindManySchema = z.object({
  orderBy: z
    .union([
      FinancialTransactionOrderByWithRelationInputObjectSchema,
      FinancialTransactionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FinancialTransactionWhereInputObjectSchema.optional(),
  cursor: FinancialTransactionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FinancialTransactionScalarFieldEnumSchema).optional(),
});
