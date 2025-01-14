import {Router} from 'express'
import { FinancialServiceProvider } from './App/Domains/Financial/Providers/FinancialServiceProvider'

export const appRouter = Router()
    .use(new FinancialServiceProvider().getRoutes())
