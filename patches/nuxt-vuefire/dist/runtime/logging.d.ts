export type LogType = 'debug' | 'info' | 'warn' | 'error' | 'trace' | 'log';
export declare function log(type: LogType, ...args: any[]): void;
export declare function log(...args: any[]): void;
