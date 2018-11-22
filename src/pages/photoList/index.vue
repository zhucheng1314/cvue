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
                
                <img src="http://www.qqma.com/imgpic2/cpimagenew/2018/4/5/c89de4fadcf34dd58bbe789d00a58824.jpg">
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
    this.getCategory(),
    this.getAllImages(0)
  },
  methods: {
    getCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          this.categories = result.body.message;
          this.categories.unshift({ id: 0, title: "全部" });
        }
      })
    },
    getAllImages(cateId){
        this.$http.get("api/getimages/" + cateId).then(result=>{
            if(result.body.status===0){
                this.images=result.body.message
            }
        })
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
    .photolist-container{
        .photo-list{
            padding:0px;
            margin:0px;
            li{
                // width:100%;
                margin:6px;
                position:relative;
                img{
                    width:100%;
                    vertical-align:middle;
                    
                }
                .info{
                    color:white;
                //    margin:0 6px 6px;
                    position:absolute;
                    background-color:rgba(0,0,0,.4);
                    bottom:0px;
                    overflow: hidden;
                   width:100%;
                    max-height:84px;
                    .info-title{
                         font-size: 16px;
                         text-align: center;

                    }
                    .info-body{
                        font-size: 13px;
                        text-indent: 2em;
                    }
                }
            }
        }
    }

</style>


