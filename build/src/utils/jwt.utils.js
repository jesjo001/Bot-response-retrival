"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.sign = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const privateKey = config.get("privateKey") as string;
var privateKey = process.env.PRIVATE_KEY;
function sign(object, options) {
    return jsonwebtoken_1.default.sign(object, privateKey, options);
}
exports.sign = sign;
function decode(token) {
    try {
        var decoded = jsonwebtoken_1.default.verify(token, privateKey);
        return { valid: true, expired: false, decoded: decoded };
    }
    catch (error) {
        return {
            valid: false,
            expired: error.message === "jwt expired",
            decoded: null,
        };
    }
}
exports.decode = decode;
