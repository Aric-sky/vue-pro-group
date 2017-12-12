<template>
	<div class="liveshow">
	    <div class="liveList">
	    	<ul>
            <li v-for="(item, index) in arrList" :key="index">
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
				this.$http.get('http://ac-MaWKKnTC.clouddn.com/14f66064b8c465a7a8a2.data').then(function(res){

						_this.arrList=res.data;

				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>
