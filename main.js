const menu = document.querySelector("#menu");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => nav.classList.toggle("active"));
    
navList.addEventListener("click", () => nav.classList.toggle("active"));




