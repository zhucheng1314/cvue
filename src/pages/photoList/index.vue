<template>
    <div class="photolist-container">
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
              <a @click="getAllImages(item.id)" :class="{'mui-control-item':true, 'mui-active':item.id==0}" v-for="(item) in categories" :key="item.id">
               {{item.title}}
              </a>
             
            </div>
          </div>

        </div>


        <ul class="photo-list">
            <router-link v-for="item in images" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <!-- <img class="item-pic" v-lazy:src="item.img_url"/> -->
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div> 
            </router-link>
        </ul>



    </div>
</template>

<script>
//arguments callee caller在严格模式下无法使用,所以webpack无法打包   在.babelrc文件中忽略掉即可
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      categories: [],
      images: []
    };
  },
  created() {
    this.getCategory(), this.getAllImages(0);
  },
  methods: {
    getCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          this.categories = result.body.message;
          this.categories.unshift({ id: 0, title: "全部" });
        }
      });
    },
    getAllImages(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.images = result.body.message;
          let arr = [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903860674&di=05fb2ed7c0a1a83203b032af0413739c&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fexp%2Fw%3D480%2Fsign%3D0a7618073112b31bc76ccc21b6193674%2Fa1ec08fa513d269720158c1d5dfbb2fb4216d8a8.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903556689&di=62628a65469f1e4102b537135a5915b8&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2Fb03533fa828ba61e570c5bc94d34970a314e5972.jpg",
            "http://img3.imgtn.bdimg.com/it/u=3360690558,3623061169&fm=11&gp=0.jpg",
            "http://pic8.nipic.com/20100719/3320946_123936081858_2.jpg",
            "http://wx2.sinaimg.cn/large/006nLajtly1fk65lrevkqj30dw0dwadz.jpg",
            "http://wx4.sinaimg.cn/large/006WfoFPly1fq0jo9svnaj30dw0dwdhv.jpg",
            "http://pic.58pic.com/58pic/15/35/43/94e58PICdzr_1024.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903860674&di=05fb2ed7c0a1a83203b032af0413739c&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fexp%2Fw%3D480%2Fsign%3D0a7618073112b31bc76ccc21b6193674%2Fa1ec08fa513d269720158c1d5dfbb2fb4216d8a8.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903556689&di=62628a65469f1e4102b537135a5915b8&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2Fb03533fa828ba61e570c5bc94d34970a314e5972.jpg",
            "http://img3.imgtn.bdimg.com/it/u=3360690558,3623061169&fm=11&gp=0.jpg",
            "http://pic8.nipic.com/20100719/3320946_123936081858_2.jpg",
            "http://wx2.sinaimg.cn/large/006nLajtly1fk65lrevkqj30dw0dwadz.jpg",
            "http://wx4.sinaimg.cn/large/006WfoFPly1fq0jo9svnaj30dw0dwdhv.jpg",
            "http://pic.58pic.com/58pic/15/35/43/94e58PICdzr_1024.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903860674&di=05fb2ed7c0a1a83203b032af0413739c&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fexp%2Fw%3D480%2Fsign%3D0a7618073112b31bc76ccc21b6193674%2Fa1ec08fa513d269720158c1d5dfbb2fb4216d8a8.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903556689&di=62628a65469f1e4102b537135a5915b8&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2Fb03533fa828ba61e570c5bc94d34970a314e5972.jpg",
            "http://img3.imgtn.bdimg.com/it/u=3360690558,3623061169&fm=11&gp=0.jpg",
            "http://pic8.nipic.com/20100719/3320946_123936081858_2.jpg",
            "http://wx2.sinaimg.cn/large/006nLajtly1fk65lrevkqj30dw0dwadz.jpg",
            "http://wx4.sinaimg.cn/large/006WfoFPly1fq0jo9svnaj30dw0dwdhv.jpg",
            "http://pic.58pic.com/58pic/15/35/43/94e58PICdzr_1024.jpg"
          ];
          console.log(this.images)

          for (let i = 0; i <= this.images.length; i++) {
            this.images[i].img_url = arr[i];
          }
        }
      });
    }
  },
  mounted() {
    //初始化滚动药放在mounted钩子函数中
    //因为只有等dom 元素加载完成后才能获取
    mui(".mui-scroll-wrapper").scroll({
      decelleration: 0.0005
    });
  }
};
</script>

<style lang="less">
.photolist-container {
  .photo-list {
    padding: 0px;
    margin: 0px;
    li {
      // width:100%;
      margin: 6px;
      min-height:100px;
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
      }
      .info {
        color: white;
        //    margin:0 6px 6px;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.4);
        bottom: 0px;
        overflow: hidden;
        width: 100%;
        max-height: 84px;
        .info-title {
          font-size: 16px;
          line-height: 24px;
          text-align: center;
        }
        .info-body {
          font-size: 13px;
          text-indent: 2em;
        }
      }
    }
  }
}
</style>


