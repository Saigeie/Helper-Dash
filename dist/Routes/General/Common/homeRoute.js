"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("../../../structures/Route");
const glob_1 = __importDefault(require("glob"));
const util_1 = require("util");
const RouteHandler_1 = require("../../../modules/RouteHandler");
const globPromise = (0, util_1.promisify)(glob_1.default);
exports.default = new Route_1.Route({
    name: "/",
    run: async (req, res) => {
        const jsonEndPoints = [];
        const imageEndPoints = [];
        const Files = await globPromise(`${process.cwd()}/src/Routes/**/*.ts`);
        Files.map(async (x) => {
            const file = await (0, RouteHandler_1.importFile)(x);
            if (!file.name || file.name === "/" || file.owner)
                return;
            const parms = [];
            if (file.params && file.params.length > 0) {
                if (file.params.length === 1) {
                    parms.push("?" + file.params);
                }
                if (file.params.length > 1) {
                    for (let i = 0; i < file.params.length; i++) {
                        parms.push(`&${file.params[i]}`);
                    }
                }
            }
            const apiKeySymbol = parms.length > 0 ? "&" : "?";
            if (file.type === "json") {
                jsonEndPoints.push(`GET /api/${file.parentRoute ? `${file.parentRoute}/` : ""}${file.name}${parms.join("")}${apiKeySymbol}apikey=<key>`);
            }
            if (file.type === "image") {
                imageEndPoints.push(`GET /api/${file.parentRoute ? `${file.parentRoute}/` : ""}${file.name}${parms.join("")}${apiKeySymbol}apikey=<key>`);
            }
        });
        setTimeout(() => {
            res.send({
                res: `Welcome to the Saige, API`,
                information: `To use this API please gain your API key from the discord server - (https://discord.gg/chVhWNyF4b)`,
                requiredments: `Everything inside of "<>" is requied, although everything inside of "[]" is optional`,
                endPoints: {
                    "JSON EndPoints": jsonEndPoints,
                    "Image EndPoints": [],
                },
                code: 200,
            });
        }, 1000);
    },
});
//# sourceMappingURL=homeRoute.js.map