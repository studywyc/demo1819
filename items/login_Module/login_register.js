define(function(){
	return {
		checkName : function(str){
			var reg = /^[a-z]\w{5,9}$/i;
			if( reg.test(str) ){
				return true;
			}else{
				return false;
			}
		},
		checkpwd : function(str){
			var reg = /^.{6,18}$/;
			if( reg.test( str ) ){
				return true;
			}else{
				return false;
			}
		},
		checkRePwd : function(str1,str2){ //确认密码
			return str1 == str2 ? true : false;
		},
		checkEmail : function(str){
			var reg = /^[1-9]\d{4,11}@[qQ][qQ]\.(com|cn)$/;
			if( reg.test( str ) ){
				return true;
			}else{
				return false;
			}
		},
		checkScroll : function(stop,str){
			return stop > str ? true : false;
		},

		
	}
})

	//随机验证码        !!!有问题
	/*yz.innerHTML = yzm();
	$("#btnYzm").click(function(){
		$("#yz").html( yzm() );
	})*/
	
	//var flagYzm = null;
	/*$("#yzm").blur(function(){
		if($("#yzm").html(yzm()) ){
			alert()
		}else{
			alert("no")
		}
	})*/
	/*
	$id("yzm").onblur = function(){
		var yzmTxt = yzm.value;
		var yzTxt = yz.value;
		if( yzm.value = yz.innerHTML){
			flagYzm = true;
		}else{
			$("#s1").css("display","block").stop().fadeToggle(3000);
			$("#s1").html("no");	
			flagYzm = false;
		}
	}*/

	
	
	