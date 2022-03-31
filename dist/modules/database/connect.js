"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `../../../.env` });
function Mongo() {
    mongoose_1.default.connect(`${process.env.DB}`)
        .then(() => {
        console.log("Connected to database");
    })
        .catch((err) => {
        console.log("Failed to connect to database");
        console.log(err);
    });
}
exports.default = Mongo;
//# sourceMappingURL=connect.js.map