import AuthController from "../cotrollers/AuthController";
import BaseRoutes from "./BaseRouter";

class UserRoutes extends BaseRoutes {
    routes(): void {
        this.router.post("/", AuthController.index);
        this.router.post("/", AuthController.create);
    }   
}

export default new UserRoutes().router;