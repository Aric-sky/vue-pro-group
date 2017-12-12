<template>
  <div class="focnews">
	    <div class="newsList">
	    	<ul>
          <li v-for="(item,index) in arrList" class="cont" :key="index">
            <router-link :to="'/article/'+index">
            	<div class="cont_lf">
            		<img :src="item.author_face">
            	</div>
              <div class="cont_rt out">
              	<p class="newsTile">{{item.title}}</p>
                <p class="newsDetail">
                环球时报-华西都市报<span>60跟帖</span>
                </p>
              </div>
            </router-link>
          </li>
	      </ul>
	    </div>
  </div>
</template>

<script type="ecmascript-6">

	export default {
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
				this.$http.get('http://ac-MaWKKnTC.clouddn.com/bbb0f03f3211ea3f2c61.data').then(function(res){
						_this.arrList=res.data;
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>

