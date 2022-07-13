const menuModal = document.getElementById("header--menu-moadal");

const changeDetail = document.querySelector(".changedetails--hero");

const openModalMenu = () => {
  menuModal.style.display = "block";
};
const closeMenu = () => {
  menuModal.style.display = "none";
};

const changeDetails = () => {
  console.log("Het werkt");
  changeDetail.style.visibility = "visible";
};

console.log("Hello");
