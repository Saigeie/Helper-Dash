"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getGithubUserInfo_1 = __importDefault(require("../../../modules/getGithubUserInfo"));
const Route_1 = require("../../../structures/Route");
exports.default = new Route_1.APIRoute({
    name: `github`,
    parentRoute: "data",
    params: ["username=GITHUB_USERNAME"],
    type: "json",
    owner: true,
    run: async (req, res) => {
        const { username } = req.query;
        const request = (await (0, getGithubUserInfo_1.default)(username));
        // if (request.status === "Failed") {
        //   return res.send({
        //     res: `Please supply a valid github username.`,
        //     code: 404,
        //   });
        // }
        // res.send({ res: request.response, code: 200 });
    },
});
//# sourceMappingURL=github.js.map