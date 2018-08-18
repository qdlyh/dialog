# 基于微信弹窗组件
使用方法：组件内引入或者在main.js全局注册组件
例如： 
提示框
<Dialog :popup="popup" :text="text"></Dialog>
单选框
<Dialog title="标题" @ok="Onaffirm()" :dialogs="dialog">
    <p slot="text">我是单选框</p>
</Dialog>
选择框
<Dialog titles="标题" @ok="Onaffirm()" @cancel="Oncancel()" :dialogs="dialogs">
    <p slot="texts">我是选择框</p>
</Dialog>
在vue中watch来修改显示时间即可
例如
watch: {
  popup: {
    handler(obj) {
      if (this.popup) {
        setTimeout(() => {
          this.popup = false;
        }, 1000)
      }
    },
    deep: true
  },
}
