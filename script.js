// ========================================
// ISUFST CAMPUS LEADERSHIP WEBPAGE
// JavaScript
// ========================================


// 1. Display current year in the footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 2. Add click effect to official cards
const cards = document.querySelectorAll(".official-card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        // Remove selected effect from other cards
        cards.forEach(function(otherCard) {
            otherCard.classList.remove("selected");
        });

        // Add selected effect to clicked card
        card.classList.add("selected");

    });

});


// 3. Smooth scrolling for navigation links
const links = document.querySelectorAll("a[href^='#']");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 4. Back to top button
const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 5. Welcome message
window.addEventListener("load", function() {

    console.log(
        "Welcome to the ISUFST Meet the Campus Leadership webpage!"
    );

});