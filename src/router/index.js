import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '../pages/home/'
import MemberComponent from '../pages/member/'
import ShopcarComponent from '../pages/shopcar/'
import SearchComponent from '../pages/search/'
import NewsListComponent from '../pages/newsList/'
import NewsInfoComponent from '../pages/newsInfo/'
import PhotoListComponent from '../pages/photoList/'
import PhotoInfoComponent from '../pages/photoInfo/'

Vue.use(Router)

export default new Router({
  routes: [
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeComponent},
      {path:'/member',component:MemberComponent},
      {path:'/shopcar',component:ShopcarComponent},
      {path:'/search',component:SearchComponent},
      {path:'/home/newsList',component:NewsListComponent},
      {path:'/home/newsInfo/:id',component:NewsInfoComponent},
      {path:'/home/photoList',component:PhotoListComponent},
      {path:'/home/photoInfo/:id',component:PhotoInfoComponent},
  ],
  linkActiveClass:'mui-active'
})
