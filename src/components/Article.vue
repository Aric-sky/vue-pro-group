<template>
	<div class="article">
		<div class="artCont">
		  <span class="artCont-back" onclick="window.history.go(-1)">
		  	<a href="javascript:;" class="fa fa-arrow-left"></a>
		  </span>
		</div>
		<div class="content out">
		   <div class="cont">
		    	<h3>{{articleData.title}}</h3>
	        <div class="time"><p>{{articleData.time | normalTime}} <span><img src="https://gw.alicdn.com/tfs/TB1GOL8agoQMeJjy0FoXXcShVXa-23-22.png" alt=""/></span></p></div>
	        <div class="text-box" v-html="articleData.content"></div>
		   </div>
		</div>
		<div class="foot-btn">
			<ul>
		    	<li class="say"><a href="javascript:;">
		        	<i></i><span>0</span>
		        </a></li>
		    	<li class="zan"><a href="javascript:;">
		        	<i></i><span>0</span>
		        </a></li>
		    	<li class="xing"><a href="javascript:;">
		        	<i></i><span>0</span>
		        </a></li>
		    	<li class="fx"><a href="javascript:;">
		        	<i></i><span>0</span>
		        </a></li>
		    </ul>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			this.fetchData(this.$route.params.id);

			//发送 隐藏footer的 action
			if(this.$route.path.indexOf('article')>0){
				this.$store.dispatch('hideFooter');
			}
		},
		data(){
			return {
				articleData:{}
			}
		},
		watch:{
			$route(to){
				//console.log(to);
				var reg=/article\/\d+/;
				if(reg.test(to.path)){
					var articleId=this.$route.params.id || 0;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('../static/data/article.data').then(function(res){
					//console.log(res.data[id]);
					_this.articleData=res.data[id];
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			}
		}
	}
</script>
<style scoped lang="less" type="text/css">

@import '../../static/css/mixin.less';

.article{
	.artCont{
		.w75;
		position:fixed;
		top:0;
		left:0; 
		background:#fff; 
		border-bottom:2/@b solid #e8eaec; 
		z-index:99;
		.hg(80/@b);
		&-back{
			display: inline-block;
			padding-left: 30/@b;
			.hg(80/@b);
			a{
				font-size: 45/@b;
			}
		}
	}
	.content{
		.w75;
		margin:0 auto; 
		background:#f2f4f5; 
		padding:80/@b 0;
		box-sizing: border-box;
		.cont{ 
			padding:0 20/@b; 
			color:#494d4d;
			h3{
				font-size:40/@b;
				.hg(80/@b);
				border-bottom:1px solid #494d4d;
			}
			.time{
				.hg(50/@b);
				p{
					float:left;
					position:relative;
				}
				span{
					width:23/@b;
					height:22/@b;
					position:absolute; 
					top:50%;
					right:-23/@b;
					transform:translate(0,-50%);
					img{
						display: block;
						width: 100%;
					}
				}
			}
			.text-box{ 
				font-size:25/@b;
				p{
					line-height:45/@b;
					margin-bottom:10/@b;
				}
			}
		}
	}
	.foot-btn{
		.w75;
		height:80/@b; 
		background:#ddd; 
		border-top:1px solid #e8eaec; 
		position:fixed; 
		left:0;
		bottom:0;
		ul{
			width:100%;
			margin:0 auto;
			height:80/@b;
			display: flex;
			li{
				flex:1;
				.hg(80/@b);
				&.last-child{
					>a{border:0}
				}
				>a{
					display:block;
					height: 100%;
					border-right:1px solid #e8eaec;
					text-align: center;
					vertical-align: top;

					i{
						display: inline-block;
						margin-bottom: -5/@b;
					}
					span{
						margin-left: 10/@b
					}
				}
			}
			.say{
				i{
					width: 36/@b;
					height: 26/@b;
					background:url('https://gw.alicdn.com/tfs/TB1yVP4agoQMeJjy1XaXXcSsFXa-36-26.png') no-repeat 0 0; 
					background-size:100%;
				}
			}

			.zan{
				i{
					width:36/@b;
					height:28/@b;
					background:url('https://gw.alicdn.com/tfs/TB1lXT8agMPMeJjy1XcXXXpppXa-36-28.png') no-repeat 0 0;
					background-size:100%;
				}
			}

			.xing{
				i{
					width:34/@b;
					height:33/@b;
					background:url('https://gw.alicdn.com/tfs/TB1q.Y6agMPMeJjy1XbXXcwxVXa-34-33.png') no-repeat 0 0;
					background-size:100%;
				}
			}

			.fx{
				i{
					width:33/@b;
					height:23/@b;
					background:url('https://gw.alicdn.com/tfs/TB1j_f8agoQMeJjy0FoXXcShVXa-33-23.png') no-repeat 0 0;
					background-size:100%;
				}
			}
		}
	}
}



</style>