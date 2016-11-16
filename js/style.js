 var  chec1 = 0;
 var  chec2 = 0;
 var  chec3 = 0;
var getDom = function(id){
	return  document.getElementById(id);
}
var  check = getDom("check");
var  pass = getDom("pass");
var  repass = getDom("repass");
var  p1 = getDom("p1");
var  p2 = getDom("p2");
var  p3 = getDom("p3");
var  user = getDom("user"); 
var  sub1 = getDom("sub1");
var  sub2 = getDom("sub2");
var  sub3 = getDom("sub3");
var  resetal = getDom("resetall");


function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
     var c = str.charCodeAt(i);
    //单字节加1
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
       len++;
     }
     else {
      len+=2;
     }
    }
    return len;
}
//检验用户名
function  checkusername(){
	if(user.value==""){
		p1.innerHTML = "<font  color='#ff0000'>请输入用户名</font>";
		chec1=0;
		check.disabled=true;
		allow();
		return false;

	}else if(strlen(user.value)<4){
		p1.innerHTML = "<font color='#ff0000'>注册用户名不能少于4个字符！</font>"; 
		chec1 = 0;
		check.disabled = true;
		allow();
		return false;
	}
	else if(strlen(user.value)>20){
		p1.innerHTML = "<font color='#ff0000'>注册用户名不能超过20个字符！</font>"; 
		chec1 = 0;
		check.disabled = true;
		allow();
		return false;
	}
	else{
		p1.innerHTML = "<font color='#AED231'>验证成功</font>"
		chec1=1;
		check.disabled = false;
		allow();
		return false;
	}
}

//检验密码
function checkpassword(){
	if(pass.value==""){
		p2.innerHTML = "<font color='#ff0000'>请输入密码</font>";
		chec2 = 0;
		allow();
		return false;

	}else if(strlen(pass.value)<4){
		 p2.innerHTML = "<font color='#ff0000'>密码不能少于4个字符！</font>";
		 chec2 = 0;
		 allow();
		 return false;
	}
	else if(strlen(pass.value)>20){
		p2.innerHTML = "<font color='#ff0000'>密码不能超过20个字符！</font>"; 
	}else{
		p2.innerHTML = "<font color='#AED231'>密码设置成功</font>";  
		chec2 = 1;
		allow();
		return false;
	}

}
//重复检验密码
function recheckpassword(){
	if(repass.value==""){
		p3.innerHTML = "<font color='#ff0000'>请确认密码！</font>"; 
		chec3 = 0;
		allow();
		return false;
	}else if(pass.value!=repass.value){
		p3.innerHTML = "<font color='#ff0000'>请输入和第一次相同的密码</font>";
		chec3 = 0;
		allow();
		return false;
	}else{
		p3.innerHTML = "<font color='#AED231'>密码设置成功</font>" ;
		chec3 = 1;
		allow();
		return false;
	 
    }
} 
//重置
function resetall() {
  user.value="";
  pass.value="";
  repass.value = "";
  p1.innerHTML = "必填，长度为4-16个字符";
  console.log(p1.innerHTML);
  p2.innerHTML="请尽量使用英文字母加数字或符号的组合密码。";
  p3.innerHTML = "请再输一次密码";
  check.disabled = true;
  chec1 = 0;
  chec2 = 0;
  chec3 = 0;
  allow();
}

function allow(){ 
	if(chec1==1&&chec2==1&&chec3==1){ 
		check.disabled=false; 
	}else{ 
		check.disabled=true; 
		} 
} 


sub1.addEventListener("click",checkusername,false);
sub2.addEventListener("click",checkpassword,false);
sub3.addEventListener("click",recheckpassword,false);
resetal.addEventListener("click",resetall,false);