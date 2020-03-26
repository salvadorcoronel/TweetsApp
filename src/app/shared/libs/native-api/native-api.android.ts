import { NativeAPI } from "./native-api.interface";

//declare let java: any;

export class NativeAPIAndroidService implements NativeAPI{
    pow(x: number, y: number): number {
        return java.lang.Math.pow(x, y);
    }

    getBoolValueOfString(varStringJS: string): boolean {
        // defining var string in JAVA and get a reference
        // const varStringReferenceAndroidString = new java.lang.String(varStringJS);

        // This property is true on encountering one of "true", "True" 
        // Homologar: // This property is true on encountering one of "Y", "y", "T", "t", or a digit 1-9
        const trueArray = ["Y", "y", "T", "t", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        if ( trueArray.indexOf(varStringJS) > -1 ) {
            varStringJS = 'true';
            console.log(`varStringJS was replaced by true...`);
        }
        return java.lang.Boolean.parseBoolean(varStringJS);
    }

}