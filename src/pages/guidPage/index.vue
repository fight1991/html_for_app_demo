<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Inside1 from './inside1.vue';
import bgImg from '@/assets/imgs/init-screen.png';
export default {
  components: {
    Inside1,
  },
  setup(){
    const router = useRouter();
    const next = (values) => {
      router.push('/guid');
    };
    
    const value = ref(40);
    const onChange = (value) => {

    };
    return {
      value,
      onChange,
      next,
      bgImg
    };
  }
}
</script>
<template>
<div class="box">
  <van-swipe class="my-swipe" indicator-color="white">
    <van-swipe-item>
      <Inside1/>
    </van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
  </van-swipe>
  <!-- <nut-range v-model="value" @change="onChange"></nut-range> -->
</div>
</template>
<style lang="scss" scoped>
.box {
  
  width: 100vw;
  background-color: #2448A2;
}
.my-swipe {
  height: 100vh;;
}
</style>