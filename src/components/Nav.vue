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

