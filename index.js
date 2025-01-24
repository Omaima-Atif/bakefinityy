// Select carousel elements
const $carousel = $('.carousel');
const $items = $('.carousel-item');
const $prevBtn = $('.prev-btn');
const $nextBtn = $('.next-btn');

let currentIndex = 0; // Track current slide index
const totalItems = $items.length;

// Function to update carousel position
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate offset percentage
    $carousel.css('transform', `translateX(${offset}%)`); // Slide to the current item
}

// Event listeners for buttons
$prevBtn.on('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop to last if at first
    updateCarousel();
});

$nextBtn.on('click', function() {
    currentIndex = (currentIndex + 1) % totalItems; // Loop to first if at last
    updateCarousel();
});

// Scroll to menu on button click
$(".hero-buttons").on('click', function() {
    $('#menu')[0].scrollIntoView({ behavior: 'smooth' }); // Use vanilla scrollIntoView
});




$(".add-to-cart").on('click', function() {
    const button = $(this); // Store reference to the clicked button


    button.addClass("pressed");
    button.html("Added To Cart ✔"); // Change the text to "Added To Cart"



    // Revert back to "Add To Cart" after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        button.removeClass("pressed");
        button.html("Add To Cart");
    }, 800);
});

$("#contact-button").on('click', function(event) {
    const button = $(this);
    const popUp = $(".pop-up");
    const overlay = $(".overlay");
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
        // Show the popup and overlay
        popUp.css('visibility', 'visible');
        overlay.css('visibility', 'visible');

        // Add the 'freeze' class to the body to disable scrolling
        $("body").addClass("freeze");
        return; // Stop further execution
    } else {
        button.addClass("pressed");
        button.html("Submitted ✔");

        // Revert back to "Submit" after 800 milliseconds
        setTimeout(function() {
            button.removeClass("pressed");
            button.html("Submit");
        }, 800);
    }
});

$(".pop-ok").on('click', function() {
    const popUp = $(".pop-up");
    const overlay = $(".overlay");

    // Hide the popup and overlay
    popUp.css('visibility', 'hidden');
    overlay.css('visibility', 'hidden');

    // Remove the 'freeze' class from the body to re-enable scrolling
    $("body").removeClass("freeze");
});