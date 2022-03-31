import Mongoose from "mongoose";
export interface Message {
    type: "LIKE" | "MATCH" | "UPDATE";
    res: string;
    author: Users;
}
export interface Users {
    userId: string;
    api_key: string;
    BasicInformation: object;
    CustomInformation: object;
    profileViews: Number;
    matches: Number;
    blockedUserIds: Array<string>;
    messages: Array<Message>;
}
declare const _default: Mongoose.Model<any, {}, {}, {}>;
export default _default;
