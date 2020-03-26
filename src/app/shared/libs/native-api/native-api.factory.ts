import { isAndroid } from "tns-core-modules/ui/page/page";
import { NativeAPIAndroidService } from "./native-api.android";
import { NativeAPIiOSService } from "./native-api.ios";
import { NativeAPI } from "./native-api.interface";

export abstract class NativeAPIFactory {
    static getNativeAPIInstance(): NativeAPI {
        if (NativeAPIFactory.isAndroidPlatform()){
            return new NativeAPIAndroidService();
        } else {
            return new NativeAPIiOSService();
        }
    }

    static isAndroidPlatform(): boolean {
       return isAndroid; 
    }
}