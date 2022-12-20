elem.onclick = function() {
    var res = prompt("Желаете пройти регистрацию на сайте?");
    if(res.toLowerCase() == "да"){
      alert("Круто");
    }
    else{
      alert("Попробуй ещё раз");
    }
}

elem_log.onclick = function() {
    var res = prompt("Желаете пройти регистрацию на сайте?");
    if(res == null){
        alert("Отменено");
    }
    if(res.toLowerCase() == "админ"){
        var res_2 = prompt("Введите пароль");
        if(res_2 == null){
            alert("Отменено");
        }
        if(res_2.toLowerCase() == "я главный"){
            alert("Здравствуйте!");
        }
        else{
            alert("Неверный пароль");
        }
    }
    else{
        alert("Я вас не знаю");
    }
}

like.onclick = function(){
    if(!document.getElementById("like").classList.contains("active")){
        var likes = document.getElementById("like_span").innerText;
        likes = parseInt(likes) + 1;
        document.getElementById("like_span").innerText = likes;
        document.getElementById("like").classList.add("active");
        
        window.onmousemove = function(event){
            
            var x = event.clientX + window.scrollX;
            var y = event.clientY + window.scrollY;
            var image = document.createElement("img");
            image.setAttribute(
                'style',
                'position: absolute; left: ' + (x - 30) + 'px;  top: ' + (y - 30) + 'px; width: 60px; pointer-events: none',
              );
            image.setAttribute(
            'src',
            'heart_move.png',
            );
            image.setAttribute('class', 'heart_move');
            document.getElementsByTagName("body")[0].appendChild(image);
        }
    }
    else{
        window.onmousemove = null;
        document.querySelectorAll(".heart_move").forEach(heart_element => heart_element.remove());

        var likes = document.getElementById("like_span").innerText;
        likes = parseInt(likes) - 1;
        document.getElementById("like_span").innerText = likes;
        document.getElementById("like").classList.remove("active");
    }
}


