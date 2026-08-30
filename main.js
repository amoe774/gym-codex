const closeBtn = document.getElementById("close");
const navLinks = document.querySelector("#nav-links");
const joinBtn = document.getElementById("join-btn");

//displaying main menu when close button is clicked
closeBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("is active");
});
