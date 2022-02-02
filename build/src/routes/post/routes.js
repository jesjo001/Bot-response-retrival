"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validator_1 = require("../../middleware/validation/validator");
var requiresUser_1 = __importDefault(require("../../middleware/validation/requiresUser"));
var post_controller_1 = require("../../controller/post.controller");
var PostRouter = express_1.default.Router();
PostRouter.post('/create', (0, validator_1.createPostValidationRules)(), validator_1.validate, requiresUser_1.default, post_controller_1.createPostHandler);
PostRouter.put('/:postId', (0, validator_1.postValidationRules)(), validator_1.validate, requiresUser_1.default, post_controller_1.updatePostHandler);
PostRouter.delete('/:postId', requiresUser_1.default, post_controller_1.deletePostHandler);
PostRouter.get('/:postId', post_controller_1.getPostHandler);
exports.default = PostRouter;
