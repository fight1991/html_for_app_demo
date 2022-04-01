<script>
import { reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const router = useRouter();
    const store = useStore();
    const problem = ref('');
    const name = ref('');
    const currentValue = ref('');
    // 返回按钮
    const onClickLeft = () => {
      history.back();
    }
    // 保存按钮
    const onClickRight = () => {
      store.commit('addFlowData', {
        name,
        problem
      })
      onClickLeft();
    }
    return {
      name,
      problem,
      onClickLeft,
      onClickRight
    };
  }
}
</script>
<template>
  <div class="box">
    <van-nav-bar
      title="添加业务流程信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field v-model="name" label="流程名称" placeholder="请输入"/>
      <van-field v-model="problem" type="textarea" row="4" placeholder="调研分析，涉及业务领域，分析存在问题"/>
    </van-cell-group>
  </div>
</template>
<style lang="less" scoped>
.box {
  height: 100%;
  background-color: #fff;
}
.item-line {
    text-align: center;
    padding: 6px 0;
    background-color: #ccc;
  }
</style>
  