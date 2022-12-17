import { store } from "./store.js"

const basketTxt = `
            <div class="basket">
            </div>
        `;
document.body.insertAdjacentHTML("beforeend", basketTxt);
const element = document.querySelector(".basket");
element.style.display = "none";

const state = {};

export const basket = {
    add: (id)=>{
        if(state[id]){
            state[id]++;
        }else{
            state[id] = 1;
        }
    },
    send: ()=>{console.log(state)},
    show: ()=>{
        const productsList = Object.entries(state).map((item) => {
            console.log(item)
            const title = store.get("products").find((product) => {
                return product.id === item[0]
            }).title;
            console.log(title)
            console.log(item[1])
            return `${title}: ${item[1]} шт.\n`;
        });
        element.innerText = productsList.join("");
        element.style.display = "flex";
        element.onclick = () => {
            basket.hide()
        }
    },
    hide: ()=>{
        element.style.display = "none";
        
    },
}