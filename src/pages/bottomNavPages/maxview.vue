<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
   setup(props, { emit }){
    const router = useRouter();
    // 下一页
    const next = (values) => {
    };
    const tabList = ['Design', 'Network', 'Brand'];
    const activeTab = ref(1);
    const themeVars = {
      tabFontSize: '35px',
      tabsLineHeight: '47px',
      tabLineHeight: '47px'

    };
    return {
      themeVars,
      next,
      tabList,
      activeTab
    };
  }
}
</script>
<template>
  <div class="content-box">
    <div class="top-arrow"><img src="@/assets/imgs/home-2-up.png" alt=""></div>
    <div class="tab-list">
      <div class="tab-item" v-for="item in tabList" :key="item">{{item}}</div>
    </div>
    <div class="jobs">58 jobs</div>
    <div class="swipe">
      <div class="swipe-item">
        <div class="card">
          <div class="left"><img src="@/assets/imgs/wangyi.png" alt=""></div>
          <div class="right">
            <div class="one">Radio Poresenter <span class="price">6-8k</span></div>
            <div class="two">
              Full time - Remote
              <span>Nanjing</span>
            </div>
            <div class="button">
              <div class="button1">Discover More</div>
              <div class="button2"><img src="@/assets/imgs/message.png" alt=""></div>
            </div>
          </div>
        </div>
        <div class="text-line">
          <div class="text-block">
            <div class="title-1">Responsibilities</div>
            <div class="title-2">Tells about educational manuscripts. You don’t need obvious voice tone, but you need to have a friendly narration.</div>
          </div>
          <div class="suitability">
            <div class="first-title">Suitability</div>
            <div class="colors">
              <div class="color"></div>
              <div class="color"></div>
              <div class="color"></div>
              <div class="chizi"><img src="@/assets/imgs/home-2-logo.png" alt=""></div>
            </div>
            <div class="texts">
              <div class="texts-t">Normal</div>
              <div class="texts-t">Good</div>
              <div class="texts-t">Great</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-arrow {
  width: 37px;
  margin: 0 auto;
  padding-top: 30px;
}
.swipe {
  position: relative;
  display: flex;
  justify-content: center;

}
.jobs {
  text-align: center;
  color: #4380e2;
  padding-bottom: 35px;
}
.swipe-item {
  position: absolute;
  width: 85%;
  height: 372px;
  background:url('../../assets/imgs/home-2-bg.png') no-repeat center;
  background-size: cover;
  border-radius: 18px;
  overflow: hidden;
  .card {
    height: 150px;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    background: url('../../../assets/imgs/home-1-bg.png') no-repeat center;
    background-size: cover;
    border-radius: 16px;
    .left {
      img {
        width: 45px;
      }
      padding-right: 20px;
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: #ffffff;
      .one {
        // height: 24px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price {
          font-size: 30px;
          font-weight: 700;
          text-align: left;
          color: #f9a7a7;
          -webkit-text-stroke: 1px #fff;
        }
      }
      .two {
        height: 16px;
        opacity: 0.9;
        font-size: 12px;
        span {
          padding-left: 20px
        }
      }
      .button {
        display: flex;
        color: #3762cc;
        flex: 1;
        align-items: flex-end;
        .button1 {
          flex: 1;
          border-radius: 12px;
          font-size: 14px;
          display: flex;
          height: 43px;
          background-color: #fff;
          justify-content: center;
          align-items: center;
        }
        .button2  {
          margin-left: 20px;
          img {
            width: 43px;
          }
        }
      }
    }
    
  }
  .text-line {
    padding:10px 20px;
    color: #fff;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .suitability {
    text-align: left;
    font-size: 14px;
    padding: 30px 0;
    .texts {
      display: flex;
      font-size: 18px;
      .texts-t {
        flex: 1;
        text-align: center;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
    .colors {
      display: flex;
      position: relative;
      padding: 10px 0;
      .chizi {
        width: 40px;
        position: absolute;
        left: 68%;
        top: 0;
      }
      .color {
        flex: 1;
        height: 11px;
        &:nth-child(2) {
          background-color: #ffea92;
        }
        &:first-child {
          background-color:#f9a7a7;
          border-radius: 6px 0px 0px 6px;
        }
        &:nth-child(3) {
          background: #a7f9c7;
          border-radius: 0px 6px 6px 0px;

        }
      }
    }
  }
  .text-block {
    
    .title-1 {
      height: 20px;
      font-size: 14px;
      font-weight: 700;
      text-align: left;
    }
    .title-2 {
      font-size: 12px;
      text-align: left;
      line-height: 18px;
      letter-spacing: 0.5px;
    }
  }
}
.tab-list {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 25px;
  .tab-item {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    color: #D8DADC;
    &:nth-child(2) {
      color: #1f1f1f;
      padding-bottom: 5px;
    }
    &:first-child, &:last-child {
      position: absolute;
    }
    &:first-child {
      left: 0;
      transform: translateX(-40%);
    }
    &:last-child {
      right: 0;
      transform: translateX(40%);
    }
  }
}
</style>