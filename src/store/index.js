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
    add(state, name) { //加商品
      state.goodslist.map((v) => {
        v.foods.map((x) => {
          if (x.name == name) {
            x.num++
          }
        })
      }) //商品数量增加

    },
    del(state, name) { //减商品
      state.goodslist.map((v) => {
        v.foods.map((x) => {
          if (x.name == name) {
            x.num--
          }
        })
      }) //商品数量增加
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
              price: x.price, //单价
              count: x.num, //商品数量
            })
          }
        })
      })
      Array.prototype.arrx=function(){
        var arr= this;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i].name == arr[j].name) {
                    arr.splice(j, 1);
                    //因为数组长度减小1，所以直接 j++ 会漏掉一个元素，所以要 j--
                    j--;
                }
            }
        }
        return arr
    }
      return arr.arrx();

    }

  }

})