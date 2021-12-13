const merge = require('deepmerge');
const baseConf = require('./wdio.base.conf.cjs');

exports.config = merge(baseConf.config, {
    capabilities: [{
        maxInstances: 2,
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: [
                '--lang=en',
            ],
        },
    }],
});
