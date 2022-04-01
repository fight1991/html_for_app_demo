<script>
import { reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const columns = ['初中及以下', '中专/中技', '高中', '大专', '本科', '硕士', '博士'];
    const router = useRouter();
    const store = useStore();
    const num = ref('');
    const showPicker = ref(false);
    const currentValue = ref('');
    const confirmBtn = (value) => {
      currentValue.value = value;
      showPicker.value = false;
    }
    const cancelBtn = () => {
      showPicker.value = false;
    }
    const pickerClick = () => {
      showPicker.value = true;
    }
    // 返回按钮
    const onClickLeft = () => {
      history.back();
    }
    // 保存按钮
    const onClickRight = () => {
      store.commit('addDegreeData', {
        degree: currentValue,
        num: num
      })
      onClickLeft();
    }
    return {
      num,
      columns,
      showPicker,
      currentValue,
      cancelBtn,
      confirmBtn,
      pickerClick,
      onClickLeft,
      onClickRight
    };
  }
}
</script>
<template>
  <div class="box">
    <van-nav-bar
      title="添加学历信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field :model-value="currentValue" label="学历" readonly placeholder="请选择" @click-input="pickerClick"/>
      <van-field v-model="num" label="人数" placeholder="请输入"/>
    </van-cell-group>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        title="学历"
        :columns="columns"
        @confirm="confirmBtn"
        @cancel="cancelBtn"
      />
    </van-popup>
    
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
  