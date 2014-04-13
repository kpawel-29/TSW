module.exports = function(grunt) {
    "use strict";
    grunt.loadNpmTasks("grunt-bower-task");

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "app/lib",
                    layout: "byType",
                    install: true,
                    verbose: true,
                    cleanTargetDir: false,
                    cleanBowerDir: true
                }
            }
        }
    });
}
