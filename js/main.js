//Pinterest Grid object
$('#pinterest_grid').pinterest_grid({
    no_columns: 4,
    padding_x: 10,
    padding_y: 10,
    margin_bottom: 50,
    single_column_breakpoint: 200
});

//Ekko lightbox
$(document).on("click", "[data-toggle='lightbox']", function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        leftArrow: '<span style="color:white;text-shadow: -3px 3px 0px rgba(0,0,0, 1);">❮</span>',
        rightArrow: '<span style="color:white;text-shadow: 3px 3px 0px rgba(0,0,0, 1);">❯</span>'
    });
})

//Navegacion fluid scroll
$('a.nav-link').click(function (link) {
    link.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 1000, "easeOutCirc")
})

//Scroll up
$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        // topDistance: '10', // Distance from top before showing element (px)
        // topSpeed: 300, // Speed back to top (ms)
        animation: 'slide', // Fade, slide, none
        // animationInSpeed: 200, // Animation in speed (ms)
        // animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '', // Text for element
        // activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});

//Super scrollorama
var controller = $.superscrollorama({
    triggerAtCenter: true,
    playoutAnimations: true
});
controller.addTween('#articulos .container',
    TweenMax.from($('#articulos .container'), .5, { css: { marginLeft: "-100%" }, ease: Quad.easeInOut }));

//sticky.js
$(document).ready(function () {
    if(window.matchMedia("(min-width:992px)").matches){
        $("#header").sticky({ topSpacing: 0, zIndex: 1000 });
    }
});

//Validacion de formulario
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//ICheck
$(document).ready(function () {
    $('.icheck').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
        increaseArea: '20%' // optional
    });
});