"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var hobbiesSchema = new mongoose_1.default.Schema({
    hobbies: {
        type: Array,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    },
    channelId: {
        type: String,
        required: true
    },
    channelName: {
        type: String,
        required: true
    },
}, { timestamps: true });
var Hobby = mongoose_1.default.model("Hobbie", hobbiesSchema);
exports.default = Hobby;
