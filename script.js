// script.js
console.log('Hello from JavaScript!');

// Function to initialize the slideshow
function initSlideshow() {
    let slideIndex = 0;
    showSlides();

    // Function to show slides
    function showSlides() {
        let i;
        const slides = document.getElementsByClassName('mySlides');

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        // Increment index and reset if necessary
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = 'block';

        // Call the function again after a delay (e.g., 2000 milliseconds)
        setTimeout(showSlides, 2000); // Adjust the delay as needed
    }
}

function openTab(tabName) {
    var tabs = document.getElementsByClassName("tabContent");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}

// Call the initialization function
initSlideshow();
