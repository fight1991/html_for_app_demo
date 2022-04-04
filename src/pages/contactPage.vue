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
  <div class="outer">
    <div class="content-box">
      <div class="top">
        <div class="left" @click="prev"><img src="@/assets/imgs/Slash-cart-detail–1-return.png" alt=""></div>
        <div class="right"><img src="@/assets/imgs/Group7.png" alt=""></div>
      </div>
      <div class="title">Mr Zhang</div>
      <div class="list-title">
        <div class="left-1">
          <div class="left-logo"><img src="@/assets/imgs/Profile-Notifications-1-logo.png" alt=""></div>
          <div class="able">Able</div>
        </div>
        <div class="text">2s ago</div>
      </div>
      <div class="last">Welcome to ABLE!</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.outer {
  height: 100vh;
  background: #fff;
}
.content-box {
  width: 85%;
  margin: 0 auto;
  .list-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    .left-1 {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #040415;
      .left-logo {
        width: 34px;
        margin-right: 15px;
      }
    }
  }
  .last {
    padding: 30px 0;
    font-size: 16px;
    text-align: left;
    color: #040415;
  }
  .title {
    height: 42px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #3762cc;
    letter-spacing: 0.83px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 20px;
    img {
      width: 45px;
    }
  }
}

</style>