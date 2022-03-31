"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerOnlyKey = void 0;
const apiKeys_1 = __importDefault(require("../database/apiKeys"));
async function ValidateAuth(req) {
    const { apikey } = req.query;
    const keys = await apiKeys_1.default.findOne({ serverId: `${process.env.SERVER_ID}` });
    if (!apikey || keys.keys.includes(`${apikey}`) === false)
        return false;
    if (apikey || keys.keys.includes(`${apikey}`) === true)
        return true;
}
exports.default = ValidateAuth;
function OwnerOnlyKey(req) {
    const { apikey } = req.query;
    return apikey === `${process.env.API_KEY}` ? true : false;
}
exports.OwnerOnlyKey = OwnerOnlyKey;
//# sourceMappingURL=validateAuth.js.map