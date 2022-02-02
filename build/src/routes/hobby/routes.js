"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var hobbies_controller_1 = require("../../controller/hobbies.controller");
var requiresUser_1 = __importDefault(require("../../middleware/validation/requiresUser"));
var HobbyRouter = express_1.default.Router();
HobbyRouter.use(requiresUser_1.default);
HobbyRouter.get("/:id", hobbies_controller_1.getHobbyHandler);
HobbyRouter.get("/get/all", hobbies_controller_1.getAllHobbyHandler);
HobbyRouter.delete("/del/:id", hobbies_controller_1.deleteEventHandler);
HobbyRouter.put("/:id", hobbies_controller_1.updateHobbyHandler);
exports.default = HobbyRouter;
