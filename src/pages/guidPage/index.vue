<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Inside1 from './inside1.vue';
import Inside2 from './inside2.vue';
import Inside3 from './inside3.vue';
import bgImg from '@/assets/imgs/init-screen.png';
export default {
  components: {
    Inside1,
    Inside2,
    Inside3
  },
  setup(){
    const router = useRouter();
    const next = (values) => {
      router.push('/guid');
    };
    // 跳转到某一页
    const changePage = (index) => {
      console.log(index);
      vanSwipe.value.swipeTo(index)
    }
    // 获取swipe Dom元素
    const vanSwipe = ref(null);
    const onChange = (value) => {

    };
    return {
      onChange,
      next,
      bgImg,
      vanSwipe,
      changePage
    };
  }
}
</script>
<template>
<div class="outer">
  <van-swipe class="my-swipe" :touchable="false" indicator-color="white" ref="vanSwipe">
    <van-swipe-item>
      <Inside1 @changePage="changePage"/>
    </van-swipe-item>
    <van-swipe-item>
      <Inside2 @changePage="changePage"/>
    </van-swipe-item>
    <van-swipe-item>
      <Inside3 @changePage="changePage"/>
    </van-swipe-item>
    <van-swipe-item>
      第4页
    </van-swipe-item>
  </van-swipe>
  <!-- <nut-range v-model="value" @change="onChange"></nut-range> -->
</div>
</template>
<style lang="scss" scoped>
.outer {
  
  width: 100vw;
  background-color: #2448A2;
}
.my-swipe {
  height: 100vh;;
}
</style>