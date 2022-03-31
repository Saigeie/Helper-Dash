export interface genKeyInterface {
    status: "Failed" | "Completed";
    key?: string;
}
export default function (): Promise<{
    status: string;
    key?: undefined;
} | {
    status: string;
    key: string;
}>;
export declare function genString(length?: number): string;
