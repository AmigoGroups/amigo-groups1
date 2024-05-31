document.addEventListener('DOMContentLoaded', function() {
    const teamImageContainer1 = document.getElementById('teamImageContainer1');
    const teamImageContainer2 = document.getElementById('teamImageContainer2');
    const teamImageContainer3 = document.getElementById('teamImageContainer3');
   

    function checkVisibility1() {
        const rect = teamImageContainer1.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
            teamImageContainer1.style.opacity = '1';
            teamImageContainer1.style.transform = 'none';
            window.removeEventListener('scroll', checkVisibility1);
        }
    }

    function checkVisibility2() {
        const rect = teamImageContainer2.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
            teamImageContainer2.style.opacity = '1';
            teamImageContainer2.style.transform = 'none';
            window.removeEventListener('scroll', checkVisibility2);
        }
    }

    function checkVisibility3() {
        const rect = teamImageContainer3.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
            teamImageContainer3.style.opacity = '1';
            teamImageContainer3.style.transform = 'none';
            window.removeEventListener('scroll', checkVisibility3);
        }
    }

    window.addEventListener('scroll', checkVisibility1);
    window.addEventListener('scroll', checkVisibility2);
    window.addEventListener('scroll', checkVisibility3);
    checkVisibility1(); // Check visibility for team__card on page load
    checkVisibility2();
    checkVisibility3(); // Check visibility for team__card1 on page load
});
