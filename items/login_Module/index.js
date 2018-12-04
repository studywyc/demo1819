requirejs.config({
	paths :{
		"jquery" : "jquery-1.11.1.min",
		"log" : "login_register",
	}
})

//引入模块功能 
requirejs([ "jquery" , "log"],function($,log,pbl){
	
	//注册
	$("#TBtn").click(function(){
		console.log( $("#empt").prop("checked") );//判断是否选中状态		
		if( flagName&&flagYzm&&flagPwd&&flagQpwd&&flagEmail&&$("#empt").prop("checked")){
			//参数提出来  使用字符串模板
			var data = `status=register&uname=${uname.value}&upwd=${upwd.value}`;
			//console.log( data)//id的value可变的
			var ajax = new XMLHttpRequest();
			ajax.open("GET","login_register.php?"+data);		
			ajax.send();
			ajax.onreadystatechange = function(){
				if( ajax.status == 200 && ajax.readyState == 4 ){
					
					var res = ajax.responseText;
					console.log(res)
					if( res == 0 ){
						alert( "用户名已存在" );
					}else if( res == 1 ){
						alert( "注册成功" );
						location.href="register.html";
					}else if( res == 2 ){
						alert("注册失败");
					}				
				}
			}	
		}
	})
	function rand(min,max){
	return Math.round(  Math.random()*(max-min) + min );
}
	function yzm(){
	var str = "";//用来存放验证码
	for( var i = 1 ; i <= 6 ; i++ ){
		var code = rand(48,122);
		if( code >= 58&&code <= 64 ||code >= 91 && code <= 96 ){
			i--;
		}else{
			var ch = String.fromCharCode( code );
			str += ch;
		}
	}
	return str;
}
	//验证码
	$("#yz").html(yzm());
	$("#btnYzm").click(function(){
		$("#yz").html(yzm());
	})
	var flagYzm = null;
	$("#yzm").blur(function(){
		var str = $(this).val();
		if( str == $("#yz").html() ){
			flagYzm = true;
		}else{
			$("#s1").css("display","block");
			$("#s1").html( "验证码错误" );
			flagName = false;
		}
	})
	


	//验证会员名称
	var flagName = null;
	$("#uname").blur(function(){
		var str = $(this).val();
		if( log.checkName( str ) ){
			flagName = true;
		}else{
			$("#s1").css("display","block");
			$("#s1").html( "单词字符组成  6--10位,不能用数字开头" );
			flagName = false;
		}
	})
	
	//验证  密码：6--18位字符组成       有密码强弱验证 
	var flagPwd = null;
	$("#upwd").blur(function(){
		var str = $(this).val();
		if( log.checkpwd( str ) ){
			flagPwd = true;
		}else{
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("亲 6-18位字符组成哦");
			flagPwd = false;
		}
	})
	//验证确认密码
	var flagQpwd = null;
	$("#qpwd").blur(function(){
		var strQ = $(this).val();//确认密码
		var strY = $("#upwd").val();//原密码
		if( log.checkRePwd( strQ , strY ) ){
			flagQpwd = true;
		}else{
			flagQpwd = false;
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("密码不一致哦!");
		}
	})
	
	//验证邮箱
	var flagEmail = null
	$("#email").blur(function(){
		var str = $(this).val();
		if( log.checkEmail( str ) ){
			flagEmail = true;
		}else{
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("不符合qq邮箱规范哦!");			
			flagEmail = false;
		}
	})
	
	//侧边栏 点击按钮回到顶部
	$(window).scroll(function(){
		var stop = document.documentElement.scrollTop ||document.body.scrollTop;
		var str = $(".lastBar").height();
		if( log.checkScroll(stop,str) ){
			$(".lastBar").css("display","block");
		}else{
			$(".lastBar").css("display","none");
		}
	})
	$("#btn").click(function(){
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	})
	
$("#btnlog").click(function(){
	location.href="../php/register.html";
})	
	
	//登录
	$("#Btn").click(function(){
		console.log($("#zhucc").html())
		console.log( $("#empt").prop("checked") )
		if( flagName&&flagPwd&&$("#empt").prop("checked")){
			//参数提出来  使用字符串模板
			var data = `status=login&uname=${uname.value}&upwd=${upwd.value}`;//id的value可变的
			var ajax = new XMLHttpRequest();
			ajax.open("GET","login_register.php?"+data);		
			ajax.send();
			ajax.onreadystatechange = function(){
				if( ajax.status == 200 && ajax.readyState==4 ){
				var res = ajax.responseText;
				if(res==1){
					alert( "登录成功" );
					location.href = "../index.html";
					$("#zhucc").html("aa");
					
				}else if(res==2 ){
					alert("登录失败");
				}else if(res==0){
					alert("用户名不存在");
					location.href = "register.html";
				}
			}
			}	
		}	
	})
	$("#btnReg").click(function(){
		location.href = "login.html";
	})
	$("#xuan").click(function(){
		$("#dj").toggle();
	})
	
} )