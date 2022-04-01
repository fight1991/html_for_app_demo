import { createStore } from 'vuex';
const store = createStore({
  state () {
    return {
      degreeList: [], // 存储学历信息
      flowList: [], // 业务流程调研
      stepStatus: 'base', // base基础调研, detail详细调研, done完成
    }
  },
  mutations: {
    // 增加学历信息
    addDegreeData (state, payload) {
      state.degreeList.push(payload);
    },
    // 删除学历信息
    deleteDegreeData(state, index) {
      state.degreeList.splice(index, 1);
    },
    // 增加流程
    addFlowData (state, payload) {
      state.flowList.push(payload);
    },
    // 删除流程
    deleteFlowData(state, index) {
      state.flowList.splice(index, 1);
    },
    changeStatus(state, status) {
      state.stepStatus = status;
    }
  }
});
export default store;
