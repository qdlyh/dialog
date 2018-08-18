# 基于微信弹窗组件
## 浏览地址，请在手机模式查看
* https://qdlyh.github.io/dialog/index.html#/
使用方法：组件内引入或者在main.js全局注册组件
例如： 
* 提示框
```html
<Dialog :popup="popup" :text="text"></Dialog>
```
* 单选框
```html
<Dialog title="标题" @ok="Onaffirm()" :dialog="dialog">
  <p slot="text">单选框</p>
</Dialog>
```
* 选择框
```html
<Dialog titles="标题" @oks="Onaffirms()" @cancel="Oncancel()" :dialogs="dialogs">
  <p slot="texts">多选框</p>
</Dialog>
```
## 在父组件中watch来修改提示框显示时间<br/>
* 例如
```javascript
watch: {
  //隐藏提示框
    popup() {
        if (this.popup) {
            setTimeout(() => {
                this.popup = false;
            }, 1000);
        }
    }
}
```
