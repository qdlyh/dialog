<template>
    <div>
        <!-- 对话提示 -->
        <div class="dialog" v-show="popup">
            <div class="dialog-box">
                <P>{{text}}</P>
            </div>
        </div>

        <!-- 单选框 -->
        <transition name="fade">
            <div class="weui-box" v-show="dialog">
                <div class="weui-mask"></div>
                <div class="weui-dialog">
                    <div class="weui-dialog__hd">
                        <strong>{{ title }}</strong>
                    </div>
                    <div class="weui-dialog__bd">
                        <slot name="text"></slot>
                    </div>
                    <div class="weui-dialog__ft">
                        <p class="weui-dialog__btn" @click="Onok()">确认</p>
                    </div>
                </div>
            </div>
        </transition>

        <!-- 对话框 -->
        <transition name="fade">
            <div class="weui-box" v-show="dialogs">
                <div class="weui-mask"></div>
                <div class="weui-dialog">
                    <div class="weui-dialog__hd">
                        <strong>{{ titles }}</strong>
                    </div>
                    <div class="weui-dialog__bd">
                        <slot name="texts"></slot>
                    </div>
                    <div class="weui-dialog__ft">
                        <!-- <p class="weui-dialog__btn" @click="weuiDialog = !weuiDialog">取消</p> -->
                        <p class="weui-dialog__btn" @click="Oncancel()">取消</p>
                        <p class="weui-dialog__btn" @click="Onaffirm()">确认</p>
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>
<script>
export default {
    props: {

        /* 提示 */
        popup: {
            type: Boolean,
            default: false
        },

        text: {
            type: String,
            default: '提示内容'
        },

        /* 单选对话框 */
        dialog: {
            type: Boolean,
            default: false
        },

        title: {
            type: String,
            default: '单选对话标题'
        },

        /* 双选对话框 */
        dialogs: {
            type: Boolean,
            default: false
        },

        titles: {
            type: String,
            default: '双选对话标题'
        },
    },
    data() {
        return {
        }
    },

    methods: {
        Onok() {
            this.$emit('ok')
        },
        Oncancel() {
            this.$emit('cancel');
        },
        Onaffirm() {
            this.$emit('ok');
        },
    },
}
</script>
<style lang="scss" scoped>
.dialog {
  position: relative;
  .dialog-box {
    position: fixed;
    transition: opacity 0.5s;
    z-index: 9999;
    padding: 5px 10px;
    height: 40px;
    top: 50%;
    left: 50%;
    line-height: 40px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    background: #000;
    opacity: 0.7;
    border-radius: 10px;
    font-size: 15px;
    p {
      color: #fff;
    }
  }
}

.weui-box {
  .weui-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: opacity 0.5s;
    background: #000;
    opacity: 0.6;
  }

  .weui-dialog {
    position: fixed;
    transition: opacity 0.5s;
    z-index: 5000;
    width: 70%;
    // max-width: 300px;
    // height: 25%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    .weui-dialog__hd {
      // padding: 1.3em 1.6em .5em;
      height: 60px;
      line-height: 60px;
      strong {
        font-size: 18px;
      }
    }
    .weui-dialog__bd {
      padding: 0 16px 8px;
      min-height: 50px;
      line-height: 25px;
      font-size: 15px;
      word-wrap: break-word;
      word-break: break-all;
      color: #999;
    }
    .weui-dialog__ft {
      position: relative;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      &::after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d5d5d6;
        -webkit-transform: scaleY(0.5);
      }
    }
    .weui-dialog__btn {
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      height: 50px;
      line-height: 50px;
      color: #3cc51f;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      position: relative;
      &::after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid #d5d5d6;
        -webkit-transform-origin: 0 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


