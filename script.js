// Navbar color change on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "#111";
    } else {
        navbar.style.background = "transparent";
    }
});


// Scroll animation

const hiddenElements = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));