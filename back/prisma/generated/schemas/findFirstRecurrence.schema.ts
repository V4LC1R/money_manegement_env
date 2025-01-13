import { z } from 'zod';
import { RecurrenceOrderByWithRelationInputObjectSchema } from './objects/RecurrenceOrderByWithRelationInput.schema';
import { RecurrenceWhereInputObjectSchema } from './objects/RecurrenceWhereInput.schema';
import { RecurrenceWhereUniqueInputObjectSchema } from './objects/RecurrenceWhereUniqueInput.schema';
import { RecurrenceScalarFieldEnumSchema } from './enums/RecurrenceScalarFieldEnum.schema';

export const RecurrenceFindFirstSchema = z.object({
  orderBy: z
    .union([
      RecurrenceOrderByWithRelationInputObjectSchema,
      RecurrenceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RecurrenceWhereInputObjectSchema.optional(),
  cursor: RecurrenceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RecurrenceScalarFieldEnumSchema).optional(),
});
