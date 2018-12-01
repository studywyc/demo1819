<?php	
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("bd1819",$db);
	mysql_query("set names utf8");
	
	//接口实现登录注册功能
	$status = $_GET["status"];//参数控制登录还是注册功能
	$uname = $_GET["uname"];//接受用户名
	$upwd = $_GET["upwd"];//接受密码
	
	//参数如果是登录功能
	if( $status =="login" ){
		//登录功能
		//编写sql语句
		$sql = "SELECT * FROM `users` WHERE `uname`='$uname'";
		$res = mysql_query($sql);//执行sql语句
		
		$arr = mysql_fetch_array($res);//转成数组;
		//判断用户名是否存在
		if( $arr ){//$arr存在的话
			if( $upwd == $arr["upwd"]){//用户名和密码相等
				echo 1;//登录成功
			}else{
				echo 2;//登录失败
			}
		}else{
			echo 0; //用户名不存在
		}
	}else if( $status =="register" ){//判断用户名是否存在
		//编写sql语句
		$sql = "SELECT * FROM `users` WHERE `uname`='$uname'";
		//执行sql语句
		$ree = mysql_query($sql);
		
		$arr = mysql_fetch_array($ree);
		if( $arr ){//如果数组里有用户名
			echo 0;//用户名已存在 
		}else{//如果是注册功能
		//编写sql语句
		$sql = "INSERT INTO `users`( `uname`, `upwd`) VALUES ('$uname','$upwd')";
		//执行sql语句
		$row = mysql_query($sql);
		if( $row ){
			echo 1;//注册成功
		}else{
			echo 2;//注册失败
		}
	}	
 }
?>