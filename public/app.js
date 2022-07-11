"use strict";

const changeBtn = document.getElementById("detailschange");
const changeForm = document.getElementById("change-detailsarea");

changeBtn.addEventListener("click", () => {
  console.log("Change Now.....");
  changeForm.style.visibility = "visible";
});
