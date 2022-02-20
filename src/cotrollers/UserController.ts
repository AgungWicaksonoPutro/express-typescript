import {Request, Response} from "express";
import IController from "./ControllerInterface";

let data: any[] = [
    {id: 1, name:"Agung"},
    {id: 2, name:"Agung W"},
    {id: 3, name:"Agung Wi"},
    {id: 4, name:"Agung Wicak"}
]

class UserController implements IController {
    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.filter(item => item.id != id);

        return res.send(person);
    }
    index(req: Request, res: Response): Response {
        return res.send(data);
    }
    create(req: Request, res: Response): Response {
        const {id, name} = req.body;

        data.push({id, name})

        return res.send("Success Create");
    }
    show(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id);

        return res.send(person);
    }
    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;

        let person = data.find(item => item.id == id);

        person.name = name;

        return res.send("Updated");
    }
    
}

export default new UserController();