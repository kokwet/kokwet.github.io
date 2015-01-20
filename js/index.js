/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('button.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//more details
$(function(){
    $('#programs-full > div').hide();
    $('.view-details').on('click', function(){
        $('#programs-collapse > div').fadeOut();
        $('#'+ $(this).data('target')).fadeIn();
    });
    $('.less-details').on('click', function(){
        $('#programs-full > div').fadeOut();
        $('#programs-collapse > div').fadeIn();
    });
});

// Form submission script
$(function() {
    $("#kokwet-contact-submit").on('click', function(){
        $("input,textarea").jqBootstrapValidation({
            submitError: function($form, event, errors) {},
            submitSuccess: function($form, event) {
                event.preventDefault();
                var name = $("#kokwet-contact-name").val();  
                var email = $("#kokwet-contact-email").val(); 
                var message = $("#kokwet-contact-message").val();
                var firstName = name; // For Success/Failure Message
                // Check for white space in name for Success/Fail message
                if (firstName.indexOf(' ') >= 0) {
                    firstName = name.split(' ').slice(0, -1).join(' ');
                }  
                $.ajax({
                    url: "//formspree.io/projects@kokwet.org", 
                    method: "POST",
                    data: {name: name, email: email, message: message},
                    dataType: "json",

                    success: function() {  
                        // Success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append( "</button>");
                        $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                        $('#success > .alert-success')
                        .append('</div>');

                        //clear all fields
                        $('#kokwet-contact-form').trigger("reset");

                    },
                    error: function() {		
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append( "</button>");
                        $('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='info@kokwet.org?Subject=Kokwet_CBO: Learn More'>info@kokwet.org</a> ? Sorry for the inconvenience!");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        $('#kokwet-contact-form').trigger("reset");
                    },
                });
            }
        });
    });
});
