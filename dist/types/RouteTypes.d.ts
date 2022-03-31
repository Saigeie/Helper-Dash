import { Request, Response } from "express";
interface RunOptions {
    (req: Request, res: Response): any;
}
export declare type APIRouteType = {
    name: string;
    owner?: boolean;
    params?: Array<string>;
    parentRoute?: string;
    type: "image" | "json";
    run: RunOptions;
};
export declare type RouteType = {
    name: string;
    run: RunOptions;
};
export {};
