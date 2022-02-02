"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.sessionValidationRules = exports.postValidationRules = exports.userValidationRules = void 0;
var express_validator_1 = require("express-validator");
var userValidationRules = function () {
    return [
        // username must not be empty
        (0, express_validator_1.body)("username").not().isEmpty(),
        // firstName is required
        (0, express_validator_1.body)("firstName").not().isEmpty(),
        // lastName is required
        (0, express_validator_1.body)("lastName").not().isEmpty(),
        // role is required
        (0, express_validator_1.body)("role").not().isEmpty(),
        //validation email
        (0, express_validator_1.body)("email").isEmail(),
        // password must be at least 5 chars long
        (0, express_validator_1.body)("password").isLength({ min: 8 }),
        // password must be at least 5 chars long
        (0, express_validator_1.body)("passwordConfirmation").isLength({ min: 8 }),
    ];
};
exports.userValidationRules = userValidationRules;
var postValidationRules = function () {
    return [
        // tittle must not be empty
        (0, express_validator_1.body)("title").not().isEmpty(),
        // body is required
        (0, express_validator_1.body)("body").not().isEmpty(),
    ];
};
exports.postValidationRules = postValidationRules;
var sessionValidationRules = function () {
    return [
        //validation email
        (0, express_validator_1.body)("email").isEmail(),
        // password must be at least 8 chars long
        (0, express_validator_1.body)("password").isLength({ min: 8 }),
    ];
};
exports.sessionValidationRules = sessionValidationRules;
var validate = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    var extractedErrors = [];
    errors.array().map(function (err) {
        var _a;
        return extractedErrors.push((_a = {}, _a[err.param] = err.msg, _a));
    });
    return res.status(422).json({
        errors: extractedErrors,
    });
};
exports.validate = validate;
