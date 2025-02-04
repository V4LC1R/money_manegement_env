import { RouteProvider } from "@units/Http/RouteProvider";
import { AccountRoutes } from "../Http/Routes/AccountRoutes";

export class FinancialServiceProvider extends RouteProvider{
    register(): void {
        this.routes
            .use('/account',AccountRoutes())
    }
}