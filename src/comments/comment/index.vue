<template>
    <div class="comment-container">
        <h2>发表评论</h2>
        <hr>
        <textarea v-model="commentContent" placeholder="请开始抬杠!(最多抬120杠)" maxlength="120">
        </textarea>
        <mt-button type="primary" size="large" @click="publish">发表抬杠</mt-button>
        <!-- 评论列表 -->
        <div class="comment-list">
            <div class="comment-item" v-for="(item,index) in commentList" :key="item.index">
                <div class="comment-title">
                    杠精:<span>{{item.user_name}}</span>
                    <p>第<span>{{index+1}}</span>杠&nbsp;&nbsp;</p>
                     <br>
                    <p>抬杠时间:{{item.add_time | dataFormat}}</p>&nbsp;&nbsp;
                </div>
                <div class="comment-content">
                    {{item.content== 'undefined'?'啥都没说!':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getmore" >更多抬杠</mt-button>

    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  //子组件中要用props定义一次父组件中传过来的变量
  props: ["id"],
  data() {
    return {
      //当前页
      pageIndex: 1,
      //获取回来的数据列表
      commentList: [],
      commentContent: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          this.commentList = this.commentList.concat(result.body.message);
        });
    },
    getmore() {
      this.pageIndex++;
      this.getComments();
    },
    publish() {
      if (this.commentContent.length == 0) return Toast("抬杠内容不能为空");
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.commentContent
        })
        .then(result => {
          if (result.body.status === 0) {
            this.commentContent = "";
            this.pageIndex = 1;
            this.commentList = [];
            this.getComments();
          } else {
            Toast("抬杠失败!try again!");
          }
        });
    }
  }
};
</script>
<style lang="less">
.comment-container {
  margin-top: 10px;
  textarea {
    height: 100px;
    border: 1px dashed greenyellow;
    padding: 3px;
  }
  .comment-title {
    background-color: #ddd;
    margin-top: 20px;
    font-size: 14px;
    padding: 3px;

    > span:nth-child(1) {
      font-size: 16px;
      color: red;
      font-weight: 700;
    }
    > p:nth-child(1) {
      width: 50px;
      float: right;
      >span {
        color: skyblue;
        font-weight: 700;
      }
    }
    > p:nth-child(2) {
      float: right;
      text-align: right;
    }
  }
  .comment-content {
    font-size: 12px;
  }
}
</style>


