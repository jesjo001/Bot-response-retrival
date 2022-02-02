"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHobby = exports.findAndUpdate = exports.findAllHobbies = exports.findHobby = exports.createHobby = void 0;
var hobbies_model_1 = __importDefault(require("../../model/hobbies.model"));
function createHobby(input) {
    return hobbies_model_1.default.create(input);
}
exports.createHobby = createHobby;
function findHobby(query, options) {
    if (options === void 0) { options = { lean: true }; }
    return hobbies_model_1.default.findOne(query, {}, options);
}
exports.findHobby = findHobby;
function findAllHobbies() {
    return hobbies_model_1.default.find({});
}
exports.findAllHobbies = findAllHobbies;
function findAndUpdate(query, update, options) {
    return hobbies_model_1.default.findOneAndUpdate(query, update, options);
}
exports.findAndUpdate = findAndUpdate;
function deleteHobby(query) {
    return hobbies_model_1.default.deleteOne(query);
}
exports.deleteHobby = deleteHobby;
