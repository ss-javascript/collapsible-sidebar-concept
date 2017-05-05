"use strict";

module.exports = function(Grunt)
{
	var bowerPath = "./bower_components";
	var sourcePath = "./src";
	var distPath = "./dist";
	var distCssPath = (distPath + "/css");
	var distJsPath = (distPath + "/js");

	Grunt.initConfig({

		// Concat
		concat: {
			options: { separator: "; \n" },
			vendor: {
				src: [(bowerPath + "/jquery/dist/jquery.min.js")],
				dest: (distJsPath + "/vendor.js")
			},
			app: {
				src: [
					(sourcePath + "/js/components/collapsible-menu.js"),
					(sourcePath + "/js/app.js")
				],
				dest: (distJsPath + "/app.js")
			}
		},

		// Sass
		sass: {
			options: { sourcemap: "none", style: "compressed", update: true },
			app: {
				files: { "./dist/css/app.css": "./src/sass/style.loader.sass" }
			}
		},

		// Concat CSS
		concat_css: {
			vendor: {
				src: [(bowerPath + "/reset-css/reset.css")],
				dest: (distCssPath + "/vendor.css")
			}
		},

		// Watch
		watch: {
			options: {},
			app: {
				files: (sourcePath + "/**/*"),
				tasks: ["default"]
			}
		}
	});

	Grunt.loadNpmTasks("grunt-contrib-concat");
	Grunt.loadNpmTasks("grunt-contrib-sass");
	Grunt.loadNpmTasks("grunt-contrib-watch");
	Grunt.loadNpmTasks("grunt-concat-css");

	Grunt.registerTask("default", ["concat:app", "sass:app"]);
	Grunt.registerTask("vendor", ["concat:vendor", "concat_css:vendor"]);
}