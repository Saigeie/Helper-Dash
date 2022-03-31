import { Response } from "express-serve-static-core";
import { APIRouteType } from "../types/RouteTypes";
export declare function importFile(filePath: string): Promise<any>;
export declare function GetEndPoints(file: APIRouteType, res: Response): {
    json: any[];
    image: any[];
};
export declare function APIRouteHandler(app: any): Promise<void>;
export declare function RouteHandler(app: any): Promise<void>;
