"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHobbyHandler = exports.deleteEventHandler = exports.getAllHobbyHandler = exports.getHobbyHandler = void 0;
var lodash_1 = require("lodash");
var logger_1 = __importDefault(require("../logger"));
var hobbies_services_1 = require("../service/hobbies/hobbies.services");
var getHobbyHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hobbyId, hobby, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                hobbyId = (0, lodash_1.get)(req, "params.id");
                return [4 /*yield*/, (0, hobbies_services_1.findHobby)({ _id: hobbyId })];
            case 1:
                hobby = _a.sent();
                if (!hobby)
                    return [2 /*return*/, res.status(404).json({
                            status: 404,
                            message: "Hobby not found.",
                        })];
                return [2 /*return*/, res.status(200).json({
                        status: 200,
                        hobby: hobby,
                    })];
            case 2:
                e_1 = _a.sent();
                logger_1.default.error(e_1);
                return [2 /*return*/, res.status(500).json({
                        status: 500,
                        message: "Ops something went wrong. Please try again later!!",
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getHobbyHandler = getHobbyHandler;
var getAllHobbyHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hobbies, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, hobbies_services_1.findAllHobbies)()];
            case 1:
                hobbies = _a.sent();
                if (!hobbies) {
                    return [2 /*return*/, res.status(404).json({
                            status: 404,
                            message: "No Hobby Found.",
                        })];
                }
                return [2 /*return*/, res.status(200).json({
                        status: 200,
                        hobbies: hobbies,
                    })];
            case 2:
                err_1 = _a.sent();
                //log error with logger which doesn't block i/o like console.log does
                logger_1.default.error(err_1);
                return [2 /*return*/, res.status(500).json({
                        status: 500,
                        message: "Ops something went wrong. Please try again later!!",
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllHobbyHandler = getAllHobbyHandler;
var deleteEventHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hobbyId, hobby, response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                hobbyId = (0, lodash_1.get)(req, "params.id");
                return [4 /*yield*/, (0, hobbies_services_1.findHobby)({ _id: hobbyId })];
            case 1:
                hobby = _a.sent();
                if (!hobby) {
                    return [2 /*return*/, res.status(404).json({
                            status: 404,
                            message: "Hobby not found.",
                        })];
                }
                return [4 /*yield*/, (0, hobbies_services_1.deleteHobby)({ _id: hobbyId })];
            case 2:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: 200,
                        message: "Hobby deleted.",
                    })];
            case 3:
                err_2 = _a.sent();
                //log error with logger which doesn't block i/o like console.log does
                logger_1.default.error(err_2);
                return [2 /*return*/, res.status(500).json({
                        status: 500,
                        message: "Ops something went wrong. Please try again later!!",
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteEventHandler = deleteEventHandler;
var updateHobbyHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hobbyId, update, hobby, updatedHobby, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                hobbyId = (0, lodash_1.get)(req, "params.id");
                update = req.body;
                return [4 /*yield*/, (0, hobbies_services_1.findHobby)({ _id: hobbyId })];
            case 1:
                hobby = _a.sent();
                if (!hobby) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ message: "Invalid parameter. Hobby not found." })];
                }
                return [4 /*yield*/, (0, hobbies_services_1.findAndUpdate)({ _id: hobbyId }, update, {
                        new: true,
                    })];
            case 2:
                updatedHobby = _a.sent();
                return [2 /*return*/, res.status(200).json({ status: 200, hobby: updatedHobby })];
            case 3:
                err_3 = _a.sent();
                //log error with logger which doesn't block i/o like console.log does
                logger_1.default.error(err_3);
                return [2 /*return*/, res.status(500).json({
                        status: 500,
                        message: "Ops something went wrong. Please try again later!!",
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateHobbyHandler = updateHobbyHandler;
