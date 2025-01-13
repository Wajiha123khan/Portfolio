const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" , isOpen?"ri-close-line" : "ri-menu-line");
    
});

navLinks.addEventListener("click" , (e) =>{
navLinks.classList.remove("open");
menuBtnIcon.setAttribute("class" , "ri-menu-line");
});

const scrollRevealOption = {
    distance : "50px",
    origin : "bottom",
    duration : 1000,

};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay : 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay : 1000,
});
ScrollReveal().reveal(".header_content h3", {
    ...scrollRevealOption,
    delay : 1500,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay : 2000,
});
ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay : 2500,
});
ScrollReveal().reveal(".intro_image img", {
    ...scrollRevealOption,
    origin : "left",
});
ScrollReveal().reveal(".intro_content .section_subheader", {
    ...scrollRevealOption,
    delay : 500,
});
ScrollReveal().reveal(".intro_content .section_header", {
    ...scrollRevealOption,
    delay : 500,
});
ScrollReveal().reveal(".intro_description", {
    ...scrollRevealOption,
    delay : 1500,
});
ScrollReveal().reveal(".intro_grid", {
    ...scrollRevealOption,
    delay : 2000,
});
ScrollReveal().reveal(".intro_content h4", {
    ...scrollRevealOption,
    delay : 2500,
});
ScrollReveal().reveal(".intro_flex div", {
    ...scrollRevealOption,
    delay : 3000,
    interval: 500,
});
ScrollReveal().reveal(".journey_grid > div > div", {
    ...scrollRevealOption,
    interval: 500,
});

const mixer = mixitup(".portfolio_grid")