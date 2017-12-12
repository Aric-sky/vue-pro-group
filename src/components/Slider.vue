<template>
  <div class="slider">
    <ul class="clearfix">
        <li><img src="https://gw.alicdn.com/tfs/TB12uisaogQMeJjy0FjXXaExFXa-750-394.jpg" alt=""/>
        	<div class="text-box">
            	<h2>big11111</h2>
                <p>11111 / 文</p>
            </div>
        </li>
        <li><img src="https://gw.alicdn.com/tfs/TB12uisaogQMeJjy0FjXXaExFXa-750-394.jpg" alt=""/>
        	<div class="text-box">
            	<h2>big222222</h2>
                <p>22222 / 文</p>
            </div>
        </li>
        <li><img src="https://gw.alicdn.com/tfs/TB12uisaogQMeJjy0FjXXaExFXa-750-394.jpg" alt=""/>
        	<div class="text-box">
            	<h2>big333</h2>
                <p>33333 / 文</p>
            </div>
        </li>
        <li><img src="https://gw.alicdn.com/tfs/TB12uisaogQMeJjy0FjXXaExFXa-750-394.jpg" alt=""/>
        	<div class="text-box">
            	<h2>big4444</h2>
                <p>4444 / 文</p>
            </div>
        </li>
    </ul>
    <ol>
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
    </ol>
  </div>
</template>

<script type="ecmascript-6">

	export default {
		mounted(){
			this.fnSlider();
		},
		watch:{
			// '$route':function(){
			// 	alert(1);
			// }
		},
		methods:{
			fnSlider(){
				$(function (){
					var mySwipe=new Swipe($('.slider')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.slider ol li').removeClass('active');
							$('.slider ol li').eq(index).addClass('active');
						}
					});
				});
			}
		}
	}
</script>

<style scoped lang="less" type="text/css">
@import '../../static/css/mixin.less';

.slider{
	position: relative;
	overflow: hidden; 
	z-index: 1;
	ul li{
		.w75;
		float:left;
		position: relative;
		img{
			width:100%; 
			display:block;
		}
		.text-box{
			.w75;
			padding:0 30/@b;
			height:100/@b;
			box-sizing: border-box;
			position:absolute; 
			left:0; 
			bottom:0; 
			color:#fff; 
			background:rgba(0,0,0,0.5);
			h2{
				font-size:0.3rem; 
				font-weight:normal; 
				margin-top:0.22rem; 
				line-height:100%; 
				margin-bottom:0.22rem; 
				overflow:hidden;
				white-space:nowrap;
				text-overflow:ellipsis;
			}
		}
	}
	ol{
		position:absolute; 
		right:20/@b;
		bottom:20/@b;
		li{
			width:15/@b;
			height:15/@b; 
			background:#5477b2; 
			float:left; 
			border-radius:50%; 
			margin-right:8/@b;
			&.active{
				background:#fff;
			}
		}
	}
}




</style>
