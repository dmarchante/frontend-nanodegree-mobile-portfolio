module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 400,
                        suffix: '-mod',
                        quality: 85
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'views/images/',
                    dest: 'views/images-mod/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};