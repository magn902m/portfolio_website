"use strict";

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  const arrowTop = document.querySelector(".arrow_top");
  const logo = document.querySelector(".logo");

  arrowTop.addEventListener("mousedown", arrowTopHandler);
  logo.addEventListener("mouseover", logoHandler);
}

function arrowTopHandler() {
  console.log("arrowTopHandler");

  const arrowTop = document.querySelector(".arrow_top");

  arrowTop.classList.remove("rotation");
  arrowTop.offsetLeft;
  arrowTop.classList.add("rotation");

  //   arrowTop.classList.toggle("rotation");
  //   arrowTop.offsetLeft;
}

function logoHandler() {
  console.log("logoHandler");

  const logo = document.querySelector(".logo");

  logo.classList.remove("glow");
  logo.offsetLeft;
  logo.classList.add("glow");
}
