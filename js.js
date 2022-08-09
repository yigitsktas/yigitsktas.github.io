"use strict";

const modalAbout = document.querySelector(".modal-about");
const modalLinks = document.querySelector(".modal-links");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModalAbout = document.querySelector(".show-modal-about");
const btnOpenModalLinks = document.querySelector(".show-modal-links");
const merhabaAlert = document.querySelector(".main-header");
const portfolioButton = document.querySelector(".btn-portfolio");

// todo: try using one function but it not works with one function!!
// todo: so i had to use less functions but i could not figure it out yet
const openModalAbout = function () {
	modalAbout.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const openModalLinks = function () {
	modalLinks.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modalAbout.classList.add("hidden");
	modalLinks.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnOpenModalAbout.addEventListener("click", openModalAbout);
btnOpenModalLinks.addEventListener("click", openModalLinks);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// close modals with pressing esc
document.addEventListener("keydown", function (e) {
	// console.log(e.key);
	if (
		(e.key === "Escape" && !modalAbout.classList.contains("hidden")) ||
		!modalLinks.classList.contains("hidden")
	) {
		closeModal();
	}
});

// alert chrome
merhabaAlert.addEventListener("click", function () {
	alert("merhaba.");
});

// opens portfolio page on top
portfolioButton.addEventListener("click", function () {
	window.open("portfolio.html", "_top");
});
