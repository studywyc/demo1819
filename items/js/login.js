//会员名称
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
	
	//确认密码和密码相同
	var flagQpwd = null;
	$id("qpwd").onblur = function(){
		var qpwdTxt = qpwd.value;
		if( upwd.value != qpwd.value ){
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("密码不一致哦!");
			flagQpwd = false;
		}else{
			flagQpwd = true;
		}
	}
	//邮箱： 必须有@符号
	var flagEmail = null;
	$id("email").onblur = function(){
		var reg = /^[1-9]\d{4,11}@[qQ][qQ]\.(com|cn)$/;
		var emailTxt = email.value;
		if( reg.test( emailTxt ) ){
			flagEmail = true;
		}else{
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("不符合qq邮箱规范哦!");			
			flagEmail = false;
		}
	}
	//复选框
	var flagEmpt = null;
	$id("empt").onchange = function(){
		
	}
	
	//随机验证码        !!!有问题
	yz.innerHTML = yzm();
	$("#btnYzm").click(function(){
		$("#yz").html( yzm() );
	})
	var flagYzm = null;
/*	$("#yzm").blur(function(){
		if($("#yzm").html(yzm()) ){
			alert()
		}else{
			alert("no")
		}
	})*/
	$id("yzm").onblur = function(){
		/*var yzmTxt = yzm.value;
		var yzTxt = yz.value;*/
		if( yzm.value = yz.innerHTML){
			flagYzm = true;
		}else{
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("no");	
			flagYzm = false;
		}
	}
	
	Btn.onclick = function(){	
		if( flagName&&flagPwd&&flagQpwd){
			//参数提出来  使用字符串模板
			var data = `status=register&uname=${uname.value}&upwd=${upwd.value}`;
			//console.log( data)//id的value可变的
			var ajax = new XMLHttpRequest();
			ajax.open("GET","../php/login_register.php?"+data);		
			ajax.send();
			ajax.onreadystatechange = function(){
				if( ajax.status == 200 && ajax.readyState == 4 ){
					
					var res = ajax.responseText;
					console.log(res)
					if( res == 0 ){
						alert( "用户名已存在" );
					}else if( res == 1 ){
						alert( "注册成功" );
						location.href="../php/register.html";
					}else if( res == 2 ){
						alert("注册失败");
					}				
				}
			}	
		}
	}	
//
$("#btnlog").click(function(){
	location.href="../php/register.html";
})
	
	
	