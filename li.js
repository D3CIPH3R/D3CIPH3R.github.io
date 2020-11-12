var aone;
var bone;
var cone;
var atwo;
var btwo;
var ctwo;
var x;
var y;
function firsta() {
	 aone = prompt("Enter your desired value for a1");
document.getElementById('dem1').innerHTML = "a1 = "+ aone;

}
function firstb() {
	 bone = prompt("Enter your desired value for b1");
document.getElementById('dem2').innerHTML = "b1 = "+ bone;


}
function firstc() {
	 cone = prompt("Enter your desired value for c1");
document.getElementById('dem3').innerHTML = "c1 = "+ cone;

}
function seconda() {
	 atwo = prompt("Enter your desired value for a2");
document.getElementById('dem4').innerHTML = "a2 = "+ atwo;

}
function secondb() {
	 btwo = prompt("Enter your desired value for b2");
document.getElementById('dem5').innerHTML = "b2 = "+ btwo;

}
function secondc() {
	 ctwo = prompt("Enter your desired value for c2");
document.getElementById('dem6').innerHTML = "c2 = "+ ctwo;

}
function e()
{  
	x = (( (btwo*cone) / bone ) - ctwo) / (atwo - ( (aone*btwo) / bone) );
	y = ((- aone/bone)*x) - (cone/bone);
	alert("Value of x =" + x );
	alert("Value of y =" + y);
	document.getElementById('ans').innerHTML = "x = "+ x + ","+ "y =" + y;

}
