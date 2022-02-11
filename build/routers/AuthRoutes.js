"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = __importDefault(require("../cotrollers/AuthController"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
class UserRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("/", AuthController_1.default.index);
        this.router.post("/", AuthController_1.default.create);
    }
}
exports.default = new UserRoutes().router;
