var gulp = require('gulp');
var aglio = require('aglio');
var browserSync = require('browser-sync').create();
var options = {
    theme: 'default',
    themeTemplate: 'triple'
};

gulp.task('doc', ['render'], function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch('api.apib', ['render']);
});

gulp.task('render', function () {
    aglio.renderFile('c:/assets/campus2/doc/api.apib', 'c:/assets/campus2/doc/api.html', options, function (err, warnings) {
        if (err) return console.log(err);
        // if (warnings) console.log(warnings);

        browserSync.reload();
    });
});

gulp.task('default', ['doc']);