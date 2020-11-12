var a1;
var b1;
var c1;
var d1;
var a2;
var b2;
var c2;
var d2;
var a3;
var b3;
var c3;
var d3;
var x;
var y;
var z;
function firsta() {
	 a1 = prompt("Enter your desired value for a1");
document.getElementById('dem1').innerHTML = "a1 = "+ a1;

}
function firstb() {
	 b1 = prompt("Enter your desired value for b1");
document.getElementById('dem2').innerHTML = "b1 = "+ b1;


}
function firstc() {
	 c1 = prompt("Enter your desired value for c1");
document.getElementById('dem3').innerHTML = "c1 = "+ c1;

}
function firstd() {
	 d1 = prompt("Enter your desired value for d1");
document.getElementById('dem4').innerHTML = "d1 = "+ d1;

}
function seconda() {
	 a2 = prompt("Enter your desired value for a2");
document.getElementById('dem5').innerHTML = "a2 = "+ a2;

}
function secondb() {
	 b2 = prompt("Enter your desired value for b2");
document.getElementById('dem6').innerHTML = "b2 = "+ b2;

}
function secondc() {
	 c2 = prompt("Enter your desired value for c2");
document.getElementById('dem7').innerHTML = "c2 = "+ c2;

}
function secondd() {
	 d2 = prompt("Enter your desired value for d2");
document.getElementById('dem8').innerHTML = "d2 = "+ d2;

}
function thirda() {
	 a3 = prompt("Enter your desired value for a3");
document.getElementById('dem9').innerHTML = "a3 = "+ a3;

}
function thirdb() {
	 b3 = prompt("Enter your desired value for b3");
document.getElementById('dem10').innerHTML = "b3 = "+ b3;

}
function thirdc() {
	 c3 = prompt("Enter your desired value for c3");
document.getElementById('dem11').innerHTML = "c3 = "+ c3;

}
function thirdd() {
	d3 = prompt("Enter your desired value for d3");
document.getElementById('dem12').innerHTML = "d3 = "+ d3;

}

function e()
{


y = (( ( (d1*a2)-(d2*a1) ) *( (a3*c2)-(a2*c3) ) ) - ( ((a3*d2)-(a2*d3)) * ((a2*c1)-(a1*c2))) ) /( (((a3*c2)-(a2*c3))*((a2*b1)-(a1*b2))) -( ((a3*b2) -(a2*b3))*((a2*c1) - (a1*c2))) );

z = ( (((a3*b2)-(a2*b3))*((d1*a2)-(d2*a1))) -(((a2*b1)-(a1*b2))*((a3*d2) - (a2*d3))) ) / ( (((a2*c1)-(a1*c2)) * ((a3*b2)-(a2*b3))) -( ((a2*b1)-(a1*b2)) * ((a3*c2)- (a2*c3))) );

x = ( d1 - c1*( ( (((a3*b2)-(a2*b3))*((d1*a2)-(d2*a1))) -(((a2*b1)-(a1*b2))*((a3*d2) - (a2*d3))) ) / ( (((a2*c1)-(a1*c2)) * ((a3*b2)-(a2*b3))) -( ((a2*b1)-(a1*b2)) * ((a3*c2)- (a2*c3))) ) ) - b1*( (( ( (d1*a2)-(d2*a1) ) *( (a3*c2)-(a2*c3) ) ) - ( ((a3*d2)-(a2*d3)) * ((a2*c1)-(a1*c2))) ) /( (((a3*c2)-(a2*c3))*((a2*b1)-(a1*b2))) -( ((a3*b2) -(a2*b3))*((a2*c1) - (a1*c2))) ) ) ) / a1;


	alert("Value of x =" + x );
	alert("Value of y =" + y);
  alert("Value of y =" + z);
	document.getElementById('ans').innerHTML = "x = "+ x + ","+ "y =" + y + "," + "z =" + z;

}
