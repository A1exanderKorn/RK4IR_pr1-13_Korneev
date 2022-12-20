var links = document.querySelectorAll('a');
for (var link of links) {
	if(link.href.indexOf('://') >= 0 && !link.href.startsWith('file')){
		link.style.color = 'pink';
	}
}

function add(p){
	list = document.getElementById(p);
	var li = document.createElement('li')
	var res_1 = prompt("введите название");
	var res_2 = prompt("введите число");
	li.innerHTML = '<div class="data"><span></span>' + '\n' + '<span></span></div>';
	li.classList.add("data_article", "visible");
	var spans = li.querySelectorAll('span')
	spans[0].innerText = res_1;
	spans[1].innerText = res_2;
	list.append(li)
}
function close_notif(){
	var not = document.getElementById('notificationn');
	document.querySelector('body').removeChild(not);
}
function show_notif(){
	var not = document.createElement('div');
	not.classList.add('notification');
	not.innerHTML = '<div class="notification"><span>КУ!</span><button type="button">убрать</button</div>';
	not.id = 'notificationn';
	document.querySelector('body').append(not);
	document.getElementById('notificationn').onclick = function(event) {
		var target = event.target;
		close_notif();
		if (target.tagName == 'BUTTON')
		{
			close_notif();
		}
	}
	setTimeout(close_notif, 3000);
	
}

var image_container = document.getElementById('img-container');
var image = image_container.querySelector('img');
image.setAttribute('style', "display: block; margin: 0 auto;")
