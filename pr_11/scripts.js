var x;
function myFunc() {
	alert('new message');
}
function interval(){
	x = window.setInterval(myFunc, 3000);
}
function stop(){
	clearInterval(x);
	window.setTimeout(myFunc, 10000);
	window.setTimeout(interval, 10000);
}
function execute(){
	clearInterval(x);
}
function swap_articles(id_1_1, id_1_2, id_2_1, id_2_2){
	var extra_1 = document.getElementById(id_1_1).innerText;
	var extra_2 = document.getElementById(id_1_2).innerText;
	document.getElementById(id_1_1).innerHTML = document.getElementById(id_2_1).innerText;
	document.getElementById(id_1_2).innerHTML = document.getElementById(id_2_2).innerText;
	document.getElementById(id_2_1).innerHTML = extra_1;
	document.getElementById(id_2_2).innerHTML = extra_2;
}

function delete_article(id){
	document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

function show_special(){
	var a = Number(document.getElementById("bottom_num").value);
	var b = Number(document.getElementById("high_num").value);
	var art_1 = new Array(document.getElementById("name_1").innerText, document.getElementById("size_1").innerText);
	var art_2 = new Array(document.getElementById("name_2").innerText, document.getElementById("size_2").innerText);
	var art_3 = new Array(document.getElementById("name_3").innerText, document.getElementById("size_3").innerText);
	var art_4 = new Array(document.getElementById("name_4").innerText, document.getElementById("size_4").innerText);
	if(art_1[1] > b || art_1[1] < a){
		document.getElementById('article_1').classList.remove("visible");
		document.getElementById('article_1').classList.add("notvisible");
	}
	else{
		document.getElementById('article_1').classList.remove("notvisible");
		document.getElementById('article_1').classList.add("visible");
	}
	if(art_2[1] > b || art_2[1] < a){
		document.getElementById('article_2').classList.remove("visible");
		document.getElementById('article_2').classList.add("notvisible");
	}
	else{
		document.getElementById('article_2').classList.remove("notvisible");
		document.getElementById('article_2').classList.add("visible");
	}
	if(art_3[1] > b || art_3[1] < a){
		document.getElementById('article_3').classList.remove("visible");
		document.getElementById('article_3').classList.add("notvisible");
	}
	else{
		document.getElementById('article_3').classList.remove("notvisible");
		document.getElementById('article_3').classList.add("visible");
	}
	if(art_4[1] > b || art_4[1] < a){
		document.getElementById('article_4').classList.remove("visible");
		document.getElementById('article_4').classList.add("notvisible");
	}
	else{
		document.getElementById('article_4').classList.remove("notvisible");
		document.getElementById('article_4').classList.add("visible");
	}
}

function sort(ind){
	var art_1 = new Array(document.getElementById("name_1").innerText, Number(document.getElementById("size_1").innerHTML));
	var art_2 = new Array(document.getElementById("name_2").innerText, Number(document.getElementById("size_2").innerHTML));
	var art_3 = new Array(document.getElementById("name_3").innerText, Number(document.getElementById("size_3").innerHTML));
	var art_4 = new Array(document.getElementById("name_4").innerText, Number(document.getElementById("size_4").innerHTML));
	var articles = new Array(art_1, art_2, art_3, art_4);
	if (ind == -1){
		articles.sort( function(row1, row2) {
			var k1 = row1[1], k2 = row2[1];
			return (k1 > k2) ? 1 : ( (k2 > k1) ? -1 : 0 );
		} );
	} else{
		articles.sort( function(row1, row2) {
			var k1 = row1[1], k2 = row2[1];
			return (k1 > k2) ? -1 : ( (k2 > k1) ? 1 : 0 );
		} );
	}
	document.getElementById("name_1").innerHTML = articles[0][0];
	document.getElementById("size_1").innerHTML = articles[0][1];
	document.getElementById("name_2").innerHTML = articles[1][0];
	document.getElementById("size_2").innerHTML = articles[1][1];
	document.getElementById("name_3").innerHTML = articles[2][0];
	document.getElementById("size_3").innerHTML = articles[2][1];
	document.getElementById("name_4").innerHTML = articles[3][0];
	document.getElementById("size_4").innerHTML = articles[3][1];
}