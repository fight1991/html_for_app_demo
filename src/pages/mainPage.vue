<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
   setup(props, { emit }){
    const router = useRouter();
    const currentTab = ref(0);
    const pages = ['home', 'work', 'message', 'mine', 'maxview']
    // 下一页
    const goPage = (index) => {
      let page = pages[index];
      currentTab.value = index;
      router.push(`/main/${page}`);
    };
    return {
      currentTab,
      goPage
    };
  }
}
</script>
<template>
  <div class="box">
    <div class="content">
      <router-view/>
    </div>
    <div class="nav-bottom">
      <div class="middile" @click="goPage(4)">
        <img src="@/assets/imgs/home-1-search.png" alt="">
      </div>
      <div :class="{'tab': true, 'active': currentTab === 0}" @click="goPage(0)">
        <i class="iconfont icon-home"></i>
      </div>
      <div :class="{'tab': true, 'active': currentTab === 1}" @click="goPage(1)">
        <i class="iconfont icon-work"></i>
      </div>
      <div class="tab"></div>
      <div :class="{'tab': true, 'active': currentTab === 2}" @click="goPage(2)">
        <i class="iconfont icon-message"></i>
      </div>
      <div :class="{'tab': true, 'active': currentTab === 3}" @click="goPage(3)">
        <i class="iconfont icon-mine"></i>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .box {
    padding-bottom: 70px;
  }
  .content {
    height: calc(100vh - 70px);
    overflow-y: auto;
    background-color: #fff;
  }
  .iconfont {
    font-size: 26px;
    color: #6399EF;
    transition: all .4s;
  }
  .active {
    .iconfont {
      color: #fff;
      font-size: 28px;
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
    align-items: stretch;
    .tab {
      flex: 1;
      text-align: center;
      line-height: 70px;
    }
  }
  .middile {
    position: absolute;
    left: 50%;
    width: 77px;
    transform: translate(-50%, -50%);
    top: 10px;
  }
</style>