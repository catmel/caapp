import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodslist: [], //goodslist
  },
  mutations: {
    addlist(state, list) {
      // 写入数据
      state.goodslist = list
    },
    add(state, {
      i,
      y
    }) { //加商品
      state.goodslist[i].foods[y].num++; //商品数量增加

    },
    del(state, {
      i,
      y
    }) { //减商品
      state.goodslist[i].foods[y].num--;
    }
  }, //计算属性
  getters: {
    tel(state) {
      var arr = [];
      state.goodslist.map((v) => {
        v.foods.map((x) => {
          if (x.num > 0) {
            arr.push({
              name: x.name, //商品名称
              price:x.price, //单价
              count:x.num,//商品数量
            })
          }
        })
      })
      return arr //返货购物车数组

    }

  }

})