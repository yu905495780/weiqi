window.onload=function(){
	var inp=document.getElementsByTagName("input")
	var pass=document.getElementsByClassName("pass")
	inp[3].onclick=function(){
		if(inp[0].value==""||inp[1].value==""||inp[2].value==""){
			pass[0].innerHTML="请输入手机号"
			pass[1].innerHTML="请输入密码"
			pass[2].innerHTML="请输入验证码"
		}else{
			pass[0].innerHTML=" "
			pass[1].innerHTML=" "
			pass[2].innerHTML=" "
		}
	}
}
