var ai=4;
var aj=4;
var bi=4;
var bj=4;
function seta(xx1, xx2)
{
if(xx1 == 1){ai = 4; aj = 4;}
else if(xx1 == 2){ai = 4; aj = 3;}
else if(xx1 == 3){ai = 3; aj = 4;}
else if(xx1 == 4){ai = 4; aj = 2;}
else if(xx1 == 5){ai = 2; aj = 4;}
else if(xx1 == 6){ai = 3; aj = 3;}
if(xx2 == 1){bi = 4; bj = 4;}
else if(xx2 == 2){bi = 4; bj = 3;}
else if(xx2 == 3){bi = 3; bj = 4;}
else if(xx2 == 4){bi = 4; bj = 2;}
else if(xx2 == 5){bi = 2; bj = 4;}
else if(xx2 == 6){bi = 3; bj = 3;}
}
function marka()
{var eleman=0;var eleman1=0;var xx1 = document.getElementById("amat").value;var xx2 = document.getElementById("bmat").value;
seta(xx1,xx2);
for(var a=1; a<4; a++)
{
for(var b=1; b<4; b++)
{
var sd = ("a"+a+b);eleman = document.getElementById(sd);eleman.removeAttribute("disabled"); document.getElementById(sd).value='';
if(a >= ai || b >= aj)
{eleman.disabled = true;document.getElementById(sd).value='0';
}
}
}
for(var a=1; a<4; a++)
{
for(var b=1; b<4; b++)
{
var sd = ("b"+a+b);eleman = document.getElementById(sd);document.getElementById(sd).value='';eleman.removeAttribute("disabled");
if(a >= bi || b >= bj){eleman.disabled = true;document.getElementById(sd).value='0';}
}
}
for(var a=1; a<4; a++)
{
for(var b=1; b<4; b++)
{
var sd = ("aa"+a+b);eleman = document.getElementById(sd);document.getElementById(sd).value='';eleman.removeAttribute("disabled");
if(a >= ai || b >= bj){eleman.disabled = true;}
}
}
for(var a=1; a<4; a++)
{
for(var b=1; b<4; b++)
{
var sd = ("ba"+a+b);eleman = document.getElementById(sd);document.getElementById(sd).value='';eleman.removeAttribute("disabled");
if(a >= ai || b >= bj){eleman.disabled = true;}
}
}
}
function madd()
{var xx1 = document.getElementById("amat").value;var xx2 = document.getElementById("bmat").value;
seta(xx1,xx2);
if(aj != bi)
{
alert("We can multiply two matrix only when the number of columns of first matrix is equal to number of rows of second matrix.");
}
else{var a11 = document.getElementById("a11").value;
var a12 = document.getElementById("a12").value;
var a13 = document.getElementById("a13").value;
var a21 = document.getElementById("a21").value;
var a22 = document.getElementById("a22").value;
var a23 = document.getElementById("a23").value;
var a31 = document.getElementById("a31").value;
var a32 = document.getElementById("a32").value;
var a33 = document.getElementById("a33").value;
var b11 = document.getElementById("b11").value;
var b12 = document.getElementById("b12").value;
var b13 = document.getElementById("b13").value;
var b21 = document.getElementById("b21").value;
var b22 = document.getElementById("b22").value;
var b23 = document.getElementById("b23").value;
var b31 = document.getElementById("b31").value;
var b32 = document.getElementById("b32").value;
var b33 = document.getElementById("b33").value;
var tmp;
for(var i=1;i<=3;i++)
{for(var j=1;j<=3;j++){tmp = document.getElementById("a"+i+""+j).value;if(tmp==""){alert("Enter all values for Matrix 1 "); return 0;}}
}
for(var k=1;k<=3;k++)
{for(var l=1;l<=3;l++){tmp = document.getElementById("b"+k+""+l).value;if(tmp==""){alert("Enter all values for Matrix 2 ");return 0;}}
}
var ssd = false;
for(var a=1; a<4; a++)
{
for(var b=1; b<4; b++)
{
if(a < ai && b < bi){
var axx = ("a"+a+b);
//alert("a"+a+b+"="+axx+" - - "+ai);
if(axx == "")
ssd = true;
}
if(a != aj && b != bj){
var bxx = ("b"+a+b);
if(bxx == "")
ssd = true;
}
}
}
if(ssd==true){
alert("Empty cells are present. Please fill proper values");
}
else
{
aa11 = "("+a11+"*"+b11+")+("+a12+"*"+b21+")+("+a13+"*"+b31+")";
aa12 = "("+a11+"*"+b12+")+("+a12+"*"+b22+")+("+a13+"*"+b32+")";
aa13 = "("+a11+"*"+b13+")+("+a12+"*"+b23+")+("+a13+"*"+b33+")";
aa21 = "("+a21+"*"+b11+")+("+a22+"*"+b21+")+("+a23+"*"+b31+")";
aa22 = "("+a21+"*"+b12+")+("+a22+"*"+b22+")+("+a23+"*"+b32+")";
aa23 = "("+a21+"*"+b13+")+("+a22+"*"+b23+")+("+a23+"*"+b33+")";
aa31 = "("+a31+"*"+b11+")+("+a32+"*"+b21+")+("+a33+"*"+b31+")";
aa32 = "("+a31+"*"+b12+")+("+a32+"*"+b22+")+("+a33+"*"+b32+")";
aa33 = "("+a31+"*"+b13+")+("+a32+"*"+b23+")+("+a33+"*"+b33+")";document.getElementById("aa11").value = aa11;document.getElementById("aa12").value = aa12;document.getElementById("aa13").value = aa13;document.getElementById("aa21").value = aa21;document.getElementById("aa22").value = aa22;document.getElementById("aa23").value = aa23;document.getElementById("aa31").value = aa31;document.getElementById("aa32").value = aa32;document.getElementById("aa33").value = aa33;
for(var a=1; a<4; a++)
{
for(var b=1; b<4; b++)
{
if(a < ai && b < bj){
}
else
{
var dfx = ("aa"+a+b);document.getElementById(dfx).value = "0";
}
}
}
for(var a=1; a<4; a++)
{
for(var b=1; b<4; b++)
{
if(a < ai && b < bj){
var axx = ("aa"+a+b);
var dfx = ("ba"+a+b);var new1 = document.getElementById(dfx);var new2 = document.getElementById(axx);new1.value = eval(new2.value);
}
else
{
var dfx = ("ba"+a+b);document.getElementById(dfx).value = "0";
}
}
}
}
}
}
var spl_Keys = new Array();spl_Keys.push(8);spl_Keys.push(39);
function check(ad)
{
var PATTERN = /^-?[0-9]*$/;if (!ad.value.match(PATTERN)) {ad.value = ad.value.replace(ad.value.slice(-1), "");
}
}
function chk(){
var sds = document.getElementById('dum');
if(sds == null){alert("You are using a free package.\n You are not allowed to remove the tag.\n");
document.getElementById("maindiv").style.visibility="hidden";
}
var sdss = document.getElementById("dumdiv");
if(sdss == null){alert("You are using a free package.\n You are not allowed to remove the tag.\n");}
}
window.onload=chk;
