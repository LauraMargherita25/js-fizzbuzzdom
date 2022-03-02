let itemContainer = document.querySelector(".item_container");

for (let i = 1; i <= 100; i++) {

    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = i;

    if(i % 3 == 0 && i % 5 == 0){
        // itemContainer.innerHTML += `<div class="box blue">fizzbuzz</div>`;
        box.classList.add("blue")
        box.innerHTML = ("fizzbuzz");
    }else if (i % 5 == 0){
        // itemContainer.innerHTML += `<div class="box green">buzz</div>`;
        box.classList.add("green")
        box.innerHTML = ("buzz");
    }else if(i % 3 == 0){
        // itemContainer.innerHTML += `<div class="box red">fizz</div>`;
        box.classList.add("red")
        box.innerHTML = ("fiz");
    }

    itemContainer.append(box);
}