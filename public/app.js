"use strict";

const changeBtn = document.getElementById("detailschange");
const changeForm = document.getElementById("change-detailsarea");
const menuModal = document.getElementById("header--menu-moadal");
// changeBtn.addEventListener("click", () => {
//   console.log("Change Now.....");
//   changeForm.style.visibility = "visible";
// });

const openModalMenu = () => {
  menuModal.style.visibility = "visible";
};

const closeMenu = () => {
  menuModal.style.visibility = "hidden";
};
