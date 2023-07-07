let menuResponsive = document.getElementById("menu-responsive");
let menu = document.getElementById("menu");
menuResponsive.addEventListener("click", function () {
    menuResponsive.classList.toggle("fa-times");
    menu.classList.toggle("active");
    
});

window.onscroll = () =>{
    menuResponsive.classList.remove("fa-times");
    menu.classList.remove("active");

}