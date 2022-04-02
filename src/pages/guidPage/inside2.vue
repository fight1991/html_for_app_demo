<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(props, { emit }){
    const router = useRouter();
    
    const currentTheme = ref(false);
    const fontValue = ref(4);
    const onChange = (value) => {
      console.log(value)
      // fontValue.value = value;
      
    }
    const switchActive = () => {
      currentTheme.value = !currentTheme.value;
    }
    // 返回
    const prevBtn = () => {
      emit('changePage', 0)
    }
    // 下一页
    const next = (values) => {
      emit('changePage', 2)
    };
    return {
      fontValue,
      next,
      prevBtn,
      currentTheme,
      onChange,
      switchActive
    };
  }
}
</script>
<template>
<div :class="{'box':true, 'black-style': currentTheme}">
  <div class="top" style="height: 51px"></div>
  <div class="bottom">
    <div class="text-box" :style="{'font-size': 24 + fontValue + 'px'}">
      <div class="text">Set your text</div>
    </div>
    <div class="text-content">
      <div class="title" :style="{'font-size': 20 + fontValue + 'px'}">Responsibilities</div>
      <div class="content" :style="{'font-size': 10 + fontValue + 'px'}">Tells about educational manuscripts. You don’t need a particularly obvious voice tone, but you need to have a friendly narration.</div>
    </div>
    <div class="group-box">
      <!-- 滑动条 -->
      <div class="slide-box">
        <div class="little-t">T</div>
        <nut-range
          v-model="fontValue"
          :inactive-color="currentTheme ? '#A5A5A5': '#FFEA92'"
          :active-color="currentTheme ? '#A5A5A5': '#FFEA92'"
          min="0"
          max="8"
          step="0.1"
          :hidden-tag="true"
          :hidden-range="true"
          @change="onChange">
          <template #button>
            <div class="custom-button">
              <img v-if="!currentTheme" src="@/assets/imgs/splash-6-circle.png" alt="">
              <img v-else src="@/assets/imgs/splash-8-circle.png" alt="">
            </div>
          </template>
        </nut-range>
        <div class="big-t">T</div>
      </div>
      <div class="switch-box">
        <div :class="{'switch-btn': true, 'switch-direction': currentTheme}" @click="switchActive">
          <img v-if="!currentTheme" style="width:43px" src="@/assets/imgs/splash-6-circle.png" alt="">
          <img v-else style="width:43px" src="@/assets/imgs/splash-8-circle.png" alt="">

        </div>
        <div class="switch-text">Colour Blindness</div>
      </div>
      <div class="buttons">
        <div class="button-left" @click="prevBtn">Back</div>
        <div class="button-right" @click="next">
          <img v-if="!currentTheme" src="@/assets/imgs/splash-6-Path.png" alt="">
          <img v-else src="@/assets/imgs/splash-8-Path.png" alt="">
        </div>
      </div>
    </div>
  </div>
  

</div>
</template>
<style lang="scss" scoped>
.box {
  transition: all .8s;
}
.custom-button {
  padding-top: 5px;
  width: 43px;
}
.black-style {
  background-color: #000000!important;
  .bottom {
    background-color: #1F1F1F;
  }
  .button-right {
    background-color: #FAFAFA;
  }
  .button-left {
    background-color: #D6D6D6;
    color: #454545;
  }
  .switch-box {
    .switch-btn {
      background-color: #A5A5A5;
    }
  }
}
.bottom {
  transition: all .8s;
  border-radius: 45px 45px 0 0;
  background-color: $primary-color;
  height: calc(100vh - 51px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.text-box {
  font-family: FranklinGothic URW, FranklinGothic URW-Demi;
  font-weight: Demi;
  text-align: center;
  color: #fafafa;
  letter-spacing: 0.97px;
}
.text-content {
  .title {
    font-size: 20px;
    font-weight: 800;
    text-align: left;
    color: #f7f9fb;
    margin-bottom: 30px;
  }
  .content {
    width: 279px;
    font-size: 14px;
    font-weight: Book;
    text-align: left;
    color: #f7f9fb;
    line-height: 25px;
    letter-spacing: 0.75px;
  }
}
.switch-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FAFAFA;
  font-size: 20px;
  font-weight: 700;
  .switch-btn {
    width: 75px;
    height: 36px;
    margin-right: 16px;
    border-radius: 18px;
    background-color: #D6DCE5;
  }
  .switch-direction {
    img {
      float: right;
    }
  }
}

.group-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.slide-box {
  display: flex;
  width: 90vw;
  color: #fafafa;
  margin: 0 auto;
  align-items: center;
  .little-t {
    font-size: 35px;
    padding: 0 15px;
  }
  .big-t {
    font-size: 80px;
    padding: 0 15px 0 10px;
  }
}
.buttons {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin:30px 0;
}
.button-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 175px;
  height: 61px;
  padding-right: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #EAA97D;
}
.button-left {
  width: 100px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #F0F5FE;
  color: #3762cc;
  font-weight: 700;
  img {
    width: 34px;
  }
}
.black-style {
  color: #fafafa;
}
.button {
  width: 224px;
  height: 61px;
  background: #f0f5fe;
  color: #3762cc;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
}
</style>