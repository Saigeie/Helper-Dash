"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    serverId: { type: String, default: `${process.env.API_KEY}` },
    keys: { type: Array, default: [`${process.env.API_KEY}`] },
});
exports.default = (0, mongoose_1.model)("APIKEYS", schema);
//# sourceMappingURL=apiKeys.js.map