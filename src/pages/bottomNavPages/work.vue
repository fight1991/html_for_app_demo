<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import CardItem from './components/cardItem.vue';
import wangyiImg from '@/assets/imgs/wangyi.png';
import baiduImg from '@/assets/imgs/baidu.png';

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
  
    // 当前tab页
    const activeTab = ref(1);
    const themeVars = {
      tabFontSize: '20px',
    };
    return {
      next,
      activeTab,
      tabList,
      themeVars
    };
  }
}
</script>
<template>
  <div class="content-box">
    <div class="welcome">
      <div class="welcome-left">
        Trainings
      </div>
      <div class="welcome-right">
        <img src="@/assets/imgs/home-1-news.png" alt="">
      </div>
    </div>
    <div class="input-search">Search</div>
    <div class="recommend">
      <div class="text">Recommended trainings</div>
      <img src="@/assets/imgs/Project-full-time-cart–1-Filter.png" alt="">
    </div>
    <div class="detail">
      <div class="one">NetEase</div>
      <div class="two">Radio Presenter training</div>
      <div class="little-map">
        <div class="left"></div>
        <div class="right">
          <div class="line">
            <img src="@/assets/imgs/Calendar.png" alt="">
            <span>Sep 20 - Dec 20</span>
          </div>
          <div class="line">
            <img src="@/assets/imgs/Time-Circle.png" alt="">
            <span>9:00 - 12:00 AM</span>
          </div>
          <div class="line last">
            <img src="@/assets/imgs/Location.png" alt="">
            <span>Fenghuang garden road 65</span>
          </div>
        </div>
      </div>
      <div class="black-block">
        <div class="text">
          Later employment
        </div>
        <div class="block-item">
          <div class="left">
            <img src="@/assets/imgs/wangyi.png" alt="">
          </div>
          <div class="right">
            <div class="true-txt">
              <div class="one-1">Radio Presenter</div>
              <div class="two-1">Full time - Remote <span>Nanjing</span></div>
            </div>
          </div>
        </div>
        <div class="block-item">
          <div class="left">
            <img src="@/assets/imgs/wangyi.png" alt="">
          </div>
          <div class="right">
            <div class="true-txt">
              <div class="one-1">Radio Presenter</div>
              <div class="two-1">Full time - Remote <span>Nanjing</span></div>
            </div>
          </div>
        </div>
        <div class="button">More</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: 0 auto;
}
.welcome {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  width: 100%;
  .welcome-right {
    width: 45px;
  }
  .welcome-left {
    color: #3762cc;
    font-weight: 700;
    font-size: 30px;
  }
}
.input-search {
  height: 60px;
  background: #F8FAFC;
  border-radius: 14px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #c3cfe2;
  text-indent: 2em;
  line-height: 60px;
  margin-bottom: 20px;
}
.recommend {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #3762cc;
  padding-bottom: 20px;
  img {
    width: 20px;
  }
}
.detail {
  height: 393px;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  background: url('../../assets/imgs/Project-full-time-cart-1-bg.png') no-repeat;
  background-size: cover;
  padding: 20px;
  .one {
    height: 16px;
    opacity: 0.2;
    font-size: 12px;
    font-weight: 700;
    color: #101010;
  }
  .two {
    height: 24px;
    font-size: 18px;
    font-weight: 700;
    color: #101010;
  }
}
.little-map {
  display: flex;
  margin: 20px 0;
  .left {
    width: 90px;
    height: 90px;
    border-radius: 8px;
    border: 3px solid $primary-color;
    margin-right: 15px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .line {
      display: flex;
      color: #1f1f1f;
      letter-spacing: 0.58px;
      font-size: 14px;
      &.last {
        font-size: 10px;
      }
      img {
        width: 20px;
        margin-right: 20px;
      }
    }
  }
}
.black-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .text {
    height: 16px;
    font-size: 12px;
    width: 125px;
    margin-bottom: 5px;
    font-weight: 700;
    text-align: left;
    color: #101010;
  }
  .block-item {
    width: 125px;
    height: 35px;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: #1f1f1f;
    border-radius: 8px;
    display: flex;
    .left {
      width: 25px;
      margin-right: 5px;
    }
    .right {
      flex: 1;
      display: flex;
      position:relative;
      justify-content: space-between;
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
      overflow: hidden;
      .true-txt {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
      }
      .one-1 {
        font-size: 10px;
        transform-origin: 0 0;
        transform: scale(.7);
        font-weight: 700;
        color: #ffffff;
      }
      .two-1 {
        opacity: 0.9;
        font-size: 6px;
        transform-origin: 0 0;
        color: #ffffff;
        transform: scale(.5);

        span {
          padding-left: 5px;
        }
      }
    }
  }
  .button {
    width: 200px;
    height: 50px;
    margin-top: 15px;
    background: #3762cc;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
  }
}

</style>