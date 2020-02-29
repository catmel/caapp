<template>
  <div class="goods">
    <div class="left">
      <ul class="content">
        <li v-for="(v,i) in this.$store.state.goods" :key="i" @click="gotitle(i)" :class="{active:id == i}">
          <img v-show="v.type == 1" src="../assets/images/icoze.png" alt="图片" />
          <img v-show="v.type == 2" src="../assets/images/icojian.png" alt="图片" />
          {{v.name}}
        </li>
      </ul>
    </div>

    <div class="rigth">
      <ul class="content">
        <ul v-for="(v,i) in this.$store.state.goods" :key="i" :id="i">
          <h2>{{v.name}}</h2>
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
                    v-show="x.num"
                    shape="circle"
                    style="color: #2D8CF0;border: 1px solid #2D8CF0;"
                  >-</i-button>
                  <input
                    type="text"
                    v-model="x.num"
                    style="width: 27px; border:0px solid transparent; text-align: center"
                  />
                  <i-button type="primary" shape="circle">+</i-button>
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
import { goods } from "../api/apis";
import BScroll from "better-scroll";

export default {
  data(){
    return{
      id:0,
     
    }
  },
  created() {
    goods().then(res => {
      this.$store.state.goods = res.data.data;
    });
  },
  mounted() {
     new BScroll(document.querySelector(".left"),{click:true});
     this.goto = new BScroll(document.querySelector(".rigth"),{click:true});
  },
  methods:{
    gotitle(id){
      this.id=id
      this.goto.scrollToElement(document.getElementById(id),600)
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  width: 100%;
  height: 100%;
  display: flex;
  .active{
    background: #fff;
  }
  .left {
    width: 100px;
    overflow: auto;
    background-color: #f4f5f7;
    height: 280px;
  
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
    height: 400px;
    overflow: auto;
    li {
      list-style: none;
      height: 100px;
      border-bottom: 1px solid red;
      display: flex;
      align-items: center;
      padding-left: 5px;

      img {
        width: 60px;
        height: 60px;
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