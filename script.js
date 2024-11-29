let menuKnop = document.querySelector(".menu-knop")
let sluitKnop = document.querySelector("header nav img")
let nav = document.querySelector("header article nav")
let body = document.querySelector("body")

menuKnop.onclick = openMenu;
sluitKnop.onclick = sluitMenu;

function openMenu(){
    nav.classList.add("toon-menu");
    body.classList.add("noScroll")
}

function sluitMenu(){
    nav.classList.remove("toon-menu");
    body.classList.remove("noScroll")
}

