"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
// Need to do - got Rate Limited
exports.default = (username) => {
    if (!username)
        return { status: "Failed" };
    let response;
    (0, node_fetch_1.default)(`https://api.github.com/users/${username.toLowerCase()}`)
        .then((res) => res.json()).then((json) => { console.log(json); });
    setTimeout(() => {
        return response;
    }, 400);
};
//# sourceMappingURL=getGithubUserInfo.js.map