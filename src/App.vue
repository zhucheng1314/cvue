<template>
  <div class="app-container">
    <!-- 头部 -->
      <mt-header class="mt-header" fixed title="cvue"></mt-header>
      <!-- 底部菜单栏 -->
      <nav class="mui-bar mui-bar-tab">
          <!-- 先将a标签换成  router-link标签   -->
		      	<router-link class="mui-tab-item-cheng" to="/home">
		      		<span class="mui-icon mui-icon-home"></span>
		      		<span class="mui-tab-label">首页</span>
		      	</router-link>
		      	<router-link class="mui-tab-item-cheng" to="/member">
		      		<span class="mui-icon mui-icon-email"></span>
		      		<span class="mui-tab-label">会员</span>
		      	</router-link>
		      	<router-link class="mui-tab-item-cheng" to="/shopcar">
		      		<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
		      			<span class="mui-badge">0</span>
		      		</span>
		      		<span class="mui-tab-label">购物车</span>
		      	</router-link>
		      	<router-link class="mui-tab-item-cheng" to="/search">
		      		<span class="mui-icon mui-icon-search"></span>
		      		<span class="mui-tab-label">搜索</span>
		      	</router-link>
		</nav>

    <!-- 中间路由区域 -->
    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>



<script src="./snow.js">
</script>

<style lang='less'>
  .mt-header{
    z-index: 999!important;
    background-color: skyblue;
  }
  .app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x:hidden;

  .v-enter{
    transform:translateX(100%);
    opacity:0;
  }
  .v-leave-to{
    transform:translateX(-100%);
    opacity:0;
    position:absolute;
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }

  
// 该类名，解决 tabbar点击无法切换的问题
.mui-bar-tab .mui-tab-item-cheng.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-cheng {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-cheng .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-cheng .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
}


</style>
