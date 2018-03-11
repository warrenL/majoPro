import { IonicErrorHandler } from 'ionic-angular';

/**
 * The handler class used to process global errors for ionic.
 *
 */
export class GlobalIonicErrorHandler extends IonicErrorHandler {

    handleError(err: any): void {
        let message = err.nativeError || err.message || err.nativeError.message || "";
        let stack = err.nativeError || err.stack || err.nativeError.stack;
        console.error("error message" + message);
        console.error("error stack" + stack);

        // collection error information and other useful information, for example device information or logged in user
        // then upload to Server
        // Add the logic to save log in local when offline
    }
}
