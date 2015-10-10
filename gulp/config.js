var dest = "./build";
var src = './src';
var port = 3000;

module.exports = {
    nodemon: {
        script: './server.js',
        ext: 'js,jsx',
        ignore: [
            'build/*',
            'node_modules/*'
        ],
        env: {
            'NODE_ENV': 'development',
            'DEBUG': 'Server',
            'PORT': port
        }
    },
    images: {
        src: src + "/assets/images/**",
        dest: dest + "/assets/images"
    },
    libs: {
        src: src + "/libs/**",
        dest: dest + "/libs"
    },
    assets: {
        src: src + "/assets/**",
        dest: dest + "/assets",
        // exclude images (use image optimization task instead)
        exclusions: [
            '!' + src + '/assets/{images,images/**}'
        ]
    },
    markup: {
        src: src + "/html/**/*.html",
        dest: dest
    },
    sass: {
        src: src + "/sass/**/*.{sass,scss}",
        dest: dest + "/css",
        rename: 'main.css',
        settings: {
            // Required if you want to use SASS syntax
            // See https://github.com/dlmanning/gulp-sass/issues/81
            sourceComments: 'map',
            imagePath: '/assets/images' // Used by the image-url helper
        }
    },
    // eslint
    lint: {
        src: [
            src + '/javascript/**/*.js',
            src + '/javascript/**/*.jsx'
        ],
        configFile: '.eslintrc',
        format: ''
    },
    browserify: {
        src: src + '/javascript/app.js',
        dest: dest + '/js',
        settings: {
            insertGlobals: true,
            extensions: ['.js','.jsx'],
            transform: [require('babelify'), require('reactify')]
        }
    },
    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        dest: dest
    },
    settings: {
        src: './settings.json',
        dest: dest
    }
};
