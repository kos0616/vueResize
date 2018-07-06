## vue使用protype處理eventListener的問題

目前的成功案例是在main.js使用mixin，子組件使用$root.screenWidth來取得目前的螢幕寬
$root指向main.js
screenWidth為mixin設定好的固定名稱

考量到往後可能會出現無法使用這招的狀況，因此想要以其他的方式實現全域變數

在看見moment.js使用$protype後，深覺此法非常適合，無奈找不到方法讓值從eventListener吐出來，只能在console.log中哀號

### sample

[前往sample網址](https://kos0616.github.io/vueResize/).
