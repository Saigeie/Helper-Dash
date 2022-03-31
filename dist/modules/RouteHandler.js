"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteHandler = exports.APIRouteHandler = exports.GetEndPoints = exports.importFile = void 0;
const glob_1 = __importDefault(require("glob"));
const util_1 = require("util");
const validateAuth_1 = __importStar(require("./middleware/validateAuth"));
const globPromise = (0, util_1.promisify)(glob_1.default);
async function importFile(filePath) {
    return (await Promise.resolve().then(() => __importStar(require(filePath))))?.default;
}
exports.importFile = importFile;
function GetEndPoints(file, res) {
    if (file.name !== "/") {
        const jsonEndPoints = [];
        const imageEndPoints = [];
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
            jsonEndPoints.push(`GET /api/${file.parentRoute ? `${file.parentRoute}/` : ""}${file.name}${parms.join("")}${apiKeySymbol}apikey=key`);
        }
        if (file.type === "image") {
            imageEndPoints.push(`GET /api/${file.parentRoute ? `${file.parentRoute}/` : ""}${file.name}${parms.join("")}${apiKeySymbol}apikey=key`);
        }
        return { json: jsonEndPoints, image: imageEndPoints };
    }
}
exports.GetEndPoints = GetEndPoints;
// API Route Handler
async function APIRouteHandler(app) {
    const Files = await globPromise(`${process.cwd()}/src/Routes/API/**/*.ts`);
    let route = "";
    Files.map(async (x) => {
        const file = await importFile(x);
        if (!file)
            return;
        app.get(`/api/${file.parentRoute ? `${file.parentRoute}/` : ""}${file.name}`, async (req, res) => {
            if (file.owner) {
                if (!(await (0, validateAuth_1.OwnerOnlyKey)(req))) {
                    return res.send({ res: `This is not the valid owner key. Please supply the OWNER_ONLY_KEY to gain a response from this endpoint`, code: `401` });
                }
            }
            if (!(await (0, validateAuth_1.default)(req))) {
                return res.send({ res: `Invalid API Key`, code: `401` });
            }
            file.run(req, res);
        });
    });
}
exports.APIRouteHandler = APIRouteHandler;
// Route Handler
async function RouteHandler(app) {
    const Files = await globPromise(`${process.cwd()}/src/Routes/General/**/*.ts`);
    Files.map(async (x) => {
        const file = await importFile(x);
        if (!file)
            return;
        app.get(`${file.name.startsWith("/") ? `${file.name}` : `/${file.name}`}`, (req, res) => {
            file.run(req, res);
        });
    });
}
exports.RouteHandler = RouteHandler;
//# sourceMappingURL=RouteHandler.js.map