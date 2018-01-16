function sign_up(){

	var name=document.getElementById("uname").value;
	var password=document.getElementById("pwd").value;
	var cpassword=document.getElementById("cpwd").value;
	var mobno=document.getElementById("mobno").value;


	if(name.length==0){
		alert("Username should not be empty");

	}
	else if(password!=cpassword){
		alert("password doesn't match");
	}
	else if(!(allnumeric(mobno)) || mobno.length!=10){
		alert("Mobile number should have 10 digit");
	}
	else{
		alert("Successfully Registered");
		window.location="login.html";
	}
}

function allnumeric(mobno){

	var numbers= /^[0-9]+$/;
	if(mobno.match(numbers))
	{
		return true;

	}
	else{
		return false;
	}
}