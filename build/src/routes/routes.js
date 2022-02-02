"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./users/routes"));
var routes_2 = __importDefault(require("./userState/routes"));
var routes_3 = __importDefault(require("./hobby/routes"));
var Router = express_1.default.Router();
Router.use('/healthcheck', function (req, res) { return res.sendStatus(200); });
//Routes
Router.use('/user', routes_1.default);
Router.use('/hobby', routes_3.default);
Router.use('/state', routes_2.default);
exports.default = Router;
