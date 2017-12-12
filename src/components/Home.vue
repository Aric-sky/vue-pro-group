<template>
  <div class="home">
		<v-Slider></v-Slider>
	    <div class="newsList">
	    	<ul>
          <li v-for="(item,index) in arrList" class="cont">
            <router-link :to="'/article/'+item.id">
            	<div class="cont_lf">
            		<img src="https://img.alicdn.com/tfs/TB1zk1gSFXXXXaVaXXXXXXXXXXX-217-86.png">
            	</div>
              <div class="cont_rt">
              	<p class="newsTile">{{item.title}}</p>
                <p class="newsDetail">{{item.detail}}</p>
              </div>
            </router-link>
          </li>
	      </ul>
	    </div>
  </div>
</template>

<script type="ecmascript-6">
	import Slider from './Slider.vue';

	export default {
		components:{
			'v-Slider':Slider
		},
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			//获取数据
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('static/data/index.data').then(function(res){
					//setTimeout(function(){
						_this.arrList=res.data;
					//},1000);
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>

<style scoped lang="less" type="text/css">
@import '../../static/css/mixin.less';

.home{
  .w75;
  height: 100%;
  padding: 140/@b 0 90/@b 0;
	.newsList{
		.w75;
		margin:0 auto;
		padding: 0 10/@b;
		box-sizing: border-box;
		.cont{
			height:150/@b;
			color:#494d4d;
			padding:10/@b 0;
			border-bottom:1/@b dashed #ccc;
			box-sizing: border-box;
			a{
				display: block;
				overflow: hidden;
			}
			&_lf {
				width: 150/@b;
				height: 150/@b;
				float: left;
				img{
					display: block;
					width: 150/@b;
					height: 150/@b;
				}
			}
			&_rt{
				float: right;
				width: 570/@b;
			}
		}
	}
	.newsDetail{
		overflow: hidden;
		height: 50/@b;
		line-height: 25/@b;
		text-indent: 15/@b;
		font-size: 20/@b;
		margin-top: 30/@b;
		p{
			margin-top:10/@b;
			overflow:hidden;
		}
	}
	.newsTile{ 
		font-size:25/@b;
		font-weight: 600;
		.hg(35/@b);
	}
}



</style>
