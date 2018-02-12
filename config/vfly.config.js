module.exports = {
    // debug host
    'host': 'local.m-oooo.jd.id',

    // debug port
    'port': '8080',

    // CDN domain, or just leave it blank
    'static': {
        'start': '/',                // here use relative path
        'dev': '//m-xxxx.jd.id/',  // here use CDN domain
        'prod': '//m-xxxx.jd.id/'   // here use CDN domain
    },

    'globals': {
        'api': '//gw-payfee.jd.id'
    },

    // source map options
    'devtool': {
        'dev': true,
        'prod': false
    },

    // switch for eslint
    'eslint': true,

    // limit image size for use base64, (smaller use base64, larger use url)
    'base64_image_limit': 10000 // 10k
}
