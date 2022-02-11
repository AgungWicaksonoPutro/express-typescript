"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    index(req, res) {
        return res.send("Index");
    }
    create(req, res) {
        return res.send("Success Create");
    }
}
exports.default = new AuthController();
