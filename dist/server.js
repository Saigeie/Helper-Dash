"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const RouteHandler_1 = require("./modules/RouteHandler");
const connect_1 = __importDefault(require("./modules/database/connect"));
const body_parser_1 = __importDefault(require("body-parser"));
const apiKeys_1 = __importDefault(require("./modules/database/apiKeys"));
const app = (0, express_1.default)();
(0, RouteHandler_1.APIRouteHandler)(app);
(0, RouteHandler_1.RouteHandler)(app);
(0, connect_1.default)();
// app.use(rateLimiter);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set("json spaces", 1);
app.listen(process.env.PORT || 80, async () => {
    console.log(`Connected to server, port: ${process.env.PORT || 80}`);
    const apikey = await apiKeys_1.default.findOne({ serverId: `${process.env.SERVER_ID}` });
    if (!apikey) {
        await apiKeys_1.default.create({ serverId: `${process.env.SERVER_ID}` });
    }
});
//# sourceMappingURL=server.js.map