"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    console.log("auth middleware");
    next();
};
exports.auth = auth;
