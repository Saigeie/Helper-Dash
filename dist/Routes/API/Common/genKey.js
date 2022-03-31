"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genKey_1 = __importDefault(require("../../../modules/genKey"));
const Route_1 = require("../../../structures/Route");
exports.default = new Route_1.APIRoute({
    name: `genKey`,
    owner: true,
    type: "json",
    run: async (req, res) => {
        const response = await (0, genKey_1.default)();
        if (response.status === "Failed") {
            res.send({ res: `Failed to gather key.`, code: 404 });
        }
        res.send({ res: `Key has been generated`, key: response.key, code: 200 });
    }
});
//# sourceMappingURL=genKey.js.map