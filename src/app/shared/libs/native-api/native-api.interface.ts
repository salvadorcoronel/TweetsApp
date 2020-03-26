export interface NativeAPI {
    pow(x: number, y: number): number;
    getBoolValueOfString(varStringJS: string): boolean;
}