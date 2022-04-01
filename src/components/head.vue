<script>
import { onMounted, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Dialog } from 'vant';
export default {
  setup(){
    const router = new useRouter();
    const route = new useRoute();
    const back = () => {
      router.go(-1);
    }
    const home = () => {
      window.open('/', '_self');
    }
    const logout = () => {
      Dialog.confirm({
      title: '退出登录',
      message:
        '您确定要退出登录吗?',
      })
      .then(() => {
        window.open('/login', '_self');
      })
      .catch(() => {
        // on cancel
      });
    }
    onMounted(() => {})
    // 是否显示返回/home按钮
    const showBtn = computed(() => route.name === 'task');
    return {
      back,
      home,
      logout,
      showBtn
    }
  }
}
</script>
<template>
  <!-- 头部区域 -->
  <div class="head">
    <van-nav-bar title="工业企业智改数转诊断平台">
      <template #left>
        <div class="nav-btn-box" v-show="!showBtn">
          <div class="nav-btn-item" @click="back">
            <i class="iconfont icon-fanhui"></i>
          </div>
          <div class="nav-btn-item" @click="home">
            <i class="iconfont icon-shouye"></i>
          </div>
        </div>
      </template>
      <template #right>
        <div class="logout" @click="logout"><i class="log-out iconfont icon-logout"></i></div>
      </template>
    </van-nav-bar>
  </div>
</template>
<style lang="less" scoped>
  .head {
    margin-bottom: 8px;
  }
  .nav-btn-box {
    display: flex;
    align-items: center;
    
  }
  .iconfont {
    color: #1989fa;
    font-size: 18px;
    font-weight: bold;
  }
  .nav-btn-item {
    padding-right: 15px;
    color: #1989fa;
  }
  .logout {
    padding: 0 10px;
  }
  .log-out {
    color: #FF976A;
    font-size: 22px;
  }
</style>
  