const closeBtn = document.getElementById("close");
const navLinks = document.getElementById("nav-links");
const joinBtn = document.getElementById("join-btn");

//displaying main menu when close button is clicked
closeBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
});


//adding animation event
const reveals = document.querySelectorAll(".emerge");
 const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("is-visible");
        }

    });
}, {threshold: 0.15});

reveals.forEach(item => observer.observe(item));

