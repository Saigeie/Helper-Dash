"use strict";
// Same schema from: https://github.com/Saigeie/DCTinder/blob/main/src/database/users.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    userId: { type: String },
    api_key: { type: String },
    BasicInformation: { type: Object, default: {} },
    CustomInformation: { type: Object, default: {} },
    // Stats
    bio: { type: String },
    profileViews: { type: Number, default: 0 },
    matchedUsers: { type: Array, default: [] },
    matches: { type: Number, default: 0 },
    blockedUserIds: { type: Array, default: [] },
    messages: { type: Array, default: [] },
});
exports.default = mongoose_1.default.model("Users", schema);
//# sourceMappingURL=Users.js.map