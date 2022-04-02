<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
  },
  setup(props, { emit }){
    const router = useRouter();

    // 下一页
    const next = (values) => {
      router.push('/main')
    };

    return {
      next,
    };
  }
}
</script>
<template>
<div class="box">
  
  <div class="buttons">
    <div class="button-left">Skip</div>
    <div class="button-right" @click="next">
      <img src="@/assets/imgs/splash-6-Path.png" alt="">
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>

.box {
  transition: all .8s;
  height: 100vh;

  background-color: #fafafa;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  
}
.map {
  width: 80%;
  flex: 1;
  background: rgba(0,0,0,0.00);
  border: 3px solid #3762cc;
  border-radius: 14px;
  overflow: hidden;
  margin-top: 20px;
}
.location-title {
  font-size: 24px;
  height: 34px;
  padding: 15px 0;
  color: #3762cc;
  letter-spacing: 0.67px;
}
.location-detail {
  display: flex;
  align-items: center;
  width: 80%;
  box-sizing: border-box;
  padding-left: 15px;
  height: 66px;
  background: #E9F0FA;
  border-radius: 13px;
  font-size: 16px;
  color: #3762cc;
  border-radius: 13px;
}
.location-left {
  width: 18px;
  margin-right: 15px;
}
.location-right {
}
.buttons {
    display: flex;
    justify-content: space-between;
    margin:20px 0 30px;
    width: 80%;

    .button-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 175px;
      height: 61px;
      padding-right: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #3762cc;
    }
    .button-left {
      width: 100px;
      height: 61px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background-color: #C3CFE2;
      color: #f7f9fb;
      font-weight: 700;
      img {
        width: 34px;
      }
    }
  }


</style>