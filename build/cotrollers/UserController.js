"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    index(req, res) {
        return res.send("Index controller");
    }
    create(req, res) {
        return res.send(req.body);
    }
    show(req, res) {
        throw new Error("Method not implemented.");
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new UserController();
