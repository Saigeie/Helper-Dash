"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rate_limit_mongo_1 = __importDefault(require("rate-limit-mongo"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.default = (0, express_rate_limit_1.default)({
    max: 100,
    message: {
        res: `You are currently being rate Limited, Please wait ~10 minutes`,
        code: 429,
    },
    store: new rate_limit_mongo_1.default({ uri: `${process.env.DB}` }),
    windowMs: 60 * 1000 * 10,
});
//# sourceMappingURL=rateLimiter.js.map