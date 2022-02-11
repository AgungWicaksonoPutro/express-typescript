import {Request, Response} from "express";
import IController from "./ControllerInterface";

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send("Index controller");
    }
    create(req: Request, res: Response): Response {
        return res.send(req.body)
    }
    show(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    
}

export default new UserController();