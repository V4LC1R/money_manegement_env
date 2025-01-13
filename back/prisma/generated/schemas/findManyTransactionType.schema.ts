import { z } from 'zod';
import { TransactionTypeOrderByWithRelationInputObjectSchema } from './objects/TransactionTypeOrderByWithRelationInput.schema';
import { TransactionTypeWhereInputObjectSchema } from './objects/TransactionTypeWhereInput.schema';
import { TransactionTypeWhereUniqueInputObjectSchema } from './objects/TransactionTypeWhereUniqueInput.schema';
import { TransactionTypeScalarFieldEnumSchema } from './enums/TransactionTypeScalarFieldEnum.schema';

export const TransactionTypeFindManySchema = z.object({
  orderBy: z
    .union([
      TransactionTypeOrderByWithRelationInputObjectSchema,
      TransactionTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionTypeWhereInputObjectSchema.optional(),
  cursor: TransactionTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TransactionTypeScalarFieldEnumSchema).optional(),
});
