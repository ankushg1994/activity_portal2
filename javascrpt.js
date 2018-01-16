
function goBack()
{
  window.history.back();
}
function goTo()
{
  window.history.go(-1);
}
function goForward()
{
  window.history.forward();
}



function signup()
{
  alert("Succesfully signed up..");
    window.location="myPortalMenu.html";

}

function focuss()
{
	document.getElementById("guest").style.background='lightpink';
}

function check()
{
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var emp=document.getElementById("emp").value;
	var mob=document.getElementById("mob").value;
	var dob=document.getElementById("dob").value;
	var uname=document.getElementById("uname").value;
	var pwd=document.getElementById("pwd").value;
	
	if(name.length==0 || email.length==0 || emp.length==0 || mob.length==0 ||dob.length==0 || uname.length==0 ||pwd.length==0)
{
	alert("Please enter all the details..");
}
}

function getMaped() {
		console.log("hiuidsudh");
  var output = document.getElementById("map");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p style="font-size:25px;">Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=600x400&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}


