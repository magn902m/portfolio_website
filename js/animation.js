"use strict";

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  const arrowTop = document.querySelector(".arrow_top");
  const logo = document.querySelector(".logo");
  const aniKnap = document.querySelector("#ani_knap");

  arrowTop.addEventListener("mousedown", arrowTopHandler);
  logo.addEventListener("mouseover", logoHandler);
  aniKnap.addEventListener("click", aniKnapHandler);
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

function aniKnapHandler() {
  console.log("aniKnapHandler");

  const aniTestContains = document
    .querySelector("#ani_test")
    .classList.contains("hop");
  const aniTest = document.querySelector("#ani_test");

  if (aniTestContains == true) {
    // console.log("rot");

    aniTest.classList.remove("hop");
    aniTest.offsetLeft;
    aniTest.classList.add("rotation2");
  } else {
    // console.log("hop");

    aniTest.classList.remove("rotation2");
    aniTest.offsetLeft;
    aniTest.classList.add("hop");
  }
}
