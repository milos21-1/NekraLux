'use strict';
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");
if ($navToggler) {
    $navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));
}
const $header = document.querySelector("[data-header]");
if ($header) {
    window.addEventListener("scroll", e => {
        $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    });
}
const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");
if ($toggleBtns.length > 0) {
    $toggleBtns.forEach($toggleBtn => {
        $toggleBtn.addEventListener("click", () => {
            $toggleBtn.classList.toggle("active");
        });
    });
}
