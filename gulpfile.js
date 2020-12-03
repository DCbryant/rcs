const gulp = require('gulp');
const ts = require('gulp-typescript');


const paths = {
  dest: {
    esm: 'dist/esm',
    cjs: 'dist/cjs'
  },
  styles: "src/**/*.scss",
  scripts: ["src/**/*.{ts,tsx}", "!src/**/*.example.{ts,tsx}"]
}

function compileCJS () {
  return compile()
}

function compileESM () {
  return compile(true)
}

function compile (isEsm) {
  const {dest, scripts} = paths
  return gulp.src(scripts)
             .pipe(
               ts({
                outDir: "dist",
                target: "es5",
                module: isEsm ? "esnext" : "commonjs",
                declaration: true,
                jsx: "react",
                moduleResolution: "node",
                allowSyntheticDefaultImports: true
               })
             )
             .pipe(gulp.dest(isEsm ? dest.esm : dest.cjs))
}

function copyScss () {
  return gulp.src(paths.styles)
             .pipe(gulp.dest(paths.dest.esm))
             .pipe(gulp.dest(paths.dest.cjs))
}

const build = gulp.parallel(copyScss, compileCJS, compileESM)
exports.build = build

exports.default = build