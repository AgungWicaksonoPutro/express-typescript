import {Router, Request, Response} from "express";
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
        this.router.post("/users", UserController.create);
    }   
}

export default new UserRoutes().router;