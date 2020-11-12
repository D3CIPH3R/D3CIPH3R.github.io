function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}
function inverse(form) {
	form.display.value = ( 1 / form.display.value);
}


function cos(form) {
	form.display.value = Math.cos(form.display.value * Math.PI / 180);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value * Math.PI / 180);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value * Math.PI / 180);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
function cosh(form) {
	form.display.value = Math.cosh(form.display.value);
}
function sinh(form) {
	form.display.value = Math.tanh(form.display.value);
}
function tanh(form) {
	form.display.value = Math.tanh(form.display.value);
}
function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}
function log(form) {
	form.display.value = Math.log(form.display.value);
}
function cbrt(form) {
	form.display.value = Math.cbrt(form.display.value);
}
function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}
function cube(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value) * eval(form.display.value)

}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
