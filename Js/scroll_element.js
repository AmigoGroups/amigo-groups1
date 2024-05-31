// Function to handle scroll event
function handleScroll() {
    var elements = document.querySelectorAll('.img-fluid');

    elements.forEach(function(element) {
        var parentDiv = element.closest('div');
        var rect = parentDiv.getBoundingClientRect();
        var isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isInViewport) {
            parentDiv.style.opacity = '1';
            parentDiv.style.transform = 'none';
        } else {
            parentDiv.style.opacity = '0';
            parentDiv.style.transform = 'translateY(25px) translateZ(0px)';
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial call to handleScroll in case some images are already in viewport
handleScroll();
