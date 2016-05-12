/** Adapted from  https://codepen.io/jaycbrf/pen/iBszr by Cameron on 5/4/2016. */


$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                first_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your first name'
                        }
                    }
                },
                last_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your last name'
                        }
                    }
                },
                comment: {
                    validators: {
                        stringLength: {
                            min: 10,
                            max: 200,
                            message:'Please enter at least 10 characters and no more than 200'
                        },
                        notEmpty: {
                            message: 'Please enter something for us to read!'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

function validateForm() {
    var f_name_check = document.forms["contact_form"]["first_name"].value;
    var f_last_check = document.forms["contact_form"]["last_name"].value;
    var email_check = document.forms["contact_form"]["email"].value;
    var comment_check = document.forms["contact_form"]["comment"].value;
    if (f_name_check == null || f_name_check == "") {
        alert("First name must be filled out");
        return false;
    }
    if (f_last_check == null || f_last_check == "") {
        alert("Second name must be filled out");
        return false;
    }
    if (email_check == null || email_check == "") {
        alert("Email must be filled out");
        return false;
    }
    if (comment_check == null || comment_check == "") {
        alert("Comment must be filled out");
        return false;
    }
}

