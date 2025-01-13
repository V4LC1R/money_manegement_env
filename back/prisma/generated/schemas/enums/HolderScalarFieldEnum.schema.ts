import { z } from 'zod';

export const HolderScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'value',
  'ownerId',
  'createdAt',
  'updatedAt',
]);
