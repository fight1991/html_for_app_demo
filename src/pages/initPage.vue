<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import bgImg from '@/assets/imgs/init-screen.png';
export default {
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
<div class="box" @click="next">
  <van-image
    width="100vw"
    height="100vh"
    fit="fill"
    position="bottom"
    :src="bgImg"
  />
</div>
</template>
<style lang="less" scoped>
  .box {
    width: 100%;
    height: 100%;
  }
</style>