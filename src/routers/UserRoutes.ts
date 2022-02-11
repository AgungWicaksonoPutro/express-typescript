import {Router} from "express";
import IRouter from "./RouterInterface";
import UserController from "../cotrollers/UserController";

class UserRoutes implements IRouter {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get("/", UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.show)
        this.router.put("/:id", UserController.update)
        this.router.delete("/:id", UserController.delete)
    }   
}

export default new UserRoutes().router;