const menu = document.querySelector(".menuitem");
const menubtn = document.querySelector(".menuicon");
const cancel = document.querySelector(".cancelicon");

menubtn.addEventListener("click", function() {
    menu.classList.add("active");
    
})
cancel.addEventListener("click", function() {
    menu.classList.remove("active");
    
})