/**
 * Created by miguelplazas on 29/04/16.
 */

module.exports = function (grunt) {

    var path = require('path');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        ngAnnotate: {
            options: {
                singleQuotes: true,
                //regexp: '^(ng\n?[\\ ]+(.*)|(module.*))$'
            },
            app: {
                files: {
                    //'./public/min-safe/js/appFactory.js': ['./public/js/appFactory.js'],
                    //'./public/min-safe/services.js': ['./app/js/services.js'],
                    //'./public/min-safe/js/directives.js': ['./app/js/directives/widget.js'],

                    'app/Resources/public/min-safe/js/controllers.js': [
                        'app/Resources/app/controllers/masterController.js',
                        'app/Resources/app/controllers/menuController.js'
                    ],
                    //'./public/min-safe/js/categoriesController.js': ['./app/js/controllers/categoriesController.js'],
                    'app/Resources/public/min-safe/app.js': ['app/Resources/app/app.js']
                }
            }
        },

        bower: {
            install: {
                options: {
                    targetDir: './app/Resources/public/assets',
                    layout: function(type, component, source) {
                        var renamedType = type;
                        if (type == 'js') renamedType = 'js/lib';
                        else if (type == 'js/map') renamedType = 'js/lib';
                        else if (type == 'js/js') renamedType = 'js/js';
                        else if (type == 'js/lang') renamedType = 'js/lib/lang';
                        else if (type == 'css') renamedType = 'css/lib';
                        else if (type == 'fonts') renamedType = 'fonts';
                        else if (type == 'css/img') renamedType = 'css';
                        else if (type == 'src') renamedType = 'src';
                        return path.join(renamedType);;
                    },
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        cssmin : {
            bundled:{
                src: 'app/Resources/public/assets/css/lib.css',
                dest: 'web/assets/css/lib.min.css'
            }
        },

        uglify : {
            
            js: {
                files: {
                    'web/assets/js/lib.min.js': ['app/Resources/public/assets/js/lib.js']
                }
            },
            
            app: {
                files: {
                    'web/assets/js/app.min.js': ['app/Resources/public/app/app.js']
                }
            }
        },


        concat: {
            options: {
                stripBanners: true
            },
            css: {
                src: [
                    'app/Resources/public/assets/css/lib/bootstrap.css',
                    'app/Resources/public/assets/css/lib/bootstrap-theme.css',
                    'app/Resources/public/assets/css/lib/font-awesome.css',
                    'app/Resources/public/assets/css/lib/ui-bootstrap-csp.css',
                    'app/Resources/public/assets/css/lib/animate.css',
                    'app/Resources/public/assets/css/lib/c3.css',
                    'app/Resources/public/assets/css/lib/ionicons.css',
                    'app/Resources/public/template/css/AdminLTE.css',
                    'app/Resources/public/template/css/skins/_all-skins.css'
                ],
                dest: 'app/Resources/public/assets/css/lib.css'
            },
            js : {
                src : [
                    'app/Resources/public/assets/js/lib/jquery.js',
                    'app/Resources/public/assets/js/lib/bootstrap.js',
                    'app/Resources/public/template/js/jquery.slimscroll.js',
                    'app/Resources/public/template/js/fastclick.js',
                    'app/Resources/public/template/js/app.js',
                    'app/Resources/public/assets/js/lib/angular.js',
                    'app/Resources/public/assets/js/lib/angular-ui-router.js',
                    'app/Resources/public/assets/js/lib/ui-bootstrap.js',
                    'app/Resources/public/assets/js/lib/ui-bootstrap-tpls.js',
                    'app/Resources/public/assets/js/lib/angular-animate.js',
                    'app/Resources/public/assets/js/lib/angular-chart.js',
                    'app/Resources/public/assets/js/lib/angular-resource.js',
                    'app/Resources/public/assets/js/lib/angular-route.js',
                    'app/Resources/public/assets/js/lib/angular-touch.js',
                    'app/Resources/public/assets/js/lib/angular-cookies.js',
                    'app/Resources/public/assets/js/lib/lodash.js',
                    'app/Resources/public/assets/js/lib/restangular.js',
                    'app/Resources/public/assets/js/lib/c3.js',
                    'app/Resources/public/assets/js/lib/d3.js',
                    'app/Resources/public/assets/js/lib/bootstrap-ui-navbar.js',
                    'app/Resources/public/assets/js/lib/ui-navbar.js'
                ],
                dest: 'app/Resources/public/assets/js/lib.js'
            },
            app: {
                src: ['app/Resources/public/min-safe/app.js', 'app/Resources/public/min-safe/js/*.js'],
                dest: 'app/Resources/public/app/app.js'

            }
        },

        copy: {
            fonts: {
                expand: true,
                cwd: 'app/Resources/public/assets/fonts',
                src: '*',
                dest: 'web/assets/fonts/'
            },
            images: {
                expand: true,
                cwd: 'app/Resources/public/template/img',
                src: '*',
                dest: 'web/dist/img/'
            },
            src: {
                expand:true,
                cwd: 'app/Resources/public/assets/src',
                src: '*',
                dest: 'web/assets/src/'
            },
            tpl: {
                expand:true,
                cwd: 'app/Resources/views',
                src: '**',
                dest: 'web/tpl/'

            }
        },

        watch: {
            ngAnnotate: {
                files: 'app/Resources/app/**/*.js',
                tasks: "ngAnnotate"
            },

        }



    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['bower', 'copy', "ngAnnotate", 'concat', 'cssmin', 'uglify']);

};