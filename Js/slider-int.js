$(document).ready(function () {
  // Initialize slick slider
  $('.testimonial-wrap .slick-slider').slick({
    dots: true, // Add this to show slick dots
  });

  // Handle init event to show the first paragraph
  $('.testimonial-wrap .slick-slider').on('init', function (event, slick) {
    // Get the initial active tab-index
    var initialTabIndex = $('.slick-current').attr('data-slick-index');

    // Hide all paragraphs
    $('.testimonial-item-content p').hide();

    // Show the paragraph corresponding to the initial tab-index
    $('.testimonial-item-content[tabindex="' + initialTabIndex + '"] p').show();
  });

  // Handle afterChange event
  $('.testimonial-wrap .slick-slider').on('afterChange', function (event, slick, currentSlide) {
    // Get the current active tab-index
    var currentTabIndex = $('.slick-current').attr('data-slick-index');

    // Hide all paragraphs
    $('.testimonial-item-content p').hide();

    // Show the paragraph corresponding to the current tab-index
    $('.testimonial-item-content[tabindex="' + currentTabIndex + '"] p').show();
  });
});
