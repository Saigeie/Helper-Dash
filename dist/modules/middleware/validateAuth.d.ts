import { Request } from "express";
export default function ValidateAuth(req: Request): Promise<boolean>;
export declare function OwnerOnlyKey(req: Request): boolean;
