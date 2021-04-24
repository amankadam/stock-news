import { sendMessageToBackgroundScript } from '@/common/localMessagePassing';
export default {
    namespaced: true,
    state: () => ({
       stockName: null,
       stockRelatedArticles: []
    }),
    mutations: {
        setStock(state,obj){
            state[obj.name] = obj.data;
        },
        setStockRelatedArticles(state,obj){
            state[obj.name] = obj.datal;
        }
    },
    actions: {
        async getStockNews({ commit }, data){
            try {
                const getStockDetails = await sendMessageToBackgroundScript({
                    action: 'callAPI',
                    functionToCall: 'getStockNews',
                    parameters: {
                        stockName: data.stock
                    }
                });
                commit("stock/setStockRelatedArticles",{
                    name: 'stockRelatedArticles',
                    data: data
                })
                console.log(getStockDetails);
            } catch( err) {
                throw Error(err);
            }
        },
        async setStock({ commit }, data) {
            console.log(data);
         commit("stock/setData",{
             name: "stockName",
             data: data
         })
        }
    },
    getters: {
       stockName(state){
           return state.stockName;
       } 
    }
}