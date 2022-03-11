// 该文件用于创建Vuex中最为核心的store

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";

Vue.use(Vuex);
// 准备actions-用于响应组件中的动作
const actions = {
    // add(context, value) {
    //     context.commit('ADD', value);
    // },
    // dec(context, value) {
    //     context.commit('DEC', value);
    // },
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value);
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value);
        }, 500)
    }
}
// 准备mutations-用于操作数据（state）
const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    DEC(state, value) {
        state.sum -= value;
    }
}
// 准备state-用于存储数据
const state = {
    sum: 0, // 当前和为零
    school:'清华大学',
    subObject:'人文科学'
}
// 用户对state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions, mutations, state,getters
})