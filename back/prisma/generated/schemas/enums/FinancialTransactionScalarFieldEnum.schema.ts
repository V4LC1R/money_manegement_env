import { z } from 'zod';

export const FinancialTransactionScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'value',
  'userId',
  'transactionsFormsId',
  'categoryId',
  'parcelId',
  'accountId',
  'typeId',
  'createdAt',
  'updatedAt',
]);
