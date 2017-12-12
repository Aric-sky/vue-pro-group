<template>
	<div class="nav">
		<div class="title">
			<h3>NEWS</h3>
			<i class="fa fa-jsfiddle"></i>
		</div>
		<ul class="short_nav">
	    	<router-link to="/home" tag="li" active-class="active">
	    		<a href="javascript:;">首页</a>
	    	</router-link>
	    	<router-link to="/follow" tag="li" active-class="active">
	    		<a href="javascript:;">关注</a>
	    	</router-link>
	    	<router-link to="/foc-news" tag="li" active-class="active">
	    		<a href="javascript:;">要闻</a>
	    	</router-link>
	    	<router-link to="/live-show" tag="li" active-class="active">
	    		<a href="javascript:;">直播</a>
	    	</router-link>
	    	<router-link to="/user-login" tag="li" active-class="active">
	    		<a href="javascript:;">栏目3</a>
	    	</router-link>
	  </ul>
    <div class="more" @click="swipe()">
    	<span id="cha" class="fa fa-plus"></span>
    </div>
		<div class="pop" v-show='isShow'>
			<div class="pop-head">
				切换栏目
			</div>
			<ul class="clearfix">
				<li v-for="(val,key) in channel">{{val}}</li>

			</ul>
		</div>


	</div>
</template>
<script>

import { mapGetters } from 'vuex';

	export default{
		data(){
			return {
				self:this,
				isShow:false
			}
		},
		computed:mapGetters([
				'channel'
			]),
		methods:{
			swipe(){
				this.isShow = ! this.isShow;

				let chacha = document.getElementById('cha');
				if(this.isShow){
					chacha.style.cssText='transform:rotate(45deg)';
				}else{
					chacha.style.cssText='transform:rotate(0deg)';
				}
			}
		}
	}
</script>

<style scoped lang="less" type="text/css">
@import '../../static/css/mixin.less';

.nav{
	position:fixed;
	top:0;left:0;
	z-index:2;
	background:#fff;
	.w75;
	.title{
		height:90/@b;
		.w75;
		background: #e4393c;
		color: #fff;
		position: relative;
		h3{
			.hg(90/@b);
			text-align: center;
		}
		i{
			position: absolute;
			top: 50%;
			left: 10%;
			transform:translate(0,-50%);
			font-size: 40/@b;
		}
	}
	.pop{
		position: absolute;
		top: 90/@b;
		left: 0;
		.w75;
		background: #fff;
		&-head{
			.hg(50/@b);
			.w75;
			text-indent: 20/@b;
			font-size: 26/@b;
			background: #fff;
		}
		ul{
			.w75;
			padding: 20/@b;
			background: #eee;
			box-sizing: border-box;
			li{
				float: left;
				width: 100/@b;
				.hg(60/@b);
				background: #fff;
				box-sizing: border-box;
				text-align: center;
				border:1/@b solid #ababab;
				border-radius: 20/@b;
				margin-right: 22/@b;
				margin-bottom: 15/@b;
				&:nth-child(6n){
					margin-right: 0;
				}
			}
		}
	}
	ul.short_nav{
		height:50/@b;
		.w75;
		overflow: hidden;
		li{
			height:50/@b;
			float:left;
			&.active{
				a{
					font-size: 30/@b;
					color:#e4393c;
				}
			}
			a{
				display:block;
				width:130/@b;
				.hg(50/@b);
				text-align:center;
				font-size:25/@b;
				color:#aaa;
			}
		}
	}
	.more{
		.hg(45/@b);
		width: 70/@b;
		position: absolute;
		bottom: 0;
		right: 0;
		text-align: center;
		z-index: 100;
		span{
			font-size: 35/@b;
			color: #ababab;
			transition:all .1s linear;
		}
	}
}


</style>
