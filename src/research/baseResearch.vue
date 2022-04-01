<script>
import { reactive, ref, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { formatDate } from '@/utils'
export default {
  setup(){
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth();
    let day = nowDate.getDate();
    const yearArr = [year, year-1, year-2];
    const currentYearIndex = ref(0);
    const store = useStore();
    const router = useRouter();
    const text = ref('');
    const showPicker = ref(false);
    const currentDate = ref('');
    const selectDefaultDate = ref(new Date(year, month, day));
    const selectDate = (value) => {
      let tempDate = new Date(value);
      currentDate.value = formatDate(tempDate, 'yyyy-MM-dd');
      showPicker.value = false;
    }
    const cancelDate = () => {
      showPicker.value = false;
    }
    const pickerClick = () => {
      showPicker.value = true;
    }
    const baseForm = reactive({
      money: '',
      industry: '',
      direction: '',
      checked: '1',
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
      licen: '', // 行业地位
    })
    const tempIncomeForm = {
      income: '',
      cost: '',
      import: '',
      export: ''
    }
    const incomeFormArr = ref([{...tempIncomeForm}, {...tempIncomeForm}, {...tempIncomeForm}])
    // 跳转到添加学历信息页面
    const addDegreePage = () => {
      router.push('/degreePage')
    }
    const degreeList = computed(() => store.state.degreeList)
    const deleteBtn = (index) => {
      store.commit('deleteDegreeData', index)
    }
    const themeVars = {
      tabsDefaultColor: '#1989fa'
    };
    // 提交按钮
    const submitBtn = () => {
      store.commit('changeStatus', 'detail');
      history.back();
    }
    return {
      text,
      showPicker,
      currentDate,
      cancelDate,
      selectDate,
      pickerClick,
      addDegreePage,
      submitBtn,
      selectDefaultDate,
      degreeList,
      deleteBtn,
      themeVars,
      currentYearIndex,
      yearArr,
      incomeFormArr,
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
    <div class="item-line">企业基本发展情况</div>
    <van-cell-group>
      <van-field :model-value="currentDate" label="成立时间" readonly placeholder="请选择" @click-input="pickerClick"/>
      <van-field v-model="money" label="注入资金" placeholder="请输入"/>
      <van-field v-model="industry" label="所属行业" placeholder="请输入"/>
      <van-field v-model="direction" label="主要产品及业务方向" placeholder="请输入" type="textarea" rows="3"/>
      <van-field v-model="licen" label="行业地位" placeholder="请输入"/>
    </van-cell-group>
    <div class="left-title">
      <div class="title-l">
        学历结构
      </div>
      <div class="title-r">
        <van-icon name="add-o" size="1.5rem" @click="addDegreePage"/>
      </div>
    </div>
    <!-- 学历结构区域 -->
    <div class="study-box">
      <div class="empty" v-if="degreeList.length==0">
        <van-divider>请添加</van-divider>
      </div>
      <van-swipe-cell v-for="(item, index) in degreeList">
        <van-cell :border="true" :title="item.degree" :value="item.num + '人'" />
        <template #right>
          <van-button square type="danger" text="删除" @click="deleteBtn(index)"/>
        </template>
      </van-swipe-cell>
    </div>
    <!-- 运营模式区域 -->
    <div class="left-title">
      <div class="title-l">
        运营模式
      </div>
    </div>
    <van-radio-group v-model="checked">
      <van-cell-group>
        <van-cell title="重资产企业" clickable @click="checked = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="轻资产企业" clickable @click="checked = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="item-line">企业经营情况</div>
    <div class="left-title">
      <div class="title-l">近三年经营情况</div>
    </div>
    <div class="tab-box">
      <van-config-provider :theme-vars="themeVars">
        <van-tabs v-model:active="currentYearIndex" shrink type="card">
          <van-tab v-for="(item, index) in yearArr" :title="item + '年'">
            <div class="tab-content-box">
              <van-cell-group>
                <van-field v-model="incomeFormArr[index]['income']" label="收入(万元)" placeholder="请输入"/>
                <van-field v-model="incomeFormArr[index]['cost']" label="成本" placeholder="请输入"/>
                <van-field v-model="incomeFormArr[index]['import']" label="进口" placeholder="请输入"/>
                <van-field v-model="incomeFormArr[index]['export']" label="出口" placeholder="请输入"/>
              </van-cell-group>
            </div>
          </van-tab>
        </van-tabs>
      </van-config-provider>
    </div>
    <van-cell-group>
      <van-field v-model="fixMoney" label="固定资产" placeholder="请输入"/>
      <van-field v-model="flowMoney" label="流动资金" placeholder="请输入"/>
      <van-field v-model="debt" label="负债" placeholder="请输入"/>
      <van-field v-model="providers" label="上游供货商" placeholder="请输入" type="textarea" rows="3"/>
      <van-field v-model="custom" label="下游主要客户" placeholder="请输入" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="item-line">企业技术水平情况</div>
    <div class="left-title">
      <div class="title-l">企业技术水平与创新能力</div>
    </div>
    <van-cell-group>
      <van-field v-model="device" placeholder="生产设备情况(先进性、自动化程度、设备联网情况、工艺水平、制造能力)" type="textarea" rows="3"/>
      <van-field v-model="output" placeholder="单位产出情况" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="left-title">
      <div class="title-l">企业自动化水平</div>
    </div>
    <van-cell-group>
      <van-field v-model="auto" placeholder="企业各个控制系统的建设分布情况、系统集成现状及能力" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="left-title">
      <div class="title-l">研发创新情况</div>
    </div>
    <van-cell-group>
      <van-field v-model="innovate" placeholder="请输入" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="item-line">企业管理水平</div>
    <div class="left-title">
      <div class="title-l">管理团队</div>
    </div>
    <van-cell-group>
      <van-field v-model="manager" placeholder="管理团队介绍" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="left-title">
      <div class="title-l">信息化管理情况</div>
    </div>
    <van-cell-group>
      <van-field v-model="infomation" placeholder="信息化管理制度、机构、人员配备情况" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="left-title">
      <div class="title-l">认证情况</div>
    </div>
    <van-cell-group>
      <van-field v-model="certificate" placeholder="请输入" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="item-line">企业信息安全情况</div>
    <div class="left-title">
      <div class="title-l">信息安全防护技术手段(含软硬件)</div>
    </div>
    <van-cell-group>
      <van-field v-model="infomationSafe" placeholder="请输入" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="left-title">
      <div class="title-l">信息安全制度、措施、突发事件应急处置等管理情况</div>
    </div>
    <van-cell-group>
      <van-field v-model="safeRaw" placeholder="请输入" type="textarea" rows="3"/>
    </van-cell-group>
    <div class="btn-box">
      <van-button round block type="primary" @click="submitBtn">
        提交
      </van-button>
    </div>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-datetime-picker
        @confirm="selectDate"
        @cancel="cancelDate"
        v-model="selectDefaultDate"
        type="date"
        title="选择年月日"/>
    </van-popup>
    
  </div>
</template>
<style lang="less" scoped>
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
  .tab-box {
    padding-top: 8px;
  }
  .tab-content-box {
    padding: 8px 0;
  }
  .btn-box {
    padding: 30px;
  }
</style>
  