const drivers = {
    chrome: { version: '96.0.4664.45' },
    firefox: { version: '0.30.0' },
}

exports.config = {
    specs: [
        './lib/test/specs/**/*.js'
    ],
    suites: {
        case_1: [
            './lib/test/**/specs/case.1.js'
        ],
        case_2: [
            './lib/test/**/specs/case.2.js'
        ],
        case_3: [
            './lib/test/**/specs/case.3.js'
        ],
        case_4: [
            './lib/test/**/specs/case.4.js'
        ],
        case_5: [
            './lib/test/**/specs/case.5.js'
        ],
        case_6: [
            './lib/test/**/specs/case.6.js'
        ],
        case_7: [
            './lib/test/**/specs/case.7.js'
        ],
        case_8: [
            './lib/test/**/specs/case.8.js'
        ],
    },
    services: [
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: { drivers },
            args: { drivers },
        }]
    ],
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