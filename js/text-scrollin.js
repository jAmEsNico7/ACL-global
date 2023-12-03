document.addEventListener('DOMContentLoaded', function() {
    var paragraphs = document.querySelectorAll('.paragraph');
    var windowHeight = window.innerHeight;

    function checkAndShow() {
        paragraphs.forEach(function(paragraph) {
            var bounding = paragraph.getBoundingClientRect();
            if (bounding.top <= windowHeight - 100) {
                paragraph.classList.add('show');
            }
        });
    }

    // Initial check
    checkAndShow();

    // Check and show when scrolling
    window.addEventListener('scroll', checkAndShow);
});