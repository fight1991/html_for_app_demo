<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
  },
  setup(props, { emit }){
    const router = useRouter();

    // 下一页
    const next = (values) => {
      router.push('/main')
    };

    return {
      next,
    };
  }
}
</script>
<template>
<div class="box">
  <div class="icon">
    <img src="@/assets/imgs/Profile-Notifications-1-logo.png" alt="">
  </div>
  <div class="text">
    Sign up with an account to get the suitable jobs.
  </div>
  <div class="input-group">
    <div class="input-title">Disable ID</div>
    <div class="input-box"></div>
    <div class="input-title">Account name</div>
    <div class="input-box"></div>
    <div class="input-title">Password</div>
    <div class="input-box"></div>
  </div>
  <div class="buttons">
    <div class="button-left">Skip</div>
    <div class="button-right" @click="next">
      <img src="@/assets/imgs/splash-6-Path.png" alt="">
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>

.box {
  transition: all .8s;
  height: 100vh;
  color: #3762cc;
  background-color: #fafafa;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  
}
.text {
  width: 315px;
  height: 153px;
  font-size: 35px;
  text-align: center;
  color: #3762cc;
  letter-spacing: 0.97px;
}
.input-group {
  width: 80%;
  .input-title {
    height: 21px;
    padding-left: 10px;
    font-size: 16px;
    text-align: left;
  }
  .input-box {
    height: 61px;
    opacity: 0.12;
    background: #c3cfe2;
    border-radius: 13px;
  }
}
.icon {
  width: 50px;
  padding: 30px 20px;
  align-self: flex-start;
}
.buttons {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: flex-end;
    margin:20px 0 30px;
    width: 80%;
    .button-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 175px;
      height: 61px;
      padding-right: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #3762cc;
    }
    .button-left {
      width: 100px;
      height: 61px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background-color: #C3CFE2;
      color: #f7f9fb;
      font-weight: 700;
      img {
        width: 34px;
      }
    }
  }


</style>