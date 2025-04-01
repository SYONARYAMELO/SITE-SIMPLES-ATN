'use strict';
const switcher = document.querySelector(".btn");
switcher.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const className = document.body.className;
    switcher.textContent = className === "light-theme" ? "Dark" : "Light";

    console.log("current class name: " + className);
});