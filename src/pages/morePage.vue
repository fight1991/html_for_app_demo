<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';


export default {
  setup(props, { emit }){
    const router = useRouter();
    // 下一页
    const next = (values) => {
      router.push('/more')
    };
  
    return {
      next,
    };
  }
}
</script>
<template>
  <div class="box">
    <div class="content-box">
      <div class="back"><img src="@/assets/imgs/Slash-cart-detail–1-return.png" alt=""></div>
      <div class="title">Google - Radio Poresenter</div>
      <div class="input-box">
        <div class="input-item">
          <div class="icon"><img src="@/assets/imgs/Calendar.png" alt=""></div>
          <span class="text">05.12.2020</span>
        </div>
        <div class="input-item">
          <div class="icon"><img src="@/assets/imgs/Time-Circle.png" alt=""></div>
          <span class="text">09:00 AM - 09:10 AM</span>
        </div>
        <div class="input-item">
          <div class="icon"><img src="@/assets/imgs/Location.png" alt=""></div>
          <span class="text last">Brooklyn NO 6 Plaza</span>
        </div>
      </div>
      <div class="map"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: #fff;
}
.content-box{
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 85%;
  margin: 0 auto;
  padding-bottom: 30px;
  .title {
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    color: #101010;
    padding: 30px 0;
  }
  .map {
    width: 100%;
    height: 300px;
    margin: 20px 0;
    background-color: #fafafa;
    border-radius: 14px;
  }
}
.back {
  width: 45px;
  padding-top: 30px;
}
.input-item {
  height: 70px;
  background: #f7f9fb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  color: #101010;
  letter-spacing: 0.67px;
  margin-bottom: 20px;
  .icon {
    padding-right: 60px;
  }
  .last {
    opacity: .5;
    font-size: 12px;
  }
}

</style>