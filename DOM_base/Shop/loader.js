const circule = `
            <div class="loader">
                <div class="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        `;
document.body.insertAdjacentHTML("beforeend", circule);
const element = document.querySelector(".loader");
element.style.display = "none";

export const loader = {
    show: ()=>{
        element.style.display = "flex";
    },

    hide: ()=>{
        element.style.display = "none";
    },
}