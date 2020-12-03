## button

button组件是一个比较简单的组件，可以添加size，btnType，disabled等等属性，主要难点在于btnType有很多种，如果一个个去写的话会很麻烦，这时候可以借助scss的遍历和变量以及mixin来写，button既可以是button标签又可以是a标签，在类型定义上会麻烦一点

```scss
// 变量
$theme-colors: (
  "default":    ($white,$gray-7, $neu-whiteshadow1,$neu-whiteshadow2),
  "primary":    ($primary,$white,$neu-blueshadow1,$neu-blueshadow2),
  "secondary":  ($secondary,$white,#777,#a1a1a1),
  "success":    ($success,$white,#62b234,#84f046),
  "info":       ($info,$white,$neu-infoshadow1,$neu-infoshadow2),
  "warning":    ($warning,$gray-7,#d9c934,#ffff46),
  "danger":     ($danger,$white,#c33b3c,#f97677),
  "light":      ($light,$gray-7,#d5d5d5, #fff),
  "dark":       ($dark,$white,#393939,#777),
);

// 遍历
@each $key, $val in $theme-colors {
  &-#{$key} {
    @include button-style(nth($val, 1), nth($val, 2));
  }
}

// mixin

@mixin button-style (
  $background-color,
  $color,
  $border-color: lighten($color, 10%),
  $hover-background-color: lighten($background-color, 7.5%),
  $hover-border-color: lighten($border-color, 10%),
  $hover-color: $color
) {
  background-color: $background-color;
  color: $color;
  &:hover {
    background-color: $hover-background-color;
    color: $hover-color;
  }
  &:focus {
    background-color: $hover-background-color;
    color: $hover-color;
  }
  &[disabled] {
    background-color: $background-color;
    border-color: $border-color;
    color: $color;
  }
}
```

写完组件还可以写写单元测试，新建__test__目录以及在该目录下新建button.test，button的功能比较简单，所以可以测测样式是否正确，后面比较麻烦的组件还得测试功能

## TODO 涟漪效果