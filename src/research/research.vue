<script>
import { ref } from 'vue';
import Head from '@/components/head';
export default {
  components: {
    Head
  },
  setup(){
    const active = ref(0);
    const themeVars = {
      sidebarSelectedBorderColor: '#1989fa'
    };
    return { active, themeVars };
  }
}
</script>
<template>
  <div class="box">
    <!-- 头部区域 -->
    <Head></Head>
    <!-- 头部以下区域 -->
    <div class="remain">
      <div class="remain-box">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .box {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .head {
    margin-bottom: 8px;
  }
  .remain {
    display: flex;
    flex: 1;
    overflow: hidden;
    .remain-box {
      height: 100%;
      width: 100%;
      overflow-y: auto;
    }
  }
</style>
  