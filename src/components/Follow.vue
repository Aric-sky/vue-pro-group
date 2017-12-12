<template>
	<div class="content">
	    <div class="newsList">
	    	<ul>
            <li v-for="(item, index) in arrList">
            	<a href="javascript:;">
                <h2>{{index+1}} .{{item.title}}</h2>
                <p>{{item.detail}}</p>
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
				this.$http.get('static/data/follow.data').then(function(res){
					//console.log( res.data);
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

.content{
	.w75;
	height: 100%;
	background:#f2f4f5; 
	padding:150/@b 0 100/@b;
	box-sizing: border-box;
	.newsList{
		width: 700/@b;
		height: 100%;
		margin:0 auto;
		li{
			margin-bottom: 10/@b;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
}
</style>