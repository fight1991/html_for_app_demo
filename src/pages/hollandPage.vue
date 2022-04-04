<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(props, { emit }){
    const router = useRouter();

    // 返回
    const prevBtn = () => {
      router.go(-1);
    } 
    // 页面跳转
    const next = (values) => {
      router.push('/location');
    };
    const list = ref([
      {
        title: '1. Are you interested in assembling and repairing electrical appliances or toys?'
      },
      {
        title: '2. Is repairing bicycles an activity you are interested in?'
      },
      {
        title: '3. Is making things with wood an activity you are interested in?'
      },
    ])
    return {
      list,
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
    <div class="form-content">
      <div class="form-title">Holland test</div>
      <div class="form-list">
        <div class="form-list-item" v-for="item in list" :key="item">
          <div class="item-title">{{item.title}}</div>
          <div class="item-select">
            <div class="item-left">A</div>
            <div class="item-right">Yes</div>
          </div>
          <div class="item-select">
            <div class="item-left">B</div>
            <div class="item-right">No</div>
          </div>
        </div>
      </div>
    </div>
    <div class="group-box">
      <div class="skip">Save for later</div>
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
  height: 100vh;
  background-color: $primary-color;
}

.bottom {
  transition: all .8s;
  border-radius: 45px 45px 0 0;
  background-color: $primary-color;
  height: calc(100vh - 51px);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  
}
.form-content {
  padding: 0 20px 30px;
  background-color: #fff;
  color: #3762CC;
  flex: 1;
  overflow-y: scroll;
  .form-title {
    font-size: 35px;
    color: #3762cc;
    text-align: center;
    padding: 20px 0;
  }
  .item-title {
    font-size: 15px;
  }
  .item-select {
    font-size: 10px;
    background-color: #eaf0fd;
    display: flex;
    margin: 10px 0;
    align-items: center;
    .item-left {
      width: 21px;
      height: 21px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fafaff;
      background-color: #fff;
      background: #3762cc;
      border-radius: 6px;
    }
    .item-right {
      padding: 0 10px;
    }
  }
  
}

.group-box {
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 30px 30px 0;
  box-sizing: border-box;
  .skip {
    width: 150px;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-self: flex-end;
    justify-content: center;
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
      img {
        width: 35px;
      }
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