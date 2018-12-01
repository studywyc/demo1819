/*$("#bottom li").mouseover(function(){
		var index = $(this).index();
		$("#small img").eq(index).show().siblings("img").hide();
		$("#big img").eq(index).show().siblings().hide();
		$("#mask").css("background","url(images/"+(index+1)+"m.jpg)")
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
	})*/