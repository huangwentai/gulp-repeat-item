# gulp-repeat-item

gulp 插件，循环输出item，适用于开发过程中一个商品组件要多次复制的情况，使代码更加美观更容易维护


## 安装

    npm install gulp-repeat-item --save-dev


## 使用

gulpfile.js:

```js
var gulp = require('gulp');
gulpRepeatItem = require('gulp-repeat-item');

gulp.task('default', function () {
  return gulp.src('./*.html')
    .pipe(gulpRepeatItem())
    .pipe(gulp.dest('./build/'));
});

```

html:

```html
<!--@@repeatItem(2) start-->
<div class="cube @@data{['eat1','bea','wine','game']}">
    <div class="word">
        <div class="img-w">
            <div class="img"><img src="@@data{['img/text-eat@3x.png','img/text-beautify@3x.png','img/text-drink@3x.png','img/text-game@3x.png']}" alt=""></div>
            <div class="w">food le parc</div>
        </div>
        <div class="t"><p>@@dataRandom{['(Monday)','(Tuesday)','(Wednesday)','(Thursday)','(Friday)','(Saturday)','(Sunday)']}</p></div>
        <div class="w2">Summer @@dataRandom{['Chill','Parent']} Out Busking</div>
    </div>
</div>
<!--@@repeatItem end-->
```

结果:

```html
<div class="cube eat1">
    <div class="word">
        <div class="img-w">
            <div class="img"><img src="img/text-eat@3x.png" alt=""></div>
            <div class="w">food le parc</div>
        </div>
        <div class="t"><p>(Wednesday)</p></div>
        <div class="w2">Summer Parent Out Busking</div>
    </div>
</div>

<div class="cube bea">
    <div class="word">
        <div class="img-w">
            <div class="img"><img src="img/text-beautify@3x.png" alt=""></div>
            <div class="w">food le parc</div>
        </div>
        <div class="t"><p>(Thursday)</p></div>
        <div class="w2">Summer Parent Out Busking</div>
    </div>
</div>
```

## 参数(暂无)

```js
.pipe(gulpHtmlVersion({
    
}))
```

参数列表

 * `@@repeatItem(2)` 数字2为要循环的个数
 * `@@data{[]}` 按顺序显示数组内的元素
 * `@@dataRandom{[]}` 随机显示数组内的元素
