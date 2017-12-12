<template>
	<div class="content">
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
<style scoped lang="less" type="text/css">
@import '../../static/css/mixin.less';

.content{
	.w75;
	box-sizing: border-box;
	background: #ddd;
	.header{
		.w75;
		height: 350/@b;
		&-title{
			padding: 80/@b 0 40/@b 0;
			background: #e4393c;
			position: relative;
			.setting{
				position: absolute;
				top: 30/@b;
				right: 30/@b;
				color: #fff;
				font-size: 25/@b;
			}
		}
		h2{
			width: 95/@b;
			height: 95/@b;
			border-radius: 50%;
			margin: 0 auto;
			background: #fff;
			img{
				width: 100%;
			}
		}
		.user-box{
			font-size: 25/@b;
			.hg(30/@b);
			color: #fff;
			text-align: center;
			margin-top: 20/@b;
			a{
				color: #fff;
			}
		}
		ul{
			.w75;
			height: 70/@b;
			display: flex;
			background: #fff;
			li{
				flex:1;
				.hg(70/@b);
				color: #6C6C6C;
				p{
					text-align: center;
					font-size: 25/@b;
					.hg(70/@b);
				}
				&:first-child p{
					border-right: 1/@b solid #ddd;
				}
			}
		}
	}
	.docList{
		.w75;
		margin: 0 auto;
		ul{
			li{
				background: #fff;
				height: 79/@b;
				border-bottom: 1/@b solid #ddd;
				position: relative;
				span{
					float: left;
					margin-right: 14/@b;
					margin-top: 26/@b;
				}
				b{
					position: absolute;
					top: 50%;
					right: 30/@b;
					transform:translate(0,-50%);
					color: #000;
					font-size: 40/@b;
				}
			}
			.gk-text{
				i{
				float: left;
				width: 37/@b;
				.hg(37/@b);
				font-size: 33/@b;
				color: #DC971F;
				margin-left: 29/@b;
				margin-top: 24/@b;
				}
				p{
					float: left;
					font-size: 25/@b;
					margin-left: 29/@b;
					margin-top: 25/@b;
				}
			}
			.mm-text{
				i{
					float: left;
					width: 37/@b;
					.hg(37/@b);
					font-size: 33/@b;
					color: #DC6321;
					margin-left: 32/@b;
					margin-top: 24/@b;
				}
				p{
					float: left;
					font-size: 25/@b;
					margin-left: 29/@b;
					margin-top: 25/@b;
				}
			}
			.cg-text{
				i{
					float: left;
					width: 37/@b;
					.hg(37/@b);
					font-size: 33/@b;
					color: #DC6321;
					margin-left: 29/@b;
					margin-top: 24/@b;
				}
				p{
					float: left;
					font-size: 25/@b;
					margin-left: 29/@b;
					margin-top: 25/@b;
				}
			}
			.sc-text{
				i{
					float: left;
					width: 37/@b;
					.hg(37/@b);
					font-size: 33/@b;
					color: #e4393c;
					margin-left: 29/@b;
					margin-top: 24/@b;
				}
				p{
					float: left;
					font-size: 25/@b;
					margin-left: 29/@b;
					margin-top: 25/@b;
				}
			}
			.my_cz{
				margin-top: 15/@b;
				i{
					width: 37/@b;
					height: 37/@b;
					background: url('https://gw.alicdn.com/tfs/TB1sI60agMPMeJjy1XdXXasrXXa-39-37.png') no-repeat 0 0;
					background-size: 100%;
					float: left;
					margin-left: 29/@b;
					margin-top: 24/@b;
				}
				p{
					float: left;
					font-size: 25/@b;
					margin-left: 29/@b;
					margin-top: 25/@b;
				}
			}
		}
	}
}




</style>