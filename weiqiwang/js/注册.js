window.onload=function(){
	var inp=document.getElementsByTagName("input")
	var pass=document.getElementsByClassName("pass")
	inp[6].onclick=function(){
		if(inp[5].checked!=true){alert("请您注意相关条款！")}
		if(inp[0].value==""||inp[1].value==""||inp[2].value==""||inp[3].value==""||inp[4].value==""){
			pass[0].innerHTML="必填字段！"
			pass[1].innerHTML="请输入手机号！"
			pass[2].innerHTML="请输入短信验证码！"
			pass[3].innerHTML="请输入密码！"
			pass[4].innerHTML="请输入密码！"
		}else{
			pass[0].innerHTML=" "
			pass[1].innerHTML=" "
			pass[2].innerHTML=" "
			pass[3].innerHTML=" "
			pass[4].innerHTML=" "
		}
	}
}