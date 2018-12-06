
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
new fnScro().init();
function fnScro(){
	this.body = $(".sidebar");	
	this.down = $(".lastBar");
	this.btn = $("#btn");
	this.init = function(){
		$(window).scroll(function(){
			this.stop = document.documentElement.scrollTo()||document.body.scrollTop;
			if( this.stop > 32 ){
				this.down.css("display","block");
			}else{
				this.down.css("display","none");
			}
		}.bind(this))
	}
	this.btn.click(function(){
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	})
}
/*new fnSmallFdj().init();
function fnSmallFdj(){
	this.body = $(".cen");
	this.ulist = $(".carousel li");
	this.olist = $("oul li");
	this.timer = 0;
	this.index = 0;
	this.init = ()=>{
		this.timer = setInterval(autoPlay(),2000);
		console.log(this.timer)
		function autoPlay(){
			this.index++;
			if( this.index == this.olist.size() ){
				this.index = 0;
			}
			this.olist.eq(this.index).addClass("active").siblings().removeClass("active");
			this.ulist.eq(this.index).animate( {left : 0},1000,function(){
				this.ulist.css("z-index",0).siblings().css({"z-index":1,"left":660})
			} ) 	
		}
	}
}*/
//fnSmallFdj();
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
		}
	}	
	potplay();
	

//           放大镜       shop.html
function FdjShop(){
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
//放大镜         ***
function Gshop(){
	var body = location.href;
	var id = body.split("=")[1];
	var ajax = new XMLHttpRequest();
	var small = $("#small");
	var big = $("#big");
	var bottom = $("#bottom");
	ajax.open("get","json/home.json");
	ajax.send();
	ajax.onreadystatechange =function(arr){
		if( ajax.status == 200 && ajax.readyState == 4 ){
			var arr = JSON.parse(ajax.responseText);
			var str = "";
			var suv = "";
			var sum = "";
			for( var i = 0 ; i < arr.length ; i++ ){
				if( id == arr[i].src ){					
				str +=`<img src="img/${arr[i].s1}" alt=""/>
				         <img src="img/${arr[i].s2}" alt=""/> 
				         <img src="img/${arr[i].s3}" alt=""/> 
				         <img src="img/${arr[i].s4}" alt=""/>
				         <div id="layer"></div>
				    	 <div id="mask"></div>`;   	 
				sum +=`<img src="img/${arr[i].b1}" class="bigImage"/>
						<img src="img/${arr[i].b2}" class="bigImage"/>
						<img src="img/${arr[i].b3}" class="bigImage"/>
						<img src="img/${arr[i].b4}" class="bigImage"/>` ;
						
				suv +=`<li><img src="img/${arr[i].d1}" alt=""/></li>
				        <li><img src="img/${arr[i].d2}" alt=""/></li>
				        <li><img src="img/${arr[i].d3}" alt=""/></li>
				        <li><img src="img/${arr[i].d4}" alt=""/></li>`;
				}				
			}
			$("#small").html(str);	
			$("#big").html(sum);
			$("#bottom").html(suv);
			
			$("#bottom").on( "mouseenter" , "li", function(){
				var index = $(this).index();
				$("#small img").eq(index).show().siblings("img").hide();
				$("#big img").eq(index).show().siblings().hide();
				$("#mask").css("background","url(img/"+(index+1)+"m.jpg)")//***index+5m
			} )
			
		}
		
	}
	
	
}
Gshop();

function fnHome(){
	var pageNum = 1;
	var ajax = new XMLHttpRequest();
	ajax.open("get","json/home.json");
	ajax.send();
	ajax.onreadystatechange =function(arr){
		if( ajax.status == 200 && ajax.readyState == 4 ){
			var arr = JSON.parse(ajax.responseText);
			var str = "";
			for( var i = 0; i<arr.length;i++ ){
				str +=`<div id="" class="mainCount">
						<div id="" class="ltCount">
						<li><a href="shop.html?id=${arr[i].src}"><img src="img/${arr[i].src}"/></a></li>
						</div>
						<div id="" class="cenmain">
						<li><a style="color: red;" href="">Bloomingdale's</a></li><img src="img/fanli.jpg"/>									
						<br /><h3><a  href="">${arr[i].pic}</a></h3>
						<h4><a  href="">${arr[i].pname}</a></h4>
						<p>${arr[i].pcon}</p>
						<li class="small"><label>推荐</label> 拔草 两天前</li>
						<button><a href="">详情咨询  ></a></button>
						</div>							
						</div>`;
			}
			$(".auto").html(str);
		}
	}
}	


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

//---------  详情页右侧 top 轮播图      ----------   ******************
new fnTopLb().init();
function fnTopLb(){
	this.body = $("#boxTop");
	this.Lbtn = $(".botm_b");
	this.Rbtn = $(".botm_t");
	this.oUl = $(".opUl");
	this.index = 0;
	this.init = ()=>{
		this.index++;
		this.Lbtn.click(function(){
			if( this.index <= 1 ){
				this.oUl.stop().animate({"top" : -this.index*540},800);
			}else{
				this.index--;
			}
		}.bind(this))
		
		this.Rbtn.click(function(){
			this.index--;
			if( this.index >= 0 ){
				this.oUl.stop().animate({"top":-this.index*540},800);
			}else{
				index++;
			}
		}.bind(this))
		//上下箭头移入移出
		this.Rbtn.mouseenter(function(){
			this.Rbtn.css({"font-weight":"bolder","color":"#5f5959"})
		}.bind(this)).mouseleave(function(){
			this.Rbtn.css({"font-weight":"100","color":""})
		}.bind(this))
		
		this.Lbtn.mouseenter(function(){
			this.Lbtn.css({"font-weight":"bolder","color":"#5f5959"})
		}.bind(this)).mouseleave(function(){
			this.Lbtn.css({"font-weight":"100","color":""})
		}.bind(this))
	}
}

new Cbl().init();
function Cbl(){
	this.body = $(".track");
	this.troll = $(".fntrolley");
	this.all = $("#scAll");
	this.coll = $("#collect");
	this.lb1 = $("#lb1");
	this.d1 = $(".track_d1");
	this.init =()=>{
		this.troll.mouseenter(function(){
			this.body.fadeToggle(800)
		}.bind(this))
		
		this.all.mouseenter(function(){
			this.coll.fadeToggle(500)
		}.bind(this)).mouseleave(function(){
			this.coll.css("display","none");
		}.bind(this))
		this.d1.mouseenter(function(){
			this.lb1.fadeToggle(500)
		}.bind(this)).mouseleave(function(){
			this.lb1.css("display","none");
		}.bind(this))
		
	}
}

function fnData(){
	var ajax = new XMLHttpRequest();
	ajax.open("get","json/xqy.json");
	ajax.send();
	ajax.onreadystatechange = function(){ 
		if( ajax.status == 200 && ajax.readyState == 4 ){
			var arr = JSON.parse(ajax.responseText);
			var str = "";
			for( var i = 0;i<arr.length;i++ ){
				str+=`<li>
						<img src="img/${arr[i].src}"/>
					  </li>`;
			}
			main.innerHTML = str;
		}
	}
}

function fnShop(){
	var ajax = new XMLHttpRequest();
	ajax.open("get","json/shopXq.json");
	ajax.send();
	ajax.onreadystatechange =function(){
		if( ajax.status == 200 && ajax.readyState == 4 ){
			var arr = JSON.parse(ajax.responseText);
			var str = "";
			for( var i = 0;i<arr.length; i++ ){
				str += `<li>
							<img src="img/${arr[i].src}"/>
						</li>`;
			}
			mainTwo.innerHTML = str;
		}
	}
}

//吸顶
function dnXd(){
	  $(window).scroll(function(){
	  		//获取页面滚走的距离
	  		var stop = document.documentElement.scrollTop ||document.body.scrollTop;
	  		if( stop >809 ){
	  			$(".Clauder").css({
	  				"position":"fixed",
	  				"top":0
	  			}) 				
	  		}else{
	  			$(".Clauder").css({"position":"","width":"738px"});
	  		}
	  	})
}
dnXd();






