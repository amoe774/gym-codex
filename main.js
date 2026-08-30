const closeBtn = document.getElementById("close");
const navLinks = document.getElementById("nav-links");
const joinBtn = document.getElementById("join-btn");

//displaying main menu when close button is clicked
closeBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
});
