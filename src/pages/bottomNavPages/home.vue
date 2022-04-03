<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import CardItem from './components/cardItem.vue';
export default {
  components: {
    CardItem
  },
  setup(props, { emit }){
    const router = useRouter();
    // 下一页
    const next = (values) => {
    };
    const tabList = ['Design', 'Network', 'Brand', 'Development', 'Other', 'Other2']
    const cardList = [
      {
        id: '111',
        iconName: '',
        title: '',
        subtitle: '',
        address: ''
      }, {
        id: '112',
        iconName: '',
        title: '',
        subtitle: '',
        address: ''
      }, {
        id: '113',
        iconName: '',
        title: '',
        subtitle: '',
        address: ''
      }
    ]
    // 当前tab页
    const activeTab = ref(1);
    const themeVars = {
      tabFontSize: '20px',
    };
    return {
      next,
      activeTab,
      tabList,
      cardList,
      themeVars
    };
  }
}
</script>
<template>
  <div class="content-box">
    <div class="welcome">
      <div class="welcome-left">
        <div class="one-text">Welcome</div>
        <div class="two-text">Mr Zhang</div>
      </div>
      <div class="welcome-right">
        <img src="@/assets/imgs/home-1-news.png" alt="">
      </div>
    </div>
    <div class="input-search">Search</div>
    <div class="tab-list">
      <van-config-provider :theme-vars="themeVars">
        <van-tabs
          line-width="0px"
          line-height="0px"
          animated
          v-model:active="activeTab"
          title-active-color="#1f1f1f"
          title-inactive-color="#D2D2D2">
          <van-tab v-for="item in tabList" :title="item" :key="item">
          </van-tab>
        </van-tabs>
      </van-config-provider>
    </div>
    <div class="inside-box">
      <div class="warp-box" :style="{'width': '600%', 'transform':'translateX(-'+activeTab*100+'vw)'}">
        <div class="wrap" v-for="item in tabList" :key="'wrap' + item">
          <div v-for="item in cardList" :key="item.id" style="margin-bottom:15px">
            <CardItem></CardItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.welcome {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  width: 80%;
  .welcome-right {
    width: 45px;
  }
  .welcome-left {
    color: #3762cc;
    .one-text {
      font-size: 20px;
    }
    .two-text {
      font-size: 30px;
    }
  }
}
.input-search {
  height: 60px;
  background: #F8FAFC;
  border-radius: 14px;
  width: 80%;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #c3cfe2;
  text-indent: 2em;
  line-height: 60px;
  margin-bottom: 20px;
}
.tab-list {
  width: 100%;
  margin-bottom: 20px;
}
.inside-box {
  height: 100%;
  width: 100%;
  flex: 1;
  overflow: hidden;
  .warp-box {
    height: 100%;
    transition: all .5s ease;
  }
  .wrap {
    float: left;
    width: 100vw;
    height: 100%;
    overflow-y: auto;
  }
}

</style>