"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../../controller/user.controller");
var validator_1 = require("../../middleware/validation/validator");
var session_controller_1 = require("../../controller/session.controller");
var requiresUser_1 = __importDefault(require("../../middleware/validation/requiresUser"));
var UserRouter = express_1.default.Router();
UserRouter.post('/create', (0, validator_1.userValidationRules)(), validator_1.validate, user_controller_1.createUserHandler);
//User session routes
UserRouter.post('/sessions', (0, validator_1.sessionValidationRules)(), validator_1.validate, session_controller_1.createUserSessionHandler);
UserRouter.delete('/sessions', requiresUser_1.default, session_controller_1.invalidateUserSessionHandler);
UserRouter.get('/sessions', requiresUser_1.default, session_controller_1.getUserSessionsHandler);
UserRouter.post('/login', (0, validator_1.sessionValidationRules)(), validator_1.validate, session_controller_1.createUserSessionHandler);
UserRouter.delete('/logout', requiresUser_1.default, session_controller_1.invalidateUserSessionHandler);
exports.default = UserRouter;
