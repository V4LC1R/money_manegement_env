import { z } from 'zod';

export const TransactionsFormsScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'type',
  'holderId',
  'createdAt',
  'updatedAt',
]);
