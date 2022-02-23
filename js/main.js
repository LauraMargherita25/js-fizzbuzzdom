let itemContainer = document.querySelector(".item_container");

for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0){
        itemContainer.innerHTML += `<div class="box red">fizz</div>`
    }else if (i % 5 == 0){
        itemContainer.innerHTML += `<div class="box green">buzz</div>`
    }else if(i % 3 && i % 5){
        itemContainer.innerHTML += `<div class="box blue">fizzbuzz</div>`
    }else{
        itemContainer.innerHTML += `<div class="box">${i}</div>`
    }
}