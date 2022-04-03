<script>
export default {
  props: ['data'],
  setup(props){
    console.log(props.data)
    return {
      data: props.data
    }
  }
}
</script>
<template>
  <div class="card">
    <div class="left"><img :src="data.iconPath" alt=""></div>
    <div class="right">
      <div class="one">{{data.title}}</div>
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
</template>
<style lang="scss" coped>
  .card {
    width: 85%;
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
        height: 24px;
        font-size: 18px;
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
</style>