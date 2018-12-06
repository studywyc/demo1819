function showData(arr,index){
		var conStr = "";
		for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
			var pro = arr[i];
			if( i < arr.length ){
				onStr +=`<div class="CEtrolley">
				<h3 id="pname"  style="margin-top: 15px;">【超级品牌日】雅诗兰黛唇膏口红 倾慕魅色唇膏 保湿滋润 防水 </h3>
				<p style="color: red;">持久滋润 丰唇塑型 魅色出众</p>
				<div class="rate" style="background: #e5e4e4;height: 40px;">
					<label style="color: #ae99ae;">价格</label><span id="get" style="color: red;margin-left: 40px;font-size: 18px;">${ pro.price }</span>
				</div>
				<!-- 地址  -->
				<div class="site" id="select" >
					<label style="margin-right: 30px;">运费</label>浙江杭州至<span style="margin-left: 8px;">请选择地址<i class="iconfont"> &#xe576;</i></span>
				</div>
				<div class="address">
					<div class="zhe" id="">
						<p>请选择</p>				
					</div>
					<div id="Faddress">
						<li class="bei">北京</li>
						<li>天津</li>
						<li>河北</li>
						<li>山西</li>
						<li>内蒙古</li>
						<li>河南</li>
						<li>贵州</li>
						<li>云南</li>
						<li>天津</li>
						<li>澳门</li>
						<li>台湾</li>
						<li>新疆</li>
						<li>宁夏</li>
						<li>广东</li>
						<li>山东</li>
						<li>河北</li>
						<li>广西</li>
						<li>甘肃</li>
						<li>重庆</li>
						<li>江苏</li>
						<li>安徽</li>
					</div>
				</div>
				<div class="appraise">
					<p>累计评价<label style="color: red;">81876</label></p>
					<p class="" style="text-align: center;">|</p>
					<p>送海淘积分<label style="color: blue">315</label></p>
				</div>
			<!--        颜色分类   w:38px   h:38px        -->
				<div class="colour">
					<div class="classification">颜色分类</div>
					<div class="figure" id="figure">
						<ul>
							<li><img src="img/y1.jpg"/></li>
							<li><img src="img/y2.jpg"/></li>
							<li><img src="img/y3.jpg"/></li>
							<li><img src="img/y4.jpg"/></li>
							<li><img src="img/y4.jpg"/></li>
							<li><img src="img/y3.jpg"/></li>
							<li><img src="img/y2.jpg"/></li>
							<li><img src="img/y1.jpg"/></li>
							<li><img src="img/y2.jpg"/></li>
							<li><img src="img/y3.jpg"/></li>
							<li><img src="img/y4.jpg"/></li>
							<li><img src="img/y3.jpg"/></li>
							<li><img src="img/y2.jpg"/></li>
						</ul>
					</div>
					<p style="font-size: 12px; color: #ccc;">发货时间&nbsp;&nbsp;&nbsp;&nbsp;付款后7天内</p>
					<div class="amount">
						<p>数量</p>
						<div class="letter">
							<input type="text" name="" id="plus" value="1" />
							<div class="but">
								<a id="add">+</a>
								<a id="subtract">-</a>
							</div>
							<h5>件</h5>
						</div>
					</div>
				setCookie
				<button class="btns">立即购买</button>
				<button data-pid='${pro.id }' data-pname='${pro.name }' data-src= '${ pro.src }' data-price='${ pro.price }' class="Rtns">加入购物车</button>`;
				
				
				/*onStr += `<li>
								<a href="page.html?pid=${pro.id}">
									<img src="img/${pro.src}" alt="" />
									<p>${ pro.name }</p>
									<p>${ pro.price }</p>
								</a>
								<button data-pid='${pro.id }' data-pname='${pro.name }' data-src= '${ pro.src }' data-price='${ pro.price }'>购买</button>
							</li>`;*/
			}
		}
		$(".CEtrolley").html( conStr );
	}
	
	//点击购买按钮  完成商品的购买功能
	//点击按钮时，获取该按钮对应的商品的所有信息 存入到一个对象中
	//考虑到 用户可能会购买多个商品  将多个商品对象存入到数组中
	//因为按钮是动态创建的，所以使用委托实现为button按钮添加单击事件
	$(".CEtrolley").on("click","button",function(){
		var startObj = $(this);//起始按钮
		var endObj = $(".sp"); //结束按钮
		var $imgObj = $(this).parent().find("img");//获取当前按钮对应的大图对象
		//抛物线方法调用
		$.fnInit(startObj,endObj).fnMove($imgObj);
		
		var flag = true;//假设值为true时  向arr中push新的商品对象
		var arr = [];//存放多个商品对象
		//data()方法用来获取data-*的自定义属性值
		//存放一个商品对象的信息
		var json = {
			"id": $(this).data('pid'),
			"name":$(this).data('pname'),
			"src":$(this).data('src'),
			"price":$(this).data('price'),
			"count":1
		}
		//由于每次单击按钮时会将数组清空
		//所以先取出cookie中的数据 这个数据实际上是一个数组brr
		//将这个数组brr中的数据存入到arr中  
		var brr = getCookie("shoplist");
		//第一次购买商品时  直接将这个商品存入到arr就可以
		if( brr.length != 0 ){
			arr = brr;
			//遍历数组arr  判断当前购买的商品在arr中是否存在
			//如果存在 就将商品的count++
			for( var i = 0 ; i < arr.length ; i++ ){
				if( json.id == arr[i].id ){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		
		if( flag ){
			//将当前购买的商品对象存入到数组中
			arr.push( json );
		}
		
		//将数组存入到cookie中
		setCookie( "shoplist",JSON.stringify( arr )  );
		console.log(document.cookie);
	})
//	/*JSON.parse( "{'name':'lichune'}" )
//	JSON.parse( '{"name":"lichune"}' )*/
//	
//	
//	//封装抛物线插件
//	//第一步  ：  确定三点坐标
//	//商品起始点坐标    终点坐标    最高点
//	//起点坐标x：起始按钮.offset().left+起始按钮.width()/2   y:起始按钮.offset().top
//	//终点坐标x：购物车按钮.offset().left+购物车按钮.width()/2   y:购物车按钮.offset().top
//	//最高点坐标 x ：  终点坐标.x-100    y:   终点坐标.y - 80
//	//根据三点坐标确定抛物线系数 从而确定了抛物线方程
//	//第二步 ： 创建商品 
//	//		创建一张图片，图片的src就是当前按钮对应的大图的src
//	//   对商品的初步样式进行描述   width height position left  top
//	//第三步 ： 商品运动  由定时器控制商品运动
//	$.extend({
//		fnInit : function(startObj,endObj){//功能是确定三点坐标及抛物线方程
//			//起始点
//			this.startPoint = {
//				x : startObj.offset().left + startObj.width()/2,
//				y : startObj.offset().top
//			}
//			//结束点
//			this.endPoint = {
//				x : endObj.offset().left + endObj.width()/2,
//				y : endObj.offset().top
//			}
//			//最高点
//			this.topPoint = {
//				x : this.endPoint.x - 100,
//				y : this.endPoint.y- 80
//			}
//			//根据三点坐标确定抛物线方程系数a b c
//			
//			this.a = ((this.startPoint.y - this.endPoint.y) * (this.startPoint.x - this.topPoint.x) - (this.startPoint.y - this.topPoint.y) * (this.startPoint.x - this.endPoint.x)) / ((this.startPoint.x * this.startPoint.x - this.endPoint.x * this.endPoint.x) * (this.startPoint.x - this.topPoint.x)-(this.startPoint.x * this.startPoint.x - this.topPoint.x * this.topPoint.x) * (this.startPoint.x - this.endPoint.x));  
//								
//			this.b = ((this.endPoint.y - this.startPoint.y) - this.a * (this.endPoint.x * this.endPoint.x - this.startPoint.x * this.startPoint.x)) / (this.endPoint.x - this.startPoint.x);  
//								
//			this.c = this.startPoint.y - this.a * this.startPoint.x * this.startPoint.x - this.b * this.startPoint.x;
//			//console.log( this.a,this.b,this.c );
//			
//			return this;
//		},
//		fnMove : function(imgObj){
//			//创建图片
//			var $img = $("<img>");
//			//将img添加到body中
//			$("body").append($img);
//			//设置img的src为imgObj的src  属性操作
//			$img.attr( "src",imgObj.attr("src") );
//			var x = this.startPoint.x;//商品的起始点x
//			var y = this.startPoint.y;//商品的起始点y
//			//对商品的样式进行描述
//			$img.css({
//				width:30,
//				height:30,
//				position:"absolute",
//				left : x,
//				top : y
//			})
//			//商品开始运动
//			var timer = setInterval(function(){
//				x = x + 10;
//				y = this.a*x*x + this.b*x + this.c;
//				if( x < this.endPoint.x ){
//					//设置商品运动的left和top值的变化
//					$img.css({
//						left : x,
//						top : y
//					})
//				}else{
//					clearInterval(timer);
//					$img.remove();
//					$("#shopNum").html( Number($("#shopNum").html()) + 1 );
//				}
//			}.bind(this),20)
//		}
//	});
//	
//	//定义一个函数 功能是统计购物车中商品的数量
//	//也就是将每一个商品的count累加
//	getCount();
//	function getCount(){
//		var brr = getCookie("shoplist");
//		var count = 0;
//		if( brr.length != 0 ){
//			for( var i = 0 ; i < brr.length ; i++ ){
//				count += brr[i].count;
//			}
//			$("#shopNum").html(count);
//		}
//	}