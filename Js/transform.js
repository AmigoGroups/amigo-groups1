document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".page__banner-slogan .your-trust");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("appear");
        }, index * 200); // Adjust the delay as needed
    });
});