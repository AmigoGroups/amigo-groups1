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
        var counters = document.querySelectorAll('.counter');
        counters.forEach(function (counter) {
            var target = parseInt(counter.getAttribute('data-target'));
            animateValue(counter.id, 0, target, 3000);
        });
    }

    startCounterAnimation();
});
