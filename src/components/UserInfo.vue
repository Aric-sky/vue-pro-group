<template>
	<div class="userinfo">
		<div class="header">
			<div class="header-title">
	    	<h2><img src="//gw.alicdn.com/tfs/TB1R_wQXwvGK1Jjy0FhXXcgiXXa-120-120.png" alt=""/></h2>
        <div class="user-box">
        	<router-link to="/user-login">登录</router-link> |
        	<router-link to="/user-reg">注册</router-link>
        </div>
        <div class="setting">
        	<i class="fa fa-cog"></i>
        	设置
        </div>
			</div>

      <ul class="clearfix">
      	<li>
            <p>我的关注</p>
        </li>
        <li>
          <p class="end">我的粉丝</p>
        </li>
      </ul>
	    </div>
	    <div class="docList">
	    	<ul>
	            <li class="gk-text">
	            		<i class="fa fa-file-text-o"></i>
	                <p>公开博文</p>
	                <b class="fa fa-angle-right"></b>
	                <span>0</span>
	            </li>
	            <li class="mm-text">
	            		<i class="fa fa-lock"></i>
	                <p>秘密博文</p>
	                <b class="fa fa-angle-right"></b>
	                <span>0</span>
	            </li>
	            <li class="cg-text">
	            		<i class="fa fa-pencil-square"></i>
	                <p>草稿箱</p>
	                <b class="fa fa-angle-right"></b>
	                <span>0</span>
	            </li>
	            <li class="sc-text">
	            		<i class="fa fa-heart"></i>
	                <p>收藏夹</p>
	                <b class="fa fa-angle-right"></b>
	                <span>0</span>
	            </li>
	            <li class="my_cz">
	            		<i></i>
	                <p>收藏夹</p>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default{
		// watch:{
		// 	$route(to){
		// 		//console.log(to.path);
		// 		if(to.path=='/user-info'){
		// 			//console.log(this.$store.state);
		// 			this.$store.dispatch('SHOW_HEAD_FAIL');
		// 		}
		// 	}
		// }
	}
</script>
