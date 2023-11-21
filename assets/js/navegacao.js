// Funcionalidade do Menu
var toggler = document.getElementsByClassName("item-menu");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".aninhado").classList.toggle("menuativo");
    this.classList.toggle("submenu-down");
  });
}

var submenuToggler = document.getElementsByClassName("submenu");

for (i = 0; i < submenuToggler.length; i++) {
  submenuToggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".aninhado").classList.toggle("menuativo");
    this.classList.toggle("submenu-down");
  });
}

//Funcionalidade do Menu Hamburguer
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const menuHamburguer = document.getElementById("menu-hamburguer");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

window.addEventListener("load", function () {
  if (window.innerWidth <= 600) {
    menu.style.display = "none";
    logo.style.display = "none";
    menuHamburguer.style.left = "1rem";
    header.style.gridColumn = "span 2";
    main.style.gridColumn = "span 2";
    footer.style.gridColumn = "span 2";
  }
});

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    logo.style.display = "block";
    menuHamburguer.style.left = "12.5rem";
  } else {
    menu.style.display = "none";
    logo.style.display = "none";
    menuHamburguer.style.left = "1rem";
    header.style.gridColumn = "span 2";
    main.style.gridColumn = "span 2";
    footer.style.gridColumn = "span 2";
  }
}

//Telas dos Cursos em Vídeo

document.getElementById("angular-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#angular-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/angular-video.html";
});

document
  .getElementById("algoritmo-logica-video")
  .addEventListener("click", () => {
    document
      .querySelectorAll(".tela-ativa")
      .forEach((el) => el.classList.remove("tela-ativa"));
    document
      .querySelector("#algoritmo-logica-video")
      .classList.add("tela-ativa");
    document.getElementById("iframe-principal").src =
      "./assets/pages/videos/programacao/algoritmo-logica-video.html";
  });

document.getElementById("api-rest-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#api-rest-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/api-rest-video.html";
});

document.getElementById("c-cpp-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#c-cpp-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/c-cpp-video.html";
});

document.getElementById("c-sharp-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#c-sharp-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/c-sharp-video.html";
});

document.getElementById("git-github-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#git-github-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/git-github-video.html";
});

document.getElementById("html-css-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#html-css-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/html-css-video.html";
});

document.getElementById("java-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#java-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/java-video.html";
});

document.getElementById("javascript-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#javascript-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/javascript-video.html";
});

document.getElementById("mobile-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#mobile-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/mobile-video.html";
});

document.getElementById("node-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#node-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/node-video.html";
});

document.getElementById("php-laravel-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#php-laravel-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/php-laravel-video.html";
});

document.getElementById("react-next-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#react-next-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/react-next-video.html";
});

document.getElementById("sass-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#sass-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/sass-video.html";
});

document.getElementById("sql-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#sql-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/sql-video.html";
});

document.getElementById("tailwind-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#tailwind-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/tailwind-video.html";
});

document.getElementById("typescript-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#typescript-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/typescript-video.html";
});

document.getElementById("vue-nuxt-video").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#vue-nuxt-video").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/videos/programacao/vue-nuxt-video.html";
});

//Telas dos Cursos em Material Online

document.getElementById("vue-nuxt-material").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#vue-nuxt-material").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/material/programacao/vue-nuxt-material.html";
});

//Tela Contato
document.getElementById("contato").addEventListener("click", () => {
  document
    .querySelectorAll(".tela-ativa")
    .forEach((el) => el.classList.remove("tela-ativa"));
  document.querySelector("#contato").classList.add("tela-ativa");
  document.getElementById("iframe-principal").src =
    "./assets/pages/contato.html";
});
