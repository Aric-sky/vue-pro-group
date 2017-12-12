<template>
  <div class="foot">
	<ul>
   <li>
      <router-link to="/home" active-class="active">
        <a href="javascript:;" class="fa fa-newspaper-o"></a>
        <p>首页</p>
      </router-link>
   </li>
   <li>
      <router-link to="/live-show" active-class="active">
        <a href="javascript:;" class="fa fa-video-camera"></a>
        <p>直播</p>
      </router-link>
   </li>
   <li>
      <router-link to="/follow" active-class="active">
        <a href="javascript:;" class="fa fa-heart-o"></a>
        <p>关注</p>
      </router-link>
   </li>
   <li>
      <router-link to="/user-info" active-class="active">
        <a href="javascript:;" class="fa fa-user"></a>
        <p>我的</p>
      </router-link>
   </li>

  </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is foot'
    }
  }
}
</script>

<style scoped lang="less" type="text/css">

@import '../../static/css/mixin.less';

.foot{
	position: fixed;
	bottom: 0;
	left: 0;
  .w75;
  height: 70/@b;
  background: #fff;
  padding: 15/@b 0 5/@b 0;
  ul{
    display: flex;
    li{
      flex:1;
      text-align: center;
      color: #aaa;
      >a.active{
        color: #e4393c;
        .fa{
          color: #e4393c;
        }
      }
      .fa{
        display: block;
        font-size: 30/@b;
      }
      p{
        font-size: 25/@b;
      }
    }
  }
}


</style>