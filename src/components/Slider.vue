<template>
  <div class="slider">
    <ul class="clearfix">
        <li v-for="(item,index) in imgList" :key="index">
          <img :src="item.imgs" alt=""/>
        	<div class="text-box">
          	<h2>{{item.bigt}}</h2>
            <p>{{item.smt}}</p>
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
    data(){
      return {
        imgList:[1]
      }
    },
    created(){
      this.getData()
    },
		methods:{
			fnSlider(){
        setTimeout(()=>{
          var mySwipe=new Swipe($('.slider')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
              $('.slider ol li').removeClass('active');
              $('.slider ol li').eq(index).addClass('active');
            }
          });
        }, 100);

			},
      getData(){
        var _this=this;

        this.$http.get('http://ac-MaWKKnTC.clouddn.com/fce8de735d7bdfe1d600.data').then(async function(res){
          _this.imgList=res.data;
            await _this.fnSlider();
        }).catch(function(err){
          console.log(err);
        });
      }
		}
	}
</script>


