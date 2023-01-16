import stripAinsi from 'strip-ansi';
import type { WriteStream } from "node:tty";

/**
 * 
 */
export function centerMessage (message: string, stdout: WriteStream = process.stdout): string {
    const consoleColumns: number = stdout.columns;
    const messageLength: number = stripAinsi(message).length;

    const padding = ' '.repeat((consoleColumns / 2) - ( messageLength / 2 ));

    return padding + message;
}