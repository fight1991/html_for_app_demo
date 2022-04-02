<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
   setup(props, { emit }){
    const router = useRouter();
    const currentTab = ref(0);
    // 下一页
    const next = (values) => {
      router.push('/account')
    };

    return {
      next,
      currentTab
    };
  }
}
</script>
<template>
  <div class="box">
    <div class="content"></div>
    <div class="nav-bottom">
      <div :class="{'tab': true, 'active': currentTab === 0}">
        <i class="iconfont icon-home"></i>
      </div>
       <div :class="{'tab': true, 'active': currentTab === 1}">
        <i class="iconfont icon-work"></i>
      </div>
       <div :class="{'tab': true, 'active': currentTab === 2}">
        <i class="iconfont icon-message"></i>
      </div>
       <div :class="{'tab': true, 'active': currentTab === 3}">
        <i class="iconfont icon-mine"></i>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .box {
    padding-bottom: 70px;
  }
  .iconfont {
    font-size: 26px;
    color: #6399EF;
  }
  .active {
    .iconfont {
      color: #fff;
    }
  }
  .nav-bottom {
    height: 70px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    background: #3762cc;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>