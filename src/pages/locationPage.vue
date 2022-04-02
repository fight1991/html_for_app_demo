<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import GaodeMap from '@/pages/components/GaodeMap';
export default {
  components: {
    GaodeMap,
  },
  setup(props, { emit }){
    const router = useRouter();

    // 返回
    const prevBtn = () => {
      emit('changePage', 2)
    }
    // 下一页
    const next = (values) => {
      emit('changePage', 3)
    };

    return {
      next,
      prevBtn,
    };
  }
}
</script>
<template>
<div class="box">
  <div class="map">
    <!-- <img src="@/assets/imgs/" alt=""> -->
    <GaodeMap/>
  </div>
  <div class="buttons">
    <div class="button-left" @click="prevBtn">Back</div>
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

  background-color: #fafafa;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  
}

.buttons {
    display: flex;
    justify-content: space-between;
    margin:20px 0 30px;
    width: 100%;

    .button-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 175px;
      height: 61px;
      padding-right: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #3762CC;
    }
    .button-left {
      width: 100px;
      height: 61px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background-color: #F0F5FE;
      color: #3762cc;
      font-weight: 700;
      img {
        width: 34px;
      }
    }
  }


</style>