<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Head from '@/components/head';
export default {
  components: {
    Head
  },
  setup(){
    const active = ref(0);
    const router = useRouter();
    const themeVars = {
      sidebarWidth: '140px',
      sidebarSelectedBorderColor: '#1989fa'
    };
    onMounted(() => {
    })
    return { active, themeVars };
  },
  
}
</script>
<template>
  <div class="box">
    <!-- 头部区域 -->
    <Head></Head>
    <!-- 头部以下区域 -->
    <div class="remain">
      <!-- 左侧菜单区域 -->
      <div class="left">
        <div class="left-top">
          <van-grid :column-num="2">
            <van-grid-item icon="comment-o" text="消息" />
            <van-grid-item icon="setting-o" text="设置" />
          </van-grid>
        </div>
        <div class="left-bottom">
          <van-config-provider :theme-vars="themeVars">
            <van-sidebar v-model="active">
              <van-sidebar-item title="调研任务" />
            </van-sidebar>
          </van-config-provider>
        </div>
        
      </div>
      <!-- 右边内容区域 -->
      <div class="content-box">
        <div class="task-list">
          <div class="history-list">任务列表</div>
          <div class="history-btn">
            <i class="iconfont icon-lishi"></i>
          </div>
        </div>
        <div class="empty-ele"></div>
        <div class="exist-box">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .box {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .head {
    margin-bottom: 8px;
  }
  .remain {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .task-list {
    display: flex;
    padding: 10px 5px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
  .empty-ele {
    height: 8px;
    background-color: #f5f5f5;
  }
  .history-list {
    color: #4c4c4c;
  }
  .history-btn {
    padding: 0 5px;
    .iconfont {
      color: #1989fa;
    }
  }
  .left {
    // padding: 10px;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    .left-top {
      background-color: #fff;
      margin-bottom: 8px;
    }
    .left-bottom {
      background-color: #fff;
      flex: 1;
      overflow-y: auto;
    }
  }
  .content-box {
    flex: 1;
    // height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .exist-box {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
  