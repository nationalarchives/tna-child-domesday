module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Sass configuration
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            }
        },
        uglify: {
            options: {
                banner: ''
            },
            target: {
                src: ['js/main.js'],
                dest: 'js/main.min.js'
            }
        },
        // Grunt watch tasks
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
            },
            uglify: {
                files: ['js/main.js'],
                tasks: ['uglify']
            }
        }
    });

    // Load the plugins that provide the tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);

};