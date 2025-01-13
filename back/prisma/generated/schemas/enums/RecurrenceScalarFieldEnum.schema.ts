import { z } from 'zod';

export const RecurrenceScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'reptition',
  'range',
  'value',
  'categoryId',
  'type',
  'createdAt',
  'updatedAt',
]);
