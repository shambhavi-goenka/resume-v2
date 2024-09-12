// Custom scroll to top function
function smoothScrollToTop(duration) {
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, -startPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Scroll to top button click event
document.getElementById('scrollToTop').addEventListener('click', function () {
    smoothScrollToTop(1500); // Adjust duration (in milliseconds)
});