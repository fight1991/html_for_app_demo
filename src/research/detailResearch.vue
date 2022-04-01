<script>
import { reactive, ref, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { formatDate } from '@/utils'
export default {
  setup(){
    const store = useStore();
    const router = useRouter();
    const cancelDate = () => {
      showPicker.value = false;
    }
    const baseForm = reactive({
      money: '',
      industry: '',
      direction: '',
      checked: '1',
      checked1: '1',
      fixMoney: '',
      flowMoney: '',
      debt: '',
      providers: '',
      custom: '',// 主要客户
      output: '', // 产出情况
      device: '', // 设备情况
      auto: '', // 自动化情况
      innovate: '', // 创新情况
      manager: '', // 管理团队
      certificate: '', // 认证情况
      infomation: '', // 信息化管理情况
      infomationSafe: '', // 信息安全
      safeRaw: '', // 信息安全制度
    })
    // 跳转到添加学历信息页面
    const addPage = () => {
      router.push('/flowPage')
    }
    // 调研流程
    const flowList = computed(() => store.state.flowList)
    const deleteBtn = (index) => {
      store.commit('deleteFlowData', index)
    }
    // 提交按钮
    const submitBtn = () => {
      store.commit('changeStatus', 'done');
      history.back();
    }
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };
    return {
      cancelDate,
      addPage,
      submitBtn,
      flowList,
      deleteBtn,
      afterRead,
      ...toRefs(baseForm)
    };
  }
}
</script>
<template>
  <div class="box">
    <van-cell-group>
      <van-field label="公司名称" model-value="江阴联合铁钢有限公司" readonly />
    </van-cell-group>
    <div class="item-line">照片采集</div>
    <div class="left-title">
      <div class="title-l">门头照</div>
    </div>
    <!-- 照片采集区域 -->
    <div class="picture-box">
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="left-title">
      <div class="title-l">生产环境</div>
    </div>
    <!-- 照片采集区域 -->
    <div class="picture-box">
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="item-line">智能系统采集</div>
    <div class="left-title">
      <div class="title-l">企业管理类</div>
    </div>
    <van-radio-group v-model="checked">
      <van-cell-group>
        <van-cell title="SCM(供应链管理系统)" clickable @click="checked = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="ERP(进销存管理系统)" clickable @click="checked = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
        <van-cell title="PLM(项目管理系统)" clickable @click="checked = '3'">
          <template #right-icon>
            <van-radio name="3" />
          </template>
        </van-cell>
        <van-cell title="CRM(客户信息管理系统)" clickable @click="checked = '4'">
          <template #right-icon>
            <van-radio name="4" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="left-title">
      <div class="title-l">生产类</div>
    </div>
    <van-radio-group v-model="checked1">
      <van-cell-group>
        <van-cell title="SCM(供应链管理系统)" clickable @click="checked1 = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="item-line">企业总体业务流程</div>
    <div class="left-title">
      <div class="title-l">业务流程调研</div>
      <div class="title-r">
        <van-icon name="add-o" size="1.5rem" @click="addPage"/>
      </div>
    </div>
    <div class="study-box">
      <div class="empty" v-if="flowList.length==0">
        <van-divider>请添加</van-divider>
      </div>
      <van-swipe-cell v-for="(item, index) in flowList">
        <div class="card-item">
          <van-cell :border="true" title="流程名称" :value="item.name" />
          <van-field :model-value="item.problem" type="textarea" readonly row="4"></van-field>
        </div>
        <template #right>
          <van-button square type="danger" text="删除" @click="deleteBtn(index)" class="delete-button"/>
        </template>
      </van-swipe-cell>
    </div>
    <div class="btn-box">
      <van-button round block type="primary" @click="submitBtn">
        提交
      </van-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.picture-box {
  background-color: #fff;
  padding: 10px;
}
  .empty {
    background-color: #fff;
    padding: 1px 0;
  }
  .item-line {
    text-align: center;
    padding: 6px 0;
    background-color: #ccc;
  }
  .left-title {
    padding: 6px 16px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-box {
    padding: 30px;
  }
  .delete-button {
    height: 100%;
  }
  .card-item {
    margin-bottom: 10px;
  }
</style>
  