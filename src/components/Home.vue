<template>
  <div class="home">
		<v-Slider></v-Slider>
	    <div class="newsList">
	    	<ul>
          <li v-for="(item,index) in arrList" class="cont" :key="index">
            <router-link :to="'/article/'+index">
            	<div class="cont_lf">
            		<img :src="item.smPic">
            	</div>
              <div class="cont_rt">
              	<p class="newsTile">{{item.title}}</p>
                <div class="newsDetail">
                	<p>
                	{{item.summary}}
                	</p>
              	</div>
              </div>
            </router-link>
          </li>
	      </ul>
	      <div class="loadMore" @click='fetchData'>
	      	<span>Load More ... </span>
	      </div>
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
				this.$http.get('http://wangyuanqi.leanapp.cn/api/get').then(function(res){

						_this.arrList = _this.arrList.concat(res.data);

				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>


