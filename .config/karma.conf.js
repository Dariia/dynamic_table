/**
 * Karma configuration
*/

module.exports = function (config) {
    config.set({
        basePath: '..',
        hostname: 'localhost',
        coverageReporter: {
            type: 'html',
            dir: 'client/unit-testing/coverage',
            instrumenterOptions: {
                istanbul: {noCompact: true}
            }
        },
        frameworks: ['jasmine'],
        files: [
            "public/js/*.js",
            "client/unit-testing/*.js"
        ],
        exclude: [],
        preprocessors: {
            'public/js/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],
        port: 4041,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome', 'Firefox', 'Safari'],
        singleRun: true,
        concurrency: Infinity
    })
};
