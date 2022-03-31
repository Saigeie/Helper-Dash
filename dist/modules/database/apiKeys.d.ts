/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from "mongoose";
export interface APIKEYS extends Document {
    serverId: string;
    keys: Array<string>;
}
declare const _default: import("mongoose").Model<APIKEYS, {}, {}, {}>;
export default _default;
