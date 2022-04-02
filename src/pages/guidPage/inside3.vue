<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(props, { emit }){
    const router = useRouter();

    // 返回
    const prevBtn = () => {
      emit('changePage', 1)
    }
    // 跳转下一页面
    const next = (values) => {
      router.push('/holland');
    };
    return {
      next,
      prevBtn,
    };
  }
}
</script>
<template>
<div class="box">
  <div class="top" style="height: 51px"></div>
  <div class="bottom">
    <div class="text-box">
      Do you want to do a holland test to know what jobs are you looking for?
    </div>
    <div class="group-box">
      <div class="skip">Skip</div>
      <div class="buttons">
        <div class="button-left" @click="prevBtn">Back</div>
        <div class="button-right" @click="next">
          <img src="@/assets/imgs/splash-6-Path.png" alt="">
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
  width: 315px;
  font-size: 35px;
  letter-spacing: 0.97px;
}


.group-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  .skip {
    width: 125px;
    height: 50px;
    box-sizing: border-box;
    padding: 0 20px;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: #fafafa;
    background-color: #CFD2D6;
    border-radius: 8px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    margin:20px 0 30px;
    width: 100%;

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
  }
}



</style>