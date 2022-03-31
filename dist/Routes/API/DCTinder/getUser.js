"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../../../modules/database/Users"));
const Route_1 = require("../../../structures/Route");
exports.default = new Route_1.APIRoute({
    name: `getUser`,
    parentRoute: `dctinder`,
    type: "json",
    params: ["userId=DISCORD_USER_ID"],
    run: async (req, res) => {
        const { userId } = req.query;
        if (!userId) {
            return res.send({
                res: `ERROR: Please supply a valid userId`,
                code: 404,
            });
        }
        const userSchema = await Users_1.default.findOne({ userId });
        if (!userSchema) {
            return res.send({
                res: `ERROR: Could not find any data for this user, Please tell them to sign up first.`,
                usableMessage: `⚠ ERROR: Count not find any data for this user, Please sign up at https://dctinder.saige.cloud`,
                code: 404,
            });
        }
        const formattedData = {
            userId: userSchema.userId,
            DiscordInformation: userSchema.BasicInformation,
            userBio: userSchema.bio,
            views: userSchema.profileViews,
            totalMatches: userSchema.matches,
        };
        res.send({
            res: formattedData,
            code: 200
        });
    },
});
//# sourceMappingURL=getUser.js.map