import {Request, Response} from "express";
import IController from "./ControllerInterface";

class AuthController {
    index(req: Request, res: Response): Response {
        return res.send("Index");
    }
    create(req: Request, res: Response): Response {
        return res.send("Success Create");
    }
    
}

export default new AuthController();