const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img")

let idx = 0

function carrossel(){
    idx++;

    if(idx > img.lenght - 1){
        idx = +1;
    }

    imgs.style.transform = `translateX(${-idx * 300}px)`
}

setInterval(carrossel, 2000);