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
	        <div class="time">
	        	<p>{{articleData.createdAt}} 
	        		<span>
	        			<img src="https://gw.alicdn.com/tfs/TB1GOL8agoQMeJjy0FoXXcShVXa-23-22.png" alt=""/>
	        		</span>
	        	</p>
	        </div>
	        <div class="text-box" v-html="articleData.textBody"></div>
		   </div>
		</div>
		<div class="foot-btn">
			<ul>
	    	<li class="say"><a href="javascript:;" @click="numAdd('say',$event)">
	        	<i></i><span>{{sayNum}}</span>
	        </a>
	      </li>
	    	<li class="zan"><a href="javascript:;" @click="numAdd('zan',$event)">
	        	<i></i><span>{{zanNum}}</span>
	        </a>
	      </li>
	    	<li class="xing"><a href="javascript:;" @click="numAdd('xing',$event)">
	        	<i></i><span>{{xingNum}}</span>
	        </a>
	      </li>
	    	<li class="fx"><a href="javascript:;" @click="numAdd('fx',$event)">
	        	<i></i><span>{{fxNum}}</span>
	        </a>
	      </li>
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
				articleData:{},
				sayNum:0,
				zanNum:0,
				xingNum:0,
				fxNum:0
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
				_this.$http.get('http://wangyuanqi.leanapp.cn/api/single/'+id).then(function(res){
					_this.articleData=res.data.results;
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			},
			numAdd(elem,e){
				switch(elem){
					case 'say':
						this.sayNum++;
						break;
					case 'zan':
						this.zanNum++;
						break;
					case 'xing':
						this.xingNum++;
						break;
					case 'fx':
						this.fxNum++;
						break;
					default:
						break;
				}
			}
		}
	}
</script>
