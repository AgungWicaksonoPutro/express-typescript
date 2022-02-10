"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Hello Typescript");
        });
        this.app.route("/users").post((req, res) => {
            console.log(req.body);
            res.send(req.body);
        });
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
