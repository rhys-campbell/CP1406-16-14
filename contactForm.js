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


