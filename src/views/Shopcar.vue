<template>
<div class="left">
      <ul class="content">
        <Row>
        <i-col span="24" v-for="(v,i) in this.$store.getters.tel" :key="i">
          <Row>
            <i-col span="8">{{v.name}}</i-col>
            <i-col span="8" style="color:red">{{v.price}}</i-col>
            <i-col span="8">
              <i-button
                v-show="v.count > 0"
                shape="circle"
                style="color: #2D8CF0;border: 1px solid #2D8CF0;border-radius: 50% ;"
                @click="  del(v.name)"
              >-</i-button>
              <input
                type="text"
                v-model="v.count"
                style="width: 27px; border:0px solid transparent; text-align: center"
                onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
                onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
              />
              <i-button
                type="primary"
                shape="circle"
                style="  border-radius: 50% ;"
                @click="add(v.name)"
              >+</i-button>
            </i-col>
          </Row>
        </i-col>
      </Row>
      </ul>
    </div>
</template>

<script>
import BScroll from "better-scroll"; //引入滑动插件
export default {
  methods: {
    add(name) {
      //加商品
      this.$store.commit("add", name);
    },
    del(name) {
      //减商品
      this.$store.commit("del", name);
    }
  },
  mounted() {
    
    // 左侧面板
    new BScroll(document.querySelector(".left"), { click: true });
  }
};
</script>

<style lang="less" scoped>
.left{
    height: auto;
}
.ivu-row {
    border-bottom: 1px solid red;
    > div {
      padding: 8px 5px;
    }
  }
</style>