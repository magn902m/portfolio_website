"use strict";

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  const aniKnap = document.querySelector("#ani_knap");

  aniKnap.addEventListener("click", aniKnapHandler);
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
