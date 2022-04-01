<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(props, { emit }){
    const router = useRouter();
    const next = (values) => {
      emit('changePage', 2)
    };
    
    const value = ref(40);
    const onChange = (value) => {

    }
    return {
      value,
      next,
      onChange
    };
  }
}
</script>
<template>
<div class="box">
  <div class="top" style="height: 51px"></div>
  <div class="bottom">
    <div class="text-box">
      <div class="text">Set your text</div>
    </div>
    <div class="text-content">
      <div class="title">Responsibilities</div>
      <div class="content">Tells about educational manuscripts. You don’t need a particularly obvious voice tone, but you need to have a friendly narration.</div>
    </div>
    <div class="group-box">
      <!-- 滑动条 -->
      <div class="slide-box">
        <div class="little-t">T</div>
        <nut-range
          v-model="value"
          inactive-color="#FFEA92"
          active-color="#FFEA92"
          :hidden-tag="true"
          :hidden-range="true"
          @change="onChange">
        </nut-range>
        <div class="big-t">T</div>
      </div>
      <div class="switch-box">

      </div>
      <div class="buttons">
        <div class="button-left">Back</div>
        <div class="button-right"></div>
      </div>
    </div>
  </div>
  

</div>
</template>
<style lang="scss" scoped>
.bottom {
  border-radius: 45px 45px 0 0;
  background-color: $primary-color;
  height: calc(100vh - 51px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.text-box {
  font-size: 35px;
  font-family: FranklinGothic URW, FranklinGothic URW-Demi;
  font-weight: Demi;
  text-align: center;
  color: #fafafa;
  letter-spacing: 0.97px;
}
.text-content {
  .title {
    font-size: 25px;
    font-weight: 800;
    text-align: left;
    color: #f7f9fb;
    margin-bottom: 30px;
  }
  .content {
    width: 279px;
    font-size: 18px;
    font-weight: Book;
    text-align: left;
    color: #f7f9fb;
    line-height: 25px;
    letter-spacing: 0.75px;
  }
}
.slide-box {
  display: flex;
  width: 90vw;
  color: #fafafa;
  margin: 0 auto;
  align-items: center;
  .little-t {
    font-size: 35px;
    padding: 0 5px;
  }
  .big-t {
    font-size: 80px;
    padding: 0 5px;
  }
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