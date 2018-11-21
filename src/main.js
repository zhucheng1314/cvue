// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'


//导入vue-resource请求模块
import VueResource from 'vue-resource'
//注册vue-resource
Vue.use(VueResource)

//配置vue-resource的请求根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'

//按需导入mint-ui的组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui'
//注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name,Button)

//导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入自己的全局样式
import './css/common.less'

Vue.config.productionTip = false

//定义全局过滤器
Vue.filter('dataFormat',(data,parms='YYYY-MM-DD HH:mm:ss')=>{
  return moment(data).format(parms)
  // let dd = new Date(data)
  // let Y = dd.getFullYear()
  // let M = dd.getMonth()
  // let D = dd.getDate()
  // if (parms.toLowerCase() == 'yyyy-mm-dd') {
  //   return `${Y}-${M}-${D}`
  // } else {
  //   let h = dd.getHours()
  //   let m = dd.getMinutes()
  //   let s = dd.getSeconds()

  //   return `${Y}-${M}-${D} ${h}:${m}:${s}`
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
