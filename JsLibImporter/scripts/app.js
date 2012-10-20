require.config({
    paths: {
        'underscoreLib': 'libs/underscore'
    },
    shim: {
        'underscoreLib': {
            exports: '_'
        }
    }
});

var test;