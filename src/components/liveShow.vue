<template>
	<div class="content">
	    <div class="liveList">
	    	<ul>
            <li v-for="(item, index) in arrList">
            	<a href="javascript:;">
                <img :src="item.img">
                <dl class="inner-box">
                	<dt>{{item.title}}</dt>
                	<dd>
	                	<span class="liveFont">直播</span>
	                	<span class="goin">{{item.num}}参与</span>
                	</dd>
                </dl>
               </a>
            </li>
	      </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('static/data/liveShow.data').then(function(res){
					//setTimeout(function(){
						_this.arrList=res.data;
						// console.log(_this.arrList);
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

.content{
	.w75;
	height: 100%;
	background:#f2f4f5; 
	padding:150/@b 0 100/@b;
	box-sizing: border-box;
	.liveList{
		.w75;
		overflow: hidden;
		li{
			height: 200/@b;
			margin-bottom: 10/@b;
			overflow: hidden;
			position: relative;
			a{
				display: block;
				color: #fff;
			}
			img{
				display: block;
				.w75;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
		.inner-box{
			position: absolute;
			bottom: 10/@b;
			left: 20/@b;
			.w75;
			dt{
				font-size: 30/@b;
				font-weight: 600;
				.hg(40/@b);
				overflow: hidden;
				margin-bottom: 20/@b;
			}
			dd{
				font-size: 25/@b;
				vertical-align: middle;
				span{
					display: inline-block;
					padding: 0 15/@b;
					text-align: center;
					.hg(35/@b);
					box-sizing: border-box;
				}
				.liveFont{
					background: #e4393c;
					border-radius: 5/@b;
					margin-right: 10/@b;
				}
				.goin{
					border:1/@b solid #fff;
					background: rgba(0,0,0,.3);
				}
			}
		}
	}
}
</style>