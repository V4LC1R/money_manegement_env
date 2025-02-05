import { RouteProvider } from "@units/Http/RouteProvider";
import { AuthRoutes } from "../Http/Routes/AuthReutes";

export class AuthServiceProvider extends RouteProvider{
    register(): void {
        this.routes
            .use('/auth',AuthRoutes())
    }
}