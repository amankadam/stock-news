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
            state[obj.name] = obj.data;
        }
    },
    actions: {
        async getStockNews({commit,state}){
            try { 
                const getStockDetails = await sendMessageToBackgroundScript({
                    action: 'callAPI',
                    functionToCall: 'getStockNews',
                    parameters: {
                        stockName: state.stockName
                    }
                });
                commit("setStockRelatedArticles",{
                    name: 'stockRelatedArticles',
                    data: getStockDetails
                })
            } catch( err) {
                throw Error(err);
            }
        },
        async setStock({ commit, dispatch }, data) {
         commit("setStock",{
             name: "stockName",
             data: data
         });
         try {
         await dispatch("getStockNews");
        } catch(err){
            console.error(err);
        }
        }
    },
    getters: {
       stockName(state){
           return state.stockName;
       },
       stockRelatedArticles(state){
           return state.stockRelatedArticles;
       } 
    }
}