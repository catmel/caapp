<template>
  <div class="goods">
    <div class="left">
      <ul class="content">
        <li v-for="(v,i) in goods" :key="i" @click="gotitle(i)" :class="{active:id == i}">
          <img v-show="v.type == 1" src="../assets/images/icoze.png" alt="图片" />
          <img v-show="v.type == 2" src="../assets/images/icojian.png" alt="图片" />
          {{v.name}}
        </li>
      </ul>
    </div>

    <div class="rigth">
      <ul class="content">
        <ul v-for="(v,i) in goods" :key="i" :id="i">
          <h3>{{v.name}}</h3>
          <li v-for="(x,y) in v.foods" :key="y">
            <img :src="x.image" alt="图片" />
            <Row>
              <i-col span="24">
                <h4>{{x.name}}</h4>
              </i-col>
              <i-col span="24" style=" overflow: hidden;">{{x.description ? x.description : ""}}</i-col>
              <i-col span="24">
                <span>月销售{{x.sellCount}}份</span>
                <span>好评率100%</span>
              </i-col>
              <i-col span="24" class="num">
                <span style="color:red">￥{{x.price}}</span>
                <del>{{x.oldPrice ? "￥"+x.oldPrice :""}}</del>
                <div>
                  <i-button
                    v-show="x.num > 0"
                    shape="circle"
                    style="color: #2D8CF0;border: 1px solid #2D8CF0;border-radius: 50% ;"
                    @click="  del(x.name)"
                  >-</i-button>
                  <input
                    type="text"
                    v-model="x.num"
                    style="width: 27px; border:0px solid transparent; text-align: center"
                    onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
                    onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
                  />
                  <i-button
                    type="primary"
                    shape="circle"
                    style="  border-radius: 50% ;"
                    @click="add(x.name)"
                  >+</i-button>
                </div>
              </i-col>
            </Row>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script >
import { goods } from "../api/apis"; //引入api
import BScroll from "better-scroll"; //引入滑动插件
export default {
  data() {
    return {
      id: 0, //左边选中样式id
      scrollY: 0
    };
  },
  created() {
    goods().then(res => {
      //读出数据加入到vuex
      this.$store.commit("addlist", res.data.data);
    });
  },
  mounted() {
    // 左侧面板
    new BScroll(document.querySelector(".left"), { click: true });
    //右侧面板
    this.goto = new BScroll(document.querySelector(".rigth"), {
      click: true,
      probeType: 3
    });
    //监听滚动事件
    this.goto.on("scroll", ({ y }) => {
      this.scrollY = Math.abs(y);
      this.divhei.forEach(v => {
        if (this.scrollY >= v.min && this.scrollY < v.maix) {
          this.id = v.index;
        }
      });
    });
  },
  methods: {
    gotitle(id) {
      this.id = id;
      this.goto.scrollToElement(document.getElementById(id), 600);
    },
    add(name) {
      //加商品
      this.$store.commit("add", name);
    },
    del(name) {
      //减商品
      this.$store.commit("del", name);
    }
  },
  //计算属性
  computed: {
    divhei() {
      var arr = [];
      var tal = 0;
      //获取到每个盒子的div
      var div = document.querySelectorAll(".rigth>.content ul");
      div.forEach((v, i) => {
        arr.push({ min: tal, maix: tal + v.offsetHeight, index: i });
        tal += v.offsetHeight;
      });
      return arr;
    },
    goods() {
      return this.$store.state.goodslist;
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  width: 100%;
  height: 500px;
  display: flex;
  .active {
    background: #fff;
  }
  .left {
    width: 100px;

    overflow: auto;
    background-color: #f4f5f7;

    li {
      display: flex;
      align-items: center;
      width: 90px;
      height: 40px;
      border-bottom: 1px solid #dddee0;
      list-style: none;
      margin: 0 5px;
    }
  }
  .rigth {
    flex: 1;
    height: 100%;
    overflow: auto;
    h3 {
      height: 40px;
      background: #ccc;
      display: flex;
      justify-items: center;
      align-items: center;
    }
    li {
      list-style: none;
      border-bottom: 1px solid #e6e7e9;
      display: flex;
      align-items: center;
      padding: 5px;
      img {
        width: 80px;
        height: 80px;
      }
      .num {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}
</style>