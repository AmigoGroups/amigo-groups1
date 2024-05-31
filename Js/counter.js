document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-card-count');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText;
            const increment = target / 100; // Adjust the increment speed here
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Adjust the update speed here
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});