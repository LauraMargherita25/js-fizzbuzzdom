let itemContainer = document.querySelector(".item_container");

for (let i = 1; i <= 100; i++) {

    const square = document.createElement("div");
    square.classList.add("box");

    if(i % 3 == 0 && i % 5 == 0){
        // itemContainer.innerHTML += `<div class="box blue">fizzbuzz</div>`;
        square.classList.add("blue")
        square.innerHTML = ("fizzbuzz");
    }else if (i % 5 == 0){
        // itemContainer.innerHTML += `<div class="box green">buzz</div>`;
        square.classList.add("green")
        square.innerHTML = ("buzz");
    }else if(i % 3 == 0){
        // itemContainer.innerHTML += `<div class="box red">fizz</div>`;
        square.classList.add("red")
        square.innerHTML = ("fiz");
    }else{
        // itemContainer.innerHTML += `<div class="box">${i}</div>`;
        square.classList.add("box")
        square.innerHTML = i;
    }

    itemContainer.append(square);
}