
<template>
  <div class="newsInfo-container">
   <div class="title">{{newsInfo.title}}</div>
   <div class="subtitle">
       <span class="ctime">发表时间: {{ newsInfo.add_time | dataFormat('YYYY-MM-DD') }}</span>
      <span class="click">点击: {{ newsInfo.click }}次</span>
   </div>
   <hr> 
   <div class="content" v-html="newsInfo.content"></div>

    <!-- 将对应的新闻的id 传到自己的 评论组件去 -->
   <comment :id="id"></comment>
  </div>

  
</template>



<script>


import { Toast } from "mint-ui";

import comment from '../../comments/comment'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.newsInfo = result.body.message[0];
        } else {
          Toast("获取详情失败,try again!");
        }
      });
    }
  },
  components:{
      //注册自己的评论组件
      comment
  }
};
</script>

<style lang='less'>
.newsInfo-container {
  padding: 0 10px;
  .title {
    font-size: 14px;
    font-weight: 900;
    color: skyblue;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 12px;
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
