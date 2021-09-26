// 该文件用于创建Vuex中最为核心的store

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";

Vue.use(Vuex);
// 准备actions-用于响应组件中的动作
const actions = {
    add(miniStore,value){
        miniStore.commit('ADD',value);
    }
}
// 准备mutations-用于操作数据（state）
const mutations = {
    ADD(state,value){
        state.sum+=value;
    }
}
// 准备state-用于存储数据
const state = {
    sum: 0 // 当前和为零
}

export default new Vuex.Store({
    actions, mutations, state
})