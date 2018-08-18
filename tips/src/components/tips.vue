<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br/>
    <div class="tips" @click="btn()">提示框</div>
    <div class="tips" @click="btn1()">单选框</div>
    <div class="tips" @click="btn2()">多选框</div>
    <Dialog :popup="popup" :text="text"></Dialog>
    <Dialog title="标题" @ok="Onaffirm()" :dialog="dialog">
      <p slot="text">单选框</p>
    </Dialog>
    <Dialog titles="标题" @oks="Onaffirms()" @cancel="Oncancel()" :dialogs="dialogs">
      <p slot="texts">多选框</p>
    </Dialog>
  </div>
</template>

<script>
export default {
    name: "tips",
    data() {
        return {
            msg: "基于微信弹窗组件",
            popup: false,
            dialog: false,
            dialogs: false,
            text: ""
        };
    },
    methods: {
        //提示框
        btn() {
            this.popup = true;
            this.text = "我是提示框";
        },
        //单选框
        btn1() {
            this.dialog = true;
        },
        //多选框
        btn2() {
            this.dialogs = true;
        },
        //单选框
        Onaffirm() {
            this.dialog = false;
        },

        //多选框
        Onaffirms() {
            this.dialogs = false;
        },
        Oncancel() {
            this.dialogs = false;
        }
    },
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
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}
.tips {
    width: 90%;
    margin: 20px auto;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #454545;
    border: 1px solid #454545;
}
.tips:hover {
    background: #2980b9;
    background-image: -webkit-linear-gradient(top, #2980b9, #3498db);
    color: #ffffff;
}
</style>
