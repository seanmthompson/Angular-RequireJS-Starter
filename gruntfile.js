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
					'public/js/app.libs.min.js': [
						'public/js/libs/lodash/lodash.js',
						'public/js/libs/angular/angular.js',
						'public/js/libs/angular-animate/angular-animate.min.js',					
						'public/js/libs/angular-sanitize/angular-sanitize.min.js',
						'public/js/libs/angular-ui-router/release/angular-ui-router.min.js',
					]
				}
			}
		},
		
		less: {
		  development: {
			options: {
			  paths: ["public/css"],
			  compress: true,
			  sourceMap: true
			},
			files: {
				"public/css/app.css": "public/css/app.less"			
			}
		  }
		},

		watch: {    
			less: {
				files: ['public/css/*.less', 'public/css/**/*.less'],
				tasks: ['less']
			}
		}
    });

    grunt.registerTask('default', []);

};