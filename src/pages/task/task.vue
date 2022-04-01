<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup(){
    const router = useRouter();
    const loading = ref(false);
    const store = useStore();
    const onRefresh = () => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    };
    const gridClick = (route) => {
      router.push(route)
    }
    const currentStatus = computed(() => store.state.stepStatus)
    return {
      gridClick,
      loading,
      onRefresh,
      currentStatus
    }
  }
}
</script>
<template>
  <van-pull-refresh v-model="loading" style="height:100%;overflow-y:auto" @refresh="onRefresh" success-text="刷新成功">
    <div class="box">
      <van-divider v-if="currentStatus==='done'">暂无调研任务</van-divider>
      <van-grid v-else column-num="2">
        <van-grid-item v-show="currentStatus==='base'" @click="gridClick('/baseResearch')">
          <div class="title-line">江阴联合铁钢有限公司</div>
          <div class="title-line">基础调研</div>
        </van-grid-item>
        <van-grid-item v-show="currentStatus==='detail'" @click="gridClick('/detailResearch')">
          <div class="title-line">江阴联合铁钢有限公司</div>
          <div class="title-line">详细调研</div>
        </van-grid-item>
      </van-grid>
    </div>
  </van-pull-refresh>
</template>
<style lang="less" scoped>
.box {
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.title-line {
  text-align: center;
  font-size: 14px;
}
</style>
  