import gulp from 'gulp';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';

function compile(watch) {
  const bundler = watchify(browserify('./main.jsx', { debug: true }).transform(babelify, { presets: ['es2015', 'react'] }));

  function rebundle() {
    bundler.bundle()
      .on('error', (err) => { console.error(err); })
      .pipe(source('build.js'))
      .pipe(gulp.dest('./'));
  }

  if (watch) {
    bundler.on('update', () => {
      console.log('bundling js...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('build', () => compile());

gulp.task('watch', () => watch());

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('default', ['browserSync', 'watch'], () => {
  gulp.watch('./index.html', ['reload']);
  gulp.watch('./build.js', ['reload']);
  gulp.watch('../src/*.*', ['reload']);
});
