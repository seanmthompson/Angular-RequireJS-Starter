module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			options: {
				mangle: false,
                sourceMap: true
			},
			build: {
				files: {
					'js/app.libs.min.js': [
						'js/libs/lodash/lodash.js',
						'js/libs/angular/angular.js',
						'js/libs/jquery/dist/jquery.min.js',
						'js/libs/angular-animate/angular-animate.min.js',					
						'js/libs/angular-sanitize/angular-sanitize.min.js',
						'js/libs/angular-ui-router/release/angular-ui-router.min.js',
					]
				}
			}
		},
		
		less: {
		  development: {
			options: {
			  paths: ["css"],
			  compress: true,
			  sourceMap: true
			},
			files: {
				"css/app.css": "css/app.less"			
			}
		  }
		},

		watch: {    
			less: {
				files: ['css/*.less', 'css/**/*.less'],
				tasks: ['less']
			}
		}
		
    });

    grunt.registerTask('default', []);

};