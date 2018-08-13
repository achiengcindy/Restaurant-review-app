  /*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/
module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
              options: {
                engine: 'im',
                sizes: [{
                    name: "small",
                    width: 320,
                },
                {
                    name: 'medium',
                    width: 640
                 },
                 {
                     name: "large",
                     width: 1024,
                     suffix: "_x2",
                     quality: 60
      
                }]
              },
              files: [{
                expand: true,
                src: ['*.{gif,jpg,png}'],
                /* cwd is 'current working directory' */
                cwd: 'img/', 
                dest: 'images/'
              }]
            }
        },
        clean: {
            dev: {
              src: ['images'],
            },
          },
        
          /* Generate the images directory if it is missing */
          mkdir: {
            dev: {
              options: {
                create: ['images']
              },
            },
          },
    });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};




