"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genString = void 0;
const apiKeys_1 = __importDefault(require("./database/apiKeys"));
async function default_1() {
    const key = genString();
    const keys = await apiKeys_1.default.findOne({ serverId: `${process.env.SERVER_ID}` });
    if (keys.keys.includes(`${key}`)) {
        return { status: `Failed` };
    }
    await apiKeys_1.default.findOneAndUpdate({ serverId: `${process.env.SERVER_ID}` }, {
        $push: {
            keys: key
        }
    });
    return { status: "Completed", key: `${key}` };
}
exports.default = default_1;
function genString(length = 55) {
    let str = "";
    let chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopassdfghjklzxcvbnm1234567890QWERtYuiOokNBfVBNmkUYtfgVBIASUDFGASFAFAFSEGERTYE634T34T34GSDRTEGBE";
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
exports.genString = genString;
//# sourceMappingURL=genKey.js.map