import { z } from 'zod';

export const AccountScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'balance',
  'userId',
  'categoryId',
  'createdAt',
  'updatedAt',
]);
