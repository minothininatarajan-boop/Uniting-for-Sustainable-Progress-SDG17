$(document).ready(function() {
    
    // 1. Animated Counter for Stats
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-target');
        
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
        {
            duration: 2000,
            easing: 'linear',
            step: function() {
                // Formatting for decimal (like 1.4)
                $this.text(parseFloat(this.countNum).toFixed(countTo % 1 !== 0 ? 1 : 0));
            },
            complete: function() {
                $this.text(countTo);
            }
        });
    });

    // 2. Form Submission Alert
    $('#signup-form').on('submit', function(e) {
        e.preventDefault();
        const firstName = $(this).find('input').first().val();
        alert('Thank you, ' + firstName + '! Your subscription was successful.');
        $(this).trigger("reset");
    });

    // 3. Smooth Hover Effects on Cards
    $('.card').hover(
        function() { $(this).css('transform', 'translateY(-10px)').css('transition', '0.3s'); },
        function() { $(this).css('transform', 'translateY(0)'); }
    );
});