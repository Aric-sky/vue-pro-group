<template>
	<div class="follow">
	    <div class="newsList">
	    	<ul>
            <li v-for="(item, index) in arrList" :key="index">
            	<a href="javascript:;">
                <h3>{{item.title}}</h3>
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
				this.$http.get('http://ac-MaWKKnTC.clouddn.com/5d2ba5dc80a90a805855.data').then(function(res){

						_this.arrList=res.data;

				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>
