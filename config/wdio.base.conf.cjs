// const drivers = {
//     chrome: { version: '96.0.4664.45' },
//     firefox: { version: '0.30.0' },
// }

exports.config = {
    specs: [
        './lib/test/specs/**/*.js'
    ],
    suites: {

    },
    // services: [
    //     ['selenium-standalone', {
    //         logPath: 'logs',
    //         installArgs: { drivers },
    //         args: { drivers },
    //     }]
    // ],
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://todomvc.com/examples/angular2/',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 4,
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async () => {
        await browser.url(browser.options.baseUrl);
    }
}