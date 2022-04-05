<script>
import { reactive, ref, toRefs, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
   setup(props, { emit }){
    const router = useRouter();
    const route = useRoute();
    const currentTab = ref(0);
    const pages = ['home', 'work', 'message', 'mine', 'maxview']
    // 下一页
    const goPage = (index) => {
      let page = pages[index];
      currentTab.value = index;
      isMax.value = false;
      router.push(`/main/${page}`);
    };
    const isMax = ref(false);
    const max = () => {
      if (route.name === 'main-maxview') {
        router.go(-1);
        isMax.value = !isMax.value;
      } else {
        if (route.name === 'main-home') {
          router.push('/main/maxview');
          isMax.value = !isMax.value;
        }
      }
    }
    onMounted(() => {
      if (route.name === 'main-maxview') {
        isMax.value = true;
        currentTab.value = -1;
      } 
    })
    watch(
      () => route.name,
      (n, o) => {
        let tag = route.name.split('-');
        currentTab.value = pages.indexOf(tag[1]);
        console.log('监听', route.name)
      }
    )
    return {
      currentTab,
      goPage,
      isMax,
      max
    };
  }
}
</script>
<template>
  <div class="box">
    <div class="content">
      <router-view v-slot="{Component}">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </div>
    <div class="nav-bottom">
      <div :class="{'middile':true, 'middle-s':true, 'isMax': isMax}" @click="max">
        <img src="@/assets/imgs/home-1-search.png" alt="">
      </div>
      <div :class="{'middile':true, 'middle-m':true, 'isMax': !isMax}" @click="max">
        <img src="@/assets/imgs/home-2-search.png" alt="">
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
    z-index: 999;
    .tab {
      flex: 1;
      text-align: center;
      line-height: 70px;
    }
  }
  .middile {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 10px;
    z-index: 1;
    transition: all .5s;
    transform-origin:center;
    z-index: 99;

  }
  .middle-s {
    width: 77px;
    width: 77px;
    z-index: 2;
  }
  .middle-m {
    width: 107px;
    height: 107px;
  }
  .isMax {
    width: 0;
    height: 0;
    overflow: hidden;
  }
</style>