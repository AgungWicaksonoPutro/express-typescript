"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: "Agung" },
    { id: 2, name: "Agung W" },
    { id: 3, name: "Agung Wi" },
    { id: 4, name: "Agung Wicak" }
];
class UserController {
    delete(req, res) {
        const { id } = req.params;
        let person = data.filter(item => item.id != id);
        return res.send(person);
    }
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({ id, name });
        return res.send("Success Create");
    }
    show(req, res) {
        const { id } = req.params;
        let person = data.find(item => item.id == id);
        return res.send(person);
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let person = data.find(item => item.id == id);
        person.name = name;
        return res.send("Updated");
    }
}
exports.default = new UserController();
