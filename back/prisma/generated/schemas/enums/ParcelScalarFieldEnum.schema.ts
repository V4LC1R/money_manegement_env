import { z } from 'zod';

export const ParcelScalarFieldEnumSchema = z.enum([
  'id',
  'value',
  'dueDate',
  'competence',
  'accountId',
  'categoryId',
  'createdAt',
  'updatedAt',
]);
