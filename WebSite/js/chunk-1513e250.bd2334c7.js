(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1513e250"],{"05f2":function(t,e,i){t.exports=i.p+"img/cooperation-part2.1c68dbca.jpg"},"1ad5":function(t,e,i){},2154:function(t,e,i){"use strict";var n=i("1ad5"),a=i.n(n);a.a},"53d9":function(t,e,i){t.exports=i.p+"img/home-banner-img2-3.6257ace9.png"},"7f7f6":function(t,e,i){"use strict";var n=i("d086"),a=i.n(n);a.a},"8ef1":function(t,e,i){t.exports=i.p+"img/home-banner-phone3.f66b901d.png"},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"banner-bg"},[n("div",{staticClass:"banner-img"}),n("div",{staticClass:"main-content banner-sub-img-container",style:{height:t.bannerHeight+"px",top:-(""+t.bannerHeight)+"px"}},[n("img",{staticClass:"banner-img1",attrs:{src:i("c7d8"),alt:""}}),n("img",{staticClass:"banner-img2",attrs:{src:i("53d9"),alt:""}}),n("img",{staticClass:"banner-img3",attrs:{src:i("8ef1"),alt:""}})])]),n("div",{staticClass:"section-container section1"},[n("div",{staticClass:"main-content section-content"},[n("div",{staticClass:"home-title"},[t._v("创新产品")]),n("div",{staticClass:"ht-b-line"}),n("el-carousel",{staticClass:"carousel-activity",attrs:{height:t.newsHeight+"px",arrow:"never",interval:t.interval}},t._l(t.newsData,function(e,i){return n("el-carousel-item",{key:e.title},[n("div",{staticClass:"activity-item-top-bg"}),n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.activityClick(i)}}},[n("img",{staticClass:"activity-img",style:"height:"+(t.newsHeight-t.newsDescHeight)+"px;",attrs:{src:""+t.publicPath+e.image}})]),n("div",{class:{"activity-content-webkit":t.isWebkit,"activity-content":!t.isWebkit,"content-ellipsis":!t.isWebkit&&t.isEllipsis(e.content)}},[t._v(t._s(e.content))])])}),1)],1)]),n("div",{staticClass:"section-container section2"},[n("div",{staticClass:"main-content section-content"},[n("div",{staticClass:"home-title"},[t._v("使用说明")]),n("div",{staticClass:"ht-b-line ht2"}),n("el-menu",{staticClass:"home-menu",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("券的使用及兑换")]),n("el-menu-item",{attrs:{index:"2"}},[t._v("卡的使用及兑换")]),n("el-menu-item",{attrs:{index:"3"}},[t._v("券的闪送及领取")])],1),n("img",{directives:[{name:"show",rawName:"v-show",value:"1"===t.activeIndex,expression:"activeIndex === '1'"}],staticClass:"home-image use-img",attrs:{src:i("ca61"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:"2"===t.activeIndex,expression:"activeIndex === '2'"}],staticClass:"home-image use-img",attrs:{src:i("f456"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:"3"===t.activeIndex,expression:"activeIndex === '3'"}],staticClass:"home-image use-img",attrs:{src:i("bd15"),alt:""}})],1)]),n("div",{staticClass:"section-container section3"},[n("div",{staticClass:"main-content section-content"},[n("div",{staticClass:"home-title"},[t._v("客户案例")]),n("div",{staticClass:"ht-b-line"}),n("div",{staticClass:"vender-desc"},[t._v("\n        涵宇鑫是中国领先的B2B电子券兑换服务提供商，针对企业及商户需求为其提供成熟、完善且多元化的兑换服务。\n      ")]),n("img",{staticClass:"home-image",attrs:{src:i("05f2"),alt:""}}),n("div",{staticClass:"more-vender-container"},[n("router-link",{staticClass:"more-vender",attrs:{to:"/cooperation"}},[n("span",{staticClass:"more"},[t._v("更多")]),n("img",{attrs:{src:i("6664"),alt:""}})])],1)])])])},a=[],s=i("3b47"),c={name:"Home",data:function(){return{interval:6e3,publicPath:"",activeIndex:"1",newsData:[],banners:[],bannerHeight:0,screenWidth:0,remRatio:100,newsDescHeight:138,newsHeight:370*window.aldcontentwidth/1200+this.newsDescHeight,activityContentWidth:1e3,isWebkit:!0}},created:function(){var t=this;s["a"].loadPageData("home").then(function(e){t.newsData=e.newsData,t.banners=e.banners}).catch(function(t){}),this.getBannerHeight(),this.checkWebkit()},mounted:function(){this.$store.commit("changePageName","Home");var t=this;window.addEventListener("resize",function(){t.getBannerHeight()},!1)},methods:{handleSelect:function(t){this.activeIndex=t},getBannerHeight:function(){this.remRatio=parseInt(document.documentElement.style.fontSize),this.screenWidth=document.documentElement.clientWidth||window.innerWidth,this.activityContentWidth=window.aldcontentwidth-90,this.bannerHeight=470,this.newsHeight=234*window.aldcontentwidth/766+this.newsDescHeight},activityClick:function(t){this.$router.push({path:"/activity/detail",name:"ActivityDetail",query:{page:this.newsData[t]["category"],id:t,from:"home"}})},checkWebkit:function(){var t=navigator.userAgent.toLowerCase(),e=(navigator.appVersion,t.indexOf("gecko")>-1&&-1==t.indexOf("khtml")),i=t.indexOf("trident")>-1;this.isWebkit=!e&&!i},isEllipsis:function(t){var e=document.createElement("div");e.innerHTML=t,e.style.whiteSpace="nowrap",e.style.position="absolute",e.style.opacity=0,e.style.fontSize="18px",document.body.appendChild(e);var i=e.clientWidth;return document.body.removeChild(e),i>=3*this.activityContentWidth}},computed:{fullImgPath:function(){return"".concat(this.publicPath,"aladingImages")},showIndicator:function(){return this.banners.length<=1?"none":""}}},o=c,r=(i("7f7f6"),i("2154"),i("2877")),d=Object(r["a"])(o,n,a,!1,null,"4dda209e",null);e["default"]=d.exports},bd15:function(t,e,i){t.exports=i.p+"img/home-intruction-present.dcf68dd6.png"},c7d8:function(t,e,i){t.exports=i.p+"img/home-banner-img1-3.290d529a.png"},ca61:function(t,e,i){t.exports=i.p+"img/home-intruction-voucher.5e5e3430.png"},d086:function(t,e,i){},f456:function(t,e,i){t.exports=i.p+"img/home-intruction-card.8347d9d6.png"}}]);
