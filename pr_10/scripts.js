var captcha;
var captcha_hidden;
function generate() {

	// Clear old input
	document.getElementById("submit").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
    captcha_hidden = document.getElementById("image_hidden");
	var uniquechar = "";

	randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 0; i < 5; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length);
	}

	// Store generated input
    captcha_hidden.innerHTML = uniquechar;
	captcha.innerHTML = uniquechar;
}

function generate_number() {

	// Clear old input
	document.getElementById("submit").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
    captcha_hidden = document.getElementById("image_hidden");
    
	var uniquechar_1 = 0;
    var uniquechar_2 = 0;
	randomchar = "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 0; i < 10; i++) {
		uniquechar_1 += Number(randomchar.charAt(Math.random() * randomchar.length));
        uniquechar_2 += Number(randomchar.charAt(Math.random() * randomchar.length));
	}

	// Store generated input
    captcha_hidden.innerHTML = uniquechar_1 + uniquechar_2;
	captcha.innerHTML = uniquechar_1 + " + " + uniquechar_2;
}

function printmsg() {
	const usr_input = document.getElementById("submit").value;
	
	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == captcha_hidden.innerHTML && (usr_input != "")) {
		var s = document.getElementById("key").innerHTML = "Matched";
        document.getElementById("otpr").classList.add("visible");
        document.getElementById("key").classList.add("not_visible");
        document.getElementById("btn").classList.add("not_visible");
        document.getElementById("image").classList.add("not_visible");
        document.getElementById("create").classList.add("not_visible");
        document.getElementById("user-input").classList.add("not_visible");
           
	}
	else {
		var s = document.getElementById("key").innerHTML = "not Matched";
		generate_number();
        document.getElementById("otpr").classList.remove("visible");
	}
}


var korzinka = {
    value: 10
};
function read(){
    var res = prompt("введите число", 0);
    
    korzinka.value = korzinka.value + Number(res);
    alert(korzinka.value);
}



function truncate(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
}

document.getElementById("card1").innerHTML = truncate(document.getElementById("card1").innerHTML, 55);
document.getElementById("card2").innerHTML = truncate(document.getElementById("card2").innerHTML, 55);
document.getElementById("card3").innerHTML = truncate(document.getElementById("card3").innerHTML, 55);
