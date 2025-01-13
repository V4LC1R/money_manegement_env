import { z } from 'zod';

export const TransactionTypeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'createdAt',
  'updatedAt',
]);
