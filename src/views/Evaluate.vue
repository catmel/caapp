<template>
  <div class="evalu">
    <!-- 评价头部 -->
    <div class="evalu-top">
      <div class="evalu-top-let">
        <Row>
          <i-col span="24" style="color:#F79B01;font-size:2em">3.9</i-col>
          <i-col span="24">
            <h4>综合评分</h4>
          </i-col>
          <i-col span="24" style="color:#B7B8BB;font-size:1em">高于周边商家69.2%</i-col>
        </Row>
      </div>
      <!-- 右边 -->
      <div class="evalu-top-rigth">
        <Row>
          <i-col span="24" style="font-size:1em">
            <h4>
              服务态度
              <Rate disabled :value.sync="valueDisabled"></Rate>
            </h4>
          </i-col>
          <i-col span="24" style="font-size:1em">
            <h4>
              服务态度
              <Rate disabled :value.sync="valueDisabled"></Rate>
            </h4>
          </i-col>
          <i-col span="24" style="font-size:1em;color:#B7B8BB;">送达时间44分钟</i-col>
        </Row>
      </div>
    </div>
    <!-- 底部 -->
    <div class="evalu-bottm">
      <div class="evalu-bottm-top">
        <Row>
          <i-col span="24" class="rowdiv">
            <Row>
              <i-col span="6">
                <i-button type="primary">全部</i-button>
              </i-col>
              <i-col span="6">
                <i-button type="info">满意</i-button>
              </i-col>
              <i-col span="6">
                <i-button>差评</i-button>
              </i-col>
              <i-col span="6"></i-col>
            </Row>
          </i-col>
          <i-col span="24">
            <div class="ico">
              <div></div>
            </div>
            <h3>只看有内容的评价</h3>
          </i-col>
        </Row>
      </div>
      <!-- 评论列表 -->

      <div class="evalu-bottm-list">
        <Row>
          <i-col span="24" v-for="item in this.list" :key="item.id">
            <div class="left">
              <img :src="item.avatar" />
            </div>
            <div class="right">
              <div>{{ item.username }}</div>
              <div>
                <Rate disabled v-model="item.score" />
                <span v-show="item.deliveryTime">{{item.deliveryTime}}分钟送达</span>
              </div>
              <div>{{ item.text }}</div>
            </div>
          </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import { ratings } from "../api/apis";
export default {
  data() {
    return {
      valueDisabled: 4,
      list: []
    };
  },
  created() {
    ratings().then(res => {
      this.list = res.data.data;
      console.log(res);
    });
  }
};
</script>

<style lang="less" scoped>
.evalu {
  background: #f4f5f7;

  .evalu-top {
    display: flex;
    background: #fff;
    padding-top: 20px;
    // 头部评价
    .evalu-top-let {
      width: 40%;
      height: 100px;
    }
    .evalu-top-rigth {
      width: 60%;
      height: 100px;
    }
  }
  .evalu-bottm-top {
    background: #fff;
    margin-top: 20px;
    display: flex;
    justify-items: left;
    align-items: center;
    >.ivu-row {
      flex: 1;
      border-bottom: 1px solid #e6e7e9;
     > .rowdiv:nth-child(1) {
       
        .ivu-row{
           padding: 10px 0;
           margin: 0 15px;
           border-bottom: 1px solid #e6e7e9;
        }
      }
    }
    .ico {
      width: 15px;
      height: 15px;
      background: #ccc;
      border-radius: 50%;
      position: relative;
      top: 18px;
      left: 68px;
      div {
        width: 10px;
        height: 10px;
        border-left: 1px solid #fdfdff;
        border-bottom: 1px solid #fdfdff;
        transform: rotate(-50deg);
        position: relative;
        left: 2px;
      }
    }
  }
  .evalu-bottm-list {
    width: 100%;
   
    .left {
      width: 25%;
      margin-top: 25px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .right {
       margin-top: 25px;
      width: 74%;
      text-align: left;

    }
    .ivu-col {
      border-bottom: 1px solid red;
      background: #fff;
       display: flex;
        padding-bottom: 15px;
        
    }
  }
}
</style>