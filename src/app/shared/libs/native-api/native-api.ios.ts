import { NativeAPI } from "./native-api.interface";

declare let pow: any;
// declare let NSString: any;

export class NativeAPIiOSService implements NativeAPI {
    pow(x: number, y: number): number {
        return pow(x, y);
    }

    getBoolValueOfString(varStringJS: string): boolean {
        // we are defining var string in ObjectiveC and get a reference
        let varStringReferenceObjectiveCString: NSString = NSString.stringWithString(varStringJS);

        // This property is true on encountering one of "Y", "y", "T", "t", or a digit 1-9
        let booleanValue = varStringReferenceObjectiveCString.boolValue;
        return booleanValue;
    }
}