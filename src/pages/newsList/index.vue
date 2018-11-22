<template>
  <div class="newsList-container">
    <ul class="mui-table-view news-list">
      <li class="mui-table-view-cell mui-media" v-for="(item) in newsList" :key="item.id" >
        <router-link :to="'/home/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" src="https://avatars2.githubusercontent.com/u/44312530?s=460&v=4" >
          <div class="mui-media-body">
            <h4 class="mui-ellipsis title">{{item.title}}</h4>
            <p >
              <span class="ctime">发表时间：{{item.add_time | dataFormat('YYYY-MM-DD')}}</span>
              <span class="click">点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  created() {
    this.getNewsList();
  },
  data() {
    return {
      newsList: []
    };
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newsList = result.body.message;
        } else {
          Toast("新闻列表获取失败!try again!");
        }
      });
    }
  }
};
</script>

<style lang="less">
.newsList-container {
  .mui-table-view {
    .mui-table-view-cell > a {
      display: flex;
      align-items: center;
      //   justify-content: center;
    }
    .mui-media-body {
      width: 100%;
      .title {
        font-size: 13px;
        font-weight: 700;
        margin-bottom:7px;
      }
      
        .ctime,
        .click {
          line-height: 26px;
          font-size: 13px;
          color: skyblue;
        }
        .click {
          float: right;
        }
     
    }
  }
}
</style>
