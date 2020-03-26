export enum messageType {
    log,
    info,
    warn,
    error,
};

export class CustomTraceWriter {
    constructor() { }

    public write(message: string, category: string, type?: number) {
        const messageTypeNumber: number = (type) ? type : messageType.log;

        // printing of logs on console in a personalized way
        switch (messageTypeNumber) {
            case messageType.info:
                console.info(`${category}: ${new Date().toISOString()}, ${message}`);
                break;
            case messageType.warn:
                console.warn(`${category}: ${new Date().toISOString()}, ${message}`);
                break;
            case messageType.error:
                console.error(`${category}: ${new Date().toISOString()}, ${message}`);
                break;
            default:
                console.log(`${category}: ${new Date().toISOString()}, ${message}`);
                break;
        }
    }
}