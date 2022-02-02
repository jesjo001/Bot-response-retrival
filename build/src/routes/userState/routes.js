"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userState_controller_1 = require("../../controller/userState.controller");
var requiresUser_1 = __importDefault(require("../../middleware/validation/requiresUser"));
var UserStateRouter = express_1.default.Router();
UserStateRouter.use(requiresUser_1.default);
UserStateRouter.get("/:id", userState_controller_1.getUserStateHandler);
UserStateRouter.get("/get/all", userState_controller_1.getUserStateHandler);
UserStateRouter.delete("/del/:id", userState_controller_1.getUserStateHandler);
UserStateRouter.put("/update/:id", userState_controller_1.updateUserStateHandler);
exports.default = UserStateRouter;
