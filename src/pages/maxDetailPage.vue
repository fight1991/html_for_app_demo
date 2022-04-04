<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';


export default {
  setup(props, { emit }){
    const router = useRouter();
    // 返回
    const prev = () => {
      router.go(-1);
    }
    // 下一页
    const next = (values) => {
      router.push('/contact')
    };
  
    return {
      next,
      prev
    };
  }
}
</script>
<template>
  <div class="content-box">
    <div class="inside">
      <div class="top">
        <div class="back" @click="prev"><img src="@/assets/imgs/Slash-cart-detail–1-return.png" alt=""></div>
        <div class="logo">
          <img src="@/assets/imgs/wangyi.png" alt="">
        </div>
        <div class="back"><img src="@/assets/imgs/home-7-lab.png" alt=""></div>
      </div>
      <div class="title">Radio Poresenter</div>
      <div class="buttons">
        <div class="left">Full time</div>
        <div class="right">Remote</div>
      </div>
      <div class="text-block">
        <div class="title-1">Job description</div>
        <div class="title-2">As a member of NetEase Radio team, you’ll be part of a radio show team and work as a radio presenter.</div>
      </div>
      <div class="text-block">
        <div class="title-1">Responsibilities</div>
        <div class="title-2">Tells about educational manuscripts. You don’t need obvious voice tone, but you need to have a friendly narration.</div>
      </div>
    </div>
    <div class="bottom-btn">
      <div class="bottom-left" @click="next">Contact</div>
      <div class="bottom-right">
        <img src="@/assets/imgs/home-7-nav.png" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inside {
  width: 85%;
  margin: 0 auto;
}
.content-box {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 70px;
  overflow-y: auto;
  background-color: #fff;
  .bottom-btn {
    width: 85%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    display: flex;
    .bottom-left {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 59px;
      background: #3762cc;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
    }
    .bottom-right {
      width: 60px;
      margin-left: 10px;
    }
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    color: #101010;
    text-align: center;
    padding: 30px 0;
  }
  .text-block {
    padding-top: 30px;
    .title-1 {
      height: 20px;
      font-size: 15px;
      font-weight: 700;
      text-align: left;
      color: #101010;
    }
    .title-2 {
      opacity: 0.9;
      font-size: 12px;
      text-align: left;
      color: #1f1f1f;
      line-height: 18px;
      letter-spacing: 0.5px;
    }
  }
  .buttons {
    display: flex;
    .left,.right {
      height: 43px;
      border-radius: 12px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    .left {
      background: #1f1f1f;
      color: #fff;
    }
    .right {
      background: #FAFAFF;
      font-size: 12px;
      color: #D1D1D6;
    }
  }
  .top {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    img {
      width: 45px;
    }
    .logo {
      img {
        width: 100%;
      }
      width: 118px;
      background: #ffffff;
      border: 3px solid #d33b32;
      border-radius: 16px;
    }
  }
}


</style>