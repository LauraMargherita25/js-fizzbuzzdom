let itemContainer = document.querySelector(".item_container");

for (let i = 0; i <= 100; i++) {
    itemContainer.innerHTML += `<div class="box">${i}</div>`
}