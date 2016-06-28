const gulp = require('gulp');
const cp = require('child_process');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series('partials', gulp.parallel('other', 'webpack:dist')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));

gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

gulp.task('e2e-test', gulp.series('e2e-server', 'protractor'));

gulp.task('e2e-server', function () {
	return cp.exec('webdriver-manager start');
});

gulp.task('protractor', function () {
	return cp.exec('protractor src/tests/conf.js');
});

function reloadBrowserSync(cb) {
	browserSync.reload();
	cb();
}

function watch(done) {
	gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
	done();
}