import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Follow from './components/Follow.vue'
import UserInfo from './components/UserInfo.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'
import FocNews from './components/focNews.vue'
import LiveShow from './components/liveShow.vue'



export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/foc-news',
    component:FocNews
  },
  {
    path:'/live-show',
    component:LiveShow
  },
  {
    path:'/user-login',
    component:UserLogin
  },
  {
    path:'/user-reg',
    component:UserReg
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/user-info',
    component:UserInfo
  },
  {
    path:'/article/:id',
    component:Article
  },
  { 
    path: '/', 
    redirect: '/home' 
  },
  { 
    path: '*', 
    redirect: '/home' 
  }
]