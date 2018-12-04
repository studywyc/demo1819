	var flagName = null;
	$id("uname").onblur = function(){//要求:单词字符组成  6--10位 ，不能用数字开头
		var reg = /^[a-z]\w{5,9}$/i;
		var userTxt = uname.value;
		if( reg.test( userTxt ) ){
			flagName = true;
		}else{
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("单词字符组成  6--10位,不能用数字开头");
			flagName = false;
		}
	}
	//密码：6--18位字符组成       有密码强弱验证 
	var flagPwd = null;
	$id("upwd").onblur = function(){
		var reg = /^.{6,18}$/;
		var userTxt = upwd.value;
		if( reg.test( userTxt )){
			flagPwd = true;
		}else{
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("亲 6-18位字符组成哦");
			flagPwd = false;
		}	
	}
	

Btn.onclick = function(){
	console.log( $("#empt").prop("checked") )
	if( flagName&&flagPwd&&$("#empt").prop("checked")){
		//参数提出来  使用字符串模板
		var data = `status=login&uname=${uname.value}&upwd=${upwd.value}`;//id的value可变的
		var ajax = new XMLHttpRequest();
		ajax.open("GET","../php/login_register.php?"+data);		
		ajax.send();
		ajax.onreadystatechange = function(){
			if( ajax.status == 200 && ajax.readyState==4 ){
			var res = ajax.responseText;
			if(res==1){
				alert( "登录成功" );
				location.href = "../index.html";				
			}else if(res==2 ){
				alert("登录失败");
			}else if(res==0){
				alert("用户名不存在");
				location.href = "register.html";
			}
		}
		}	
	}
}
$("#btnReg").click(function(){
	location.href = "login.html";
})
$("#xuan").click(function(){
	$("#dj").toggle();
})
