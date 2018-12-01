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