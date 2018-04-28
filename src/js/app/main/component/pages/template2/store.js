import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        group: {
            namespaced: true,
            state: {
                formData: '',
                isShow: false,
                isLoading: false
            },
            mutations: {
                /**
                 * 改变滑出层的状态
                 */
                toggleSlide(state, payload){
                    state.isShow = payload;
                },
                /**
                 * 改变loading的状态
                 */
                toggleLoading(state, payload){
                    state.isLoading = payload;
                },
                /**
                 * 改变表单数据
                 */
                updateFormData(state, payload){
                    state.formData = payload.formData;
                }
            }
        },
        news: {
            namespaced: true,
            state: {
                formData: {
                    type1: '',
                    type2: false,
                    type3: 1,
                    type4: 1
                },
                isShow: false,
                isLoading: false
            },
            mutations: {
                /**
                 * 改变滑出层的状态
                 */
                updateSlide(state, payload){
                    state.isShow = payload.isShow;
                },
                /**
                 * 改变loading的状态
                 */
                updateLoading(state, payload){
                    state.isLoading = payload.isLoading;
                },
                /**
                 * 改变表单数据
                 */
                updateFormData(state, payload){
                    state.formData = payload.formData;
                }
            },
            actions: {
                /**
                 * 获取列表项的详情，并且提交mutation改变state.formData，从而改变组件中表单的数据
                 */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                fetchData({commit}, payload){
                    commit('updateSlide', {
                        isShow: true
                    });

                    if (!payload){
                        commit('updateFormData', {
                            formData: {
                                type1: '',
                                type2: false,
                                type3: 1,
                                type4: 1
                            }
                        });
                        return;
                    }

                    commit('updateLoading', {
                        isLoading: true
                    });

                    setTimeout(()=>{
                        commit('updateFormData', {
                            formData: {
                                type1: '',
                                type2: false,
                                type3: 1,
                                type4: 1
                            }
                        });
                        commit('updateLoading', {
                            isLoading: false
                        });
                    }, 1000);
                }
            }
        }
    }
})
;
