import { loader } from "./loader.js";
import { wait } from "./wait.js";
import { basket } from "./basket.js";
import { store } from "./store.js";

loader.show()
// await wait(2000)
const resp = await fetch("https://63664aa3046eddf1bafce140.mockapi.io/api/v1/goods");
const data = await resp.json();
console.log(data)
store.set("products", data);
loader.hide()

const cardsTxt = `
<div class="cards">
    <div class="product">
    </div>
</div>
`;

document.body.insertAdjacentHTML("beforeend", cardsTxt);
const cards = document.querySelector(".cards");
const basketBtn = document.querySelector(".basket-btn");

const givCard = store.get("products").map((item)=>{
return `
<div class="product"  >
        <img src="${item.mainImage}"/>
        <div class="price">Цена: <span>${item.price}</span> UAH</div>
        <div class="description">Описание: <span> ${item.description}</span></div>
        <button class="button" data-id="${item.id}">Заказать</button>
    </div>
`
});
cards.innerHTML = givCard.join("")
cards.onclick = (event) => {
    if(!event.target.classList.contains("button"))
        return;
    basket.add(event.target.dataset.id)
}
basketBtn.onclick = () => {
    basket.show()
}







