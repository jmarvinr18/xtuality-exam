const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .scripts('node_modules/admin-lte/dist/js/adminlte.js', 'public/js/adminlte.js')
    .scripts('node_modules/admin-lte/plugins/jquery/jquery.min.js', 'public/js/jquery.js')
    .sass('resources/sass/app.scss', 'public/css')      // Remove the ';'
    .copyDirectory('node_modules/admin-lte/dist/img', 'public/images');  // This should be added.
    