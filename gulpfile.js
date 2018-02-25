const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');

const config = {
    devBaseUrl: 'http://localhost',
    port: 3000,
    paths: {
        html: './src/*.html',
        dist: './dist',
    }
}

gulp.task('connect', () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], () => {
    gulp
        .src('dist/index.html')
        .pipe(open({ url: `${config.devBaseUrl}:${config.port}/` }));

});

gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['open', 'html', 'watch']);