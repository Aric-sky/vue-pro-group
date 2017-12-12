<template>
	<div class="content">
	    <p class="fhbtn"><a href="javascript:;" onclick="window.history.go(-1)"></a></p>
	    <h1></h1>
	    <div class="login-box">
	    	<p class="lsolid"></p>
	        <div class="login">
	        	<router-link to="/user-login">登录</router-link>
	        	<span></span>
	        	<router-link to="/user-reg">注册</router-link>
	        </div>
	        <p class="rsolid"></p>
	    </div>
	    <ul>
	        <li class="lifirst">
	        	<input type="text" value=""/>
	            <span>帐号</span>
	        </li>
	        <li>
	        	<input type="text" value=""/>
	            <span>密码</span>
	        </li>
	    </ul>
	    <div class="footbox">
	        <input type="button" value="注 册" class="login-btn"/>
	        <a href="javascript:;" class="tishi">忘记密码？</a>
	    </div>
	</div>
</template>

<style scoped lang="less" type="text/css">
@import '../../static/css/mixin.less';

.content{
	.w75;
	background:#f2f4f5;
	.fhbtn{
		padding-top:27/@b;
		a{
			display:block;
			width:23/@b;
			height:25/@b;
			background:url('https://gw.alicdn.com/tfs/TB1NUz8agMPMeJjy1XcXXXpppXa-23-25.png') no-repeat 0 0;
			background-size:100%;
			margin-left:30/@b;
		}
	}
	h1{
		width:168/@b;
		height:168/@b;
		background:url('//gw.alicdn.com/tfs/TB1JCowXeMxLeJjy0FjXXcDbVXa-168-168.png') no-repeat 0 0;
		background-size:100%;
		margin:0 auto;
		margin-top:122/@b;
	}
	.login{
		width:200/@b;
		height:38/@b;
		margin:0 auto;
		margin-top:85/@b;
		a{
			width:97/@b;
			.hg(38/@b);
			font-size:35/@b;
			float:left;
			color:#4c4f50;
			text-align:center;
		}
		span{
			float:left;
			height:38/@b;
			border-left:1/@b solid #4c4f50;
		}
	}
	.login-box{
		position:relative;
		.lsolid{
			width:196/@b;
			height:18/@b;
			border-bottom:1/@b solid #4c4f50;
			position:absolute;
			top:0;
			left:10/@b;
		}
		.rsolid{
			width:196/@b;
			height:18/@b;
			border-bottom:1/@b solid #4c4f50;
			position:absolute;
			top:0;
			right:10/@b;
		}
	}
	ul{
		width:578/@b;
		height:192/@b;
		border:1/@b solid #e5e7e8;
		background:#fff;
		margin:0 auto;
		margin-top:68/@b;
		li{
			height:95/@b;
			position:relative;
			&.lifirst{border-bottom:1/@b solid #e5e7e8;}
			input{
				padding-left:124/@b;
				width:454/@b;
				height:100%;
				font-size:40/@b;
			}
			span{
				width:123/@b;
				.hg(49/@b);
				position:absolute;
				top:26/@b;
				left:0;
				border-right:1/@b solid #676868;
				color:#676868;
				font-size:25/@b;
				text-align:center;
			}
		}
	}
	.footbox{
		width:465/@b;
		height:65/@b;
		margin:0 auto;
	}
	.login-btn{
		width:465/@b;
		.hg(65/@b);
		background:#4c4f50;
		color:#fff;
		text-align:center;
		border-radius:8/@b;
		display:block;
		margin-top:62/@b;
		font-size:28/@b;
	}
	.tishi{
		width: 140/@b;
		font-size: 25/@b;
		margin-top: 28/@b;
		display: block;
	}
}

</style>