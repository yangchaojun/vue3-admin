<template>
  <div class="login">
    <div class="login-mask"></div>
    <div class="login-form-wrap">
      <div class="login-form mx-6">
        <div class="login-form__content px-2 py-10">
          <header>
            <img :src="logo" class="mr-4" />
            <h1>{{ title }}</h1>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '/@/assets/images/logo.png'
import { useGlobSetting } from '/@/hooks/setting'
export default defineComponent({
  components: {},
  setup() {
    useGlobSetting()
    return {
      logo,
      title: 'xxx'
    }
  }
})
</script>

<style lang="less">
.login-form__locale {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
}

.login {
  position: relative;
  height: 100vh;
  background: url(../../../assets/images/login/login-bg.png) no-repeat;
  background-size: 100% 100%;

  &-mask {
    display: none;
    height: 100%;
    background: url(../../../assets/images/login/login-in.png) no-repeat;
    background-position: 30% 30%;
    background-size: 80% 80%;

    .respond-to(xlarge, { display: block;});
  }

  &-form {
    position: relative;
    bottom: 60px;
    width: 400px;
    background: @white;
    border: 10px solid rgba(255, 255, 255, 0.5);
    border-width: 8px;
    border-radius: 4px;
    background-clip: padding-box;
    .respond-to(xlarge, { margin: 0 120px 0 50px});

    &-wrap {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      width: 100%;
      height: 100%;
      // height: 90%;
      justify-content: center;
      align-items: center;
      .respond-to(xlarge, {
        justify-content: flex-end;
          });
    }

    &__content {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 60px 0 40px 0;
      border: 1px solid #999;
      border-radius: 2px;

      header {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          display: inline-block;
          width: 48px;
        }

        h1 {
          margin-bottom: 0;
          font-size: 24px;
          text-align: center;
        }
      }

      form {
        width: 80%;
      }
    }
  }
}
</style>
