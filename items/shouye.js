var timer = null,
		index = 0,
		$ulist = $(".biglb ul li"),
		$olist = $(".bo1 li");
	timer = setInterval( autoPlay , 2000 );
	function autoPlay(){
		index++;
		if( index == $ulist.size() ){
			index = 0;
		}
		$olist.eq(index).addClass("current").siblings().removeClass("current");
		$ulist.eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}
	$olist.mouseenter(function(){
		clearInterval( timer );
		index = $(this).index()-1;
		autoPlay();
	}).mouseleave( function(){
		timer = setInterval( autoPlay , 2000 );
	} )
	
//侧边栏 ---- 点击按钮回到顶部
	var $btn = $("#btn");
	//当鼠标滑过顶部是  按钮出现
	$(window).scroll(function(){
		//获取页面滚走的距离
		var stop = document.documentElement.scrollTop ||document.body.scrollTop;
		if( stop > 32 ){
			$(".lastBar").css("display","block");
		}else{
			$(".lastBar").css("display","none");
		}
	})
	$btn.click(function(){
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	})
	
//轮播
	function potplay(){
	var timer = null;
	var index = 0;
	var $ulist = $(".carousel li");
	var $olist = $(".oul li");
	timer = setInterval(autoPlay,2000);
	function autoPlay(){
		index++;
		if( index == $olist.size() ){
			index = 0;		
		}
		$olist.eq(index).addClass("active").siblings().removeClass("active");
    	$ulist.eq(index).animate( {left : 0},1000 ,function(){
    		$(this).css("zIndex",0).siblings().css({"zIndex":1,"left" : 660})
    	})
    	//console.log($ulist)
	}
	}	
	potplay();
	

//           放大镜       shop.html
function fnBig(){
	$("#bottom li").mouseover(function(){
		var index = $(this).index();
		$("#small img").eq(index).show().siblings("img").hide();
		$("#big img").eq(index).show().siblings().hide();
		$("#mask").css("background","url(img/"+(index+1)+"m.jpg)")
	})
	//鼠标移入移出small盒子  显示或隐藏大图显示区big  和 mask
	$("#small").on({
		"mouseover":function(){
			$("#big").show();
			$("#mask").show();
			$("#layer").show();
		},
		"mouseout":function(){
			$("#big").hide();
			$("#mask").hide();
			$("#layer").hide();
		},
		"mousemove":function(evt){
			var e = evt || event;
			var x = e.clientX - $("#small").offset().left - $("#mask").width()/2;
			var y = e.clientY - $("#small").offset().top - $("#mask").height()/2;
			
			var mx = $("#small").width()  - $("#mask").width();
			var my = $("#small").height()  - $("#mask").height();
			
			//边界处理
			x = x<=0 ? 0 : x>=mx ? mx : x;
			y = y<=0 ? 0 : y>=my ? my : y;
			
			//大图宽度/小图宽度 = 大图偏移 / mask的偏移
			var bigImageX = -x * $(".bigImage").width() / $("#small").width();
			var bigImageY = -y * $(".bigImage").height() / $("#small").height();
			$("#mask").css({
				"left":x + "px",
				"top":y+"px",
				"background-position-x":-x+"px",
				"background-position-y":-y+"px"
			})
			
			$(".bigImage").css({
				"left" : bigImageX+"px",
				"top" : bigImageY+"px"
			})
		}
	})
	}


//   fnCEtrolley
function fnCEtrolley(){
	//点击请选择地址显示下拉菜单
	$("#select span").click(function(){
		$(".address").stop().slideToggle(500);
	})

	$("#Faddress li").mouseenter(function(){
		$(this).css({"background":"red","color":"#fff"}).siblings().css({"color":"black","background":""})

	}).click(function(){
		var index = $(this).index();
		$(".zhe p").html( $(this).html() );
		$( "#select span" ).html( $(this).html() );
		$(".address").css("display","none");
		
	})
	//点击颜色分类的图片加边框
	$("#figure li").click(function(){	
		$(this).css("border","1px solid red").siblings().css("border","");
	})
	
	//点击支付方式显示下拉支付
	$("#btna").click(function(){
		$("#yin").toggle()
		$(".payment").toggle()	
	})
	//划入支付方式显示下划线
	$(".payment li").mouseenter(function(){
		$(this).css("text-decoration","underline").siblings().css("text-decoration","none");
	})
}

//---------   top 轮播图      ----------
function fnLbt(){
	var index = 0;
	$(".botm_b").click(function(){
		index++;
		console.log($("#topUl li").size());
		if(index == 7){
			$("#topUl ul").css("top",0);
			index = 1;
		}
		$("#topUl ul").stop().animate({"top":( -index*(180) )} , 400);
	})
	
	$(".botm_t").click(function(){
		index--;
		console.log($("#topUl li").size());
		if( index == -1 ){
			$("#topUl ul").css("top",-1080);
			index = 5;
		}
		$("#topUl ul").stop().animate({"top":( -index*(180) )} , 400);
	})
	
	
	
	
	$(".botm_t").mouseenter(function(){
		$(this).css({"font-weight":"bolder","color":"#5f5959"})
	}).mouseleave(function(){
		$(this).css({"font-weight":"100","color":""})
		
	})
	$(".botm_b").mouseenter(function(){
		$(this).css({"font-weight":"bolder","color":"#5f5959"})
	}).mouseleave(function(){
		$(this).css({"font-weight":"100","color":""})
		
	})
	
}
