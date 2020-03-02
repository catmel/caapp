<template>
  <div class="merchant">
    <div class="titleTop">
      <div class="top-a">
        <div class="top-a-l">
          <h2>{{data.name}}</h2>
          <p>
            <Rate disabled :value.sync="data.score"></Rate>
            <span>({{data.ratingCount}})</span>
            <span class="ma-10">月售{{data.sellCount}}单</span>
          </p>
        </div>
        <div class="top-a-r">
          <Icon type="ios-heart" size="40" color="red"></Icon>已收藏
        </div>
      </div>
      <div class="top-b">
        <div class="top-b-box bd-R">
          <p>起送价</p>
          <p>
            <span class="xtitle">{{data.minPrice}}</span>元
          </p>
        </div>
        <div class="top-b-box bd-R">
          <p>商家配送</p>
          <p>
            <span class="xtitle">{{data.deliveryPrice}}</span>元
          </p>
        </div>
        <div class="top-b-box bd-R">
          <p>平均配送时间</p>
          <p>
            <span class="xtitle">{{data.minPrice}}</span>元
          </p>
        </div>
      </div>
    </div>
    <div class="activity">
      <h3>公告与活动</h3>
      <p class="act">{{data.bulletin}}</p>
      <div class="activity-list">
        <p v-for="(v,i) in data.supports" :key="i" class="act-act">
          <span>
            <img src="../assets/images/zhe.png" v-show="v.type==0" />
            <img src="../assets/images/jian.png" v-show="v.type==1" />
            <img src="../assets/images/piao.png" v-show="v.type==2" />
            <img src="../assets/images/bao.png" v-show="v.type==3" />
          </span>
          {{v.description}}
        </p>
      </div>
    </div>

    <div class="live">
      <h3>商家实景</h3>
      <div>
        <img v-for="(v,i) in data.pics" :key="i" :src="v" />
      </div>
    </div>

    <div class="merchant-message">
      <h3 class="message">商家信息</h3>
      <p v-for="(v,i) in data.infos" :key="i" class="act-act message-p">{{v}}</p>
    </div>
  </div>
</template>

<script>
import { seller } from "../api/apis";
export default {
  data() {
    return {
      data: [] //商家信息对象
    };
  },
  created() {
    // 获取请求
    seller().then(res => {
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.merchant {
  height: 1150px;
  background-color: #f4f5f7;
  .titleTop {
    width: 100%;
    height: 240px;
    padding: 20px;
    border-bottom: 1px solid #f4f5f7;
    margin-bottom: 20px;
    background-color: #fff;
    .top-a {
      border-bottom: 1px solid #f4f5f7;
      height: 100px;
      display: flex;
      align-items: center;
      .top-a-l {
          text-align: left;
        flex: 1;
        .ma-10 {
          margin-left: 10px;
        }
      }
      .top-a-r {
        width: 50px;
        height: 80px;
        text-align: center;
      }
    }
    .top-b {
      height: 100px;
      display: flex;
      padding-top: 20px;
      align-items: center;
      .bd-R {
        border-right: 1px solid #f4f5f7;
        p:nth-child(1){
            color: #ccc
        }
      }
      .top-b-box {
        flex: 1;
        height: 80px;
        text-align: center;
        .xtitle {
          font-size: 35px;
        }
      }
    }
  }
  .activity {
    background-color: #fff;
    padding: 20px;
    width: 100%;
    height: 350px;
    margin-bottom: 20px;
    .act {
      width: 100%;
      height: 150px;
      margin-left: 10px;
      color: red;
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 20px;
    }
    .activity-list {
      width: 100%;
      height: 120px;
      align-items: center;
      background-color: #fff;
    }
    .act-act {
      border-top: 1px solid #f4f5f7;
      padding: 10px 0;
      img {
        vertical-align: middle;
      }
    }
  }
  .live {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    div {
      display: flex;
      img {
        padding:5px; 
        flex: 1;
        width: 80px;
        height: 80px;
      }
    }
  }
  .merchant-message {
    padding: 20px;
    background-color: #fff;
    .message {
      width: 100%;
      margin-bottom: 5px;
    }
    .message-p {
      border-top: 1px solid #f4f5f7;
      padding: 15px 0;
    }
  }
}
</style>