const params = {
	amount: 200,
	size: {
	min: 1,
	max: 5,
	giant: 9
	},
	duration: {
	min: 5,
	max: 25,
	}
}
const randomBetween = (a, b) => {
	return (a + (Math.random() * (b - a)));
}

for (var i = 0; i < params.amount; i++) {
	
	var size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
	

	var star = document.createElement("div");
	star.setAttribute(
		'style',
		'position: absolute; left: ' + randomBetween(0, 100) + '%;  top: ' + randomBetween(0, 100) + '%; width: ' + size + 'px; height: ' + size + 'px; pointer-events: none; box-shadow:0 0' + size + 'px ' + size/2 + 'px #043668; animation-duration: ' + randomBetween(params.duration.min, params.duration.max) + 's;',
		);
	star.innerHTML = "";
	document.getElementById("root").append(star);
}


var stars = document.getElementById('root');
stars.style = "height = " + Math.max( document.querySelector('body').scrollHeight, document.querySelector('body').offsetHeight) + "px;";


document.querySelector('body').addEventListener('click', function (event){
	var target = event.target;
	if(target.tagName == "A"){
		var res = prompt("Leave?", "Yes");
		if(res == "Yes"){
			window.location.href= target.href;
		}
		else{
			window.location.href = window.location.href;
		}
	}
});


var img_cont = document.getElementById('img-container')
img_cont.addEventListener('click', function (event){
	var target = event.target;
	if(target.tagName == "IMG"){
		img_cont.querySelector('img').src = target.src;
	}
});

var list = document.getElementById('list')
list.addEventListener('click', function (event){
	var target = event.target;
	var li = list.querySelectorAll('span');
	if(target.tagName == "SPAN"){
		if(!event.ctrlKey){
			var flag = 0;
			if(target.classList.contains("selected"))
				flag = 1;
			li.forEach((el) => {
				el.classList.remove("selected");
			});
			if(flag == 0)
				target.classList.add("selected")
		} else{
			if(target.classList.contains("selected"))
				target.classList.remove("selected");
			else
				target.classList.add("selected");
		}
	}
});

var sl = document.getElementById('sl')
sl.addEventListener('mousedown', function(event){
	sl.addEventListener('mousemove', function (event){
		var polz = sl.querySelector('div');
		if(event.clientX <= (window.innerWidth / 2 + window.innerWidth / 10 - 9) && event.clientX >= (window.innerWidth / 2 - window.innerWidth / 10))
		polz.style = "left: calc(" + event.clientX + "px + 3px + " + window.innerWidth + "px / 10 - ("+ window.innerWidth + "px / 2)); "
	});
	
});

sl.addEventListener('mouseup', function(event){
	this.removeEventListener('mousemove', arguments.callee);
});

var korz = document.getElementById('items')
korz.addEventListener('mousedown', function(event_1){
	var target = event_1.target;
	if (target.tagName == "IMG"){
		var div = target.parentNode;
		div.addEventListener('mousemove', function(event_2){
			div.style = "left: calc(" + event_2.clientX + "px - 110px);";
			target.style = "pointer-events: none;";

		});
		var img_korz = document.getElementById('korzinka_img');

		img_korz.addEventListener('click', function(event_3){
			korzinka = document.getElementById('korzinka')
			korzinka.innerHTML = Number(korzinka.innerHTML) + Number(div.lastElementChild.innerHTML);
			alert(div.lastElementChild.innerHTML);
			this.removeEventListener('mousemove', arguments.callee);
			div.style = "display: none";
			div.innerHTML = "";
		});
	}
});

