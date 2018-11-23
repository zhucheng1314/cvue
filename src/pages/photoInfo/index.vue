<template>
    <div class="photoInof-container">
        <h3> {{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time | dataFormat}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p><hr>

        <!-- 缩略图 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item,index) in list" :key="item.src" :src="item.src" height="100" @click="$preview.open(index,list)">
        </div>

        <!-- 图片内容 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <comment :id="id"></comment>

    </div>
</template>

<script>
//导入评论区的子组件
import comment from "../../comments/comment/index.vue";
export default {
  data() {
    return {
      //路由中的图片id
      id: this.$route.params.id,
      //图片详情
      photoinfo: {},
      //图片详情缩略图数组
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  components: {
    comment
  },
  methods: {
    getPhotoInfo() {
      //获取图片详情图
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          console.log(result);
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
          let arr = [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903860674&di=05fb2ed7c0a1a83203b032af0413739c&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fexp%2Fw%3D480%2Fsign%3D0a7618073112b31bc76ccc21b6193674%2Fa1ec08fa513d269720158c1d5dfbb2fb4216d8a8.jpg',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903556689&di=62628a65469f1e4102b537135a5915b8&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2Fb03533fa828ba61e570c5bc94d34970a314e5972.jpg",
            "http://img3.imgtn.bdimg.com/it/u=3360690558,3623061169&fm=11&gp=0.jpg",
            "http://pic8.nipic.com/20100719/3320946_123936081858_2.jpg",
            "http://wx2.sinaimg.cn/large/006nLajtly1fk65lrevkqj30dw0dwadz.jpg",
            "http://wx4.sinaimg.cn/large/006WfoFPly1fq0jo9svnaj30dw0dwdhv.jpg",
            "http://pic.58pic.com/58pic/15/35/43/94e58PICdzr_1024.jpg"
          ];

          for (let i = 0; i <= this.list.length; i++) {
            this.list[i].src = arr[i];
          }
        }
      });
    }
  }
};
</script>
<style lang="less">
.photoInof-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    img {
      margin: 10px;
      width:27%;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
