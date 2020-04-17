/// <reference path="../lib/openrct2.d.ts" />
const DEBUG = true;

let main = () => {
    if (DEBUG) {
        trace = (msg) => {
            console.log("[trace] " + msg);
        };
    } else {
        trace = () => { };
    }

    trace("started");
};


registerPlugin({
    name: 'YourPlugin',
    version: '1.0',
    authors: ['Your Name'],
    type: 'server_client',
    main: main
});
