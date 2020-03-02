<template>
  <div class="index">
    <!-- 商户头部 -->
    <div class="index-img" :style="{background: `url(${bus.avatar})`}"></div>
    <div class="index-top">
      <!-- 头部左边图片 -->
      <div class="left-img">
        <img :src="bus.avatar" />
      </div>
      <!-- 头部右边内容 -->
      <div class="rigth-information">
        <Row>
          <i-col span="24">
            <h3>{{bus.name}}</h3>
          </i-col>
          <i-col span="24">{{bus.description}}/{{bus.deliveryTime}}分钟送达</i-col>
          <i-col span="24">{{bus.supports ? bus.supports[0].description : ""}}</i-col>
        </Row>
      </div>
    </div>
    <!-- 公告 -->
    <div class="roll">
      <span>公告</span>
      {{bus.bulletin}}
    </div>
    <!-- 跳转链接 -->
    <div class="index-router">
      <router-link to="/">商品</router-link>
      <router-link to="/Evaluate">评价</router-link>
      <router-link to="/Business">商家</router-link>
    </div>
    <!-- 内容区 -->
    <router-view  @click="shopcarshow=false"></router-view>
    <!-- 底部购物车 -->
     <transition name="slide-fade">
    <div class="shopx" v-show="shopcarshow"><Shopcar></Shopcar></div>
     </transition>

    <div style="width: 100%;height: 51px;"></div>
    <Row class="shop">
      <i-col span="6">
        <div class="shop-img" @click=" shopcarshow =  !shopcarshow">
          <img src="../assets/images/SVG/shopping_cart.svg" />
        </div>
      </i-col>
      <i-col span="10"><span style="font-size: 24px;color: #fff;">￥{{cont}}</span> | 另需配送费4元</i-col>
      <i-col span="8" style=" background: #3c3431;">￥20起送</i-col>
    </Row>
  </div>
</template>

<script>
//引入api
import { seller } from "../api/apis";
import Shopcar from "./Shopcar"
export default {
  data() {
    return {
      bus: [],
      shopcarshow: false//是否显示购物车
    };
  },
  components:{  //引入购物车组件
      Shopcar
  },
  created() { //渲染前加载数据
    seller().then(res => {
      this.bus = res.data.data;
      // console.log(this.bus.supports);
    });
  },
  computed:{//计算属性
    cont(){
       //返货总价格
         let con=0;
        this.$store.getters.tel.map((v)=>{
            
          con +=(v.price*v.count)

        })
       return con
    }


  }
};
</script>
<style lang="less" scoped>
.index {
  height: 100%;
  .index-img {
    width: 100%;
    height: 150px;
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(5px);
  }
  .index-top {
    width: 100%;
    height: 150px;
    display: flex;
    // 头部左边内容
    .left-img {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url() no-repeat;
    }
    .left-img img {
      width: 80px;
      height: 80px;
      border-radius: 20px;
    }
    // 头部右边内容
    .rigth-information {
      padding-left: 5%;
      padding-top: 5%;
      text-align: left;
      width: 80%;
      p {
        line-height: 20px;
      }
      div {
        height: 30px;
      }
    }
  }
  .roll {
    width: 100%;
    height: 20px;
    overflow: hidden;
    position: absolute;
    top: 125px;
    background: #3c3431;
    color: #fff;
    opacity: 0.5;
    padding: 0 10px;
    span {
      background: #fff;
      color: #ccc;
    }
  }
  // 导航
  .index-router {
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .router-link-exact-active {
    color: red;
  }
  .shop {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    color: #97989c;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #141c27;
      height: 50px;
    }
    .shop-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      position: absolute;
      background-color: #141c27;
      left: 30px;
      bottom: 20px;
      img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #2a333c;
      }
    }
  }
  .shopx {
    width: 100%;
    position: fixed;
    bottom: 38px;
    background: #fff;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.6s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.6s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(300px);
    opacity: 0;
  }
}
</style>
