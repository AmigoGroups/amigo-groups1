document.addEventListener("DOMContentLoaded", function () {
  function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  function startCounterAnimation() {
    var counters = document.querySelectorAll(".counter");
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute("data-target"));
      animateValue(counter.id, 0, target, 3000);
    });
  }

<<<<<<< HEAD
  // This will start the video playing when the page loads
  startCounterAnimation();
});

function playVideo() {
  // get the video element and play it
  var bannerVideo = document.getElementById("banner-video");
  bannerVideo.play();

  // add event listener after the video ends
  bannerVideo.addEventListener("ended", function () {
    bannerVideo.pause(); // pause the video

    // resume the video after 3 seconds
    setTimeout(() => {
      bannerVideo.play();
    }, 3000);
  });
}

playVideo();
=======
  function playVideo() {
    // get the video element and play it
    var bannerVideo = document.getElementById("banner-video");
    bannerVideo.play();

    // add event listener after the video ends
    bannerVideo.addEventListener("ended", function () {
      bannerVideo.pause(); // pause the video

      // resume the video after 3 seconds
      setTimeout(() => {
        bannerVideo.play();
      }, 3000);
    });
  }

  playVideo();
  startCounterAnimation();
});
>>>>>>> b42092cd88c18dfdf12d080b792db8c4b49bbfb9
