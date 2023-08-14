import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'IMAGES',
        message: "Error: <%= error.message%>"
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    //make webp
    .pipe(
              webp()

    )
    .pipe(
     
        app.gulp.dest(app.path.build.images)
      )

    // minimize images
    .pipe(
      
        app.gulp.src(app.path.src.images)
        )
    .pipe(

        app.plugins.newer(app.path.build.images)
    )
    .pipe(
      
        imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3 // from 0 to 7
      })
      )
    .pipe(app.gulp.dest(app.path.build.images))
    //copy svg
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
}