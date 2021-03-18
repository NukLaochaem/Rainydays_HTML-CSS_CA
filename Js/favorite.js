const popUp = document.querySelector (".popUp")
const addToBagFavorite = document.querySelector (".addtobag_btn")
const closingPopUp = document.querySelector (".close_popup_cross")

addToBagFavorite.addEventListener("click", showPopUp);

function showPopUp(event){
    popUp.style.display = "block"
}

closingPopUp.addEventListener("click", hidePopUp);

function hidePopUp(event){
    popUp.style.display =  "none"
}