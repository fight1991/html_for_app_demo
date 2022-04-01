<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(props, { emit }){
    const router = useRouter();
    const next = (values) => {
      emit('changePage', 3)
    };
    
    const value = ref(40);

    return {
      value,
      next,
    };
  }
}
</script>
<template>
<div class="box">
  <div class="top" style="height: 51px"></div>
  <div class="bottom">
    <div class="text-box">
      <div class="text">Do you nead the</div>
      <div class="text">voice audio</div>
    </div>
    <div class="img">
      <img src="@/assets/imgs/splash-5-icon.png" alt="">
    </div>
    <div class="button" @click="next">No</div>
  </div>
  

</div>
</template>
<style lang="scss" scoped>
.bottom {
  border-radius: 45px 45px 0 0;
  background-color: $primary-color;
  height: calc(100vh - 51px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.text-box {
  font-size: 35px;
  font-family: FranklinGothic URW, FranklinGothic URW-Demi;
  font-weight: Demi;
  text-align: center;
  color: #fafafa;
  letter-spacing: 0.97px;
}
.img {
  width: 219px;
}
.button {
  width: 224px;
  height: 61px;
  background: #f0f5fe;
  color: #3762cc;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
}
</style>