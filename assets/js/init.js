/**
 * Scripts for the responsive site demo
 */
jQuery(function($){

    // Makeshift placeholders
    var i = document.createElement('input'),
        supports_placeholders = 'placeholder' in i;
    if (!supports_placeholders) {
        var inputs = $('.input-text');
        inputs.each(function() {
            var thisCache = $(this),
                label     = thisCache.closest('label').find('span').text();

            if( thisCache.val() == '' ) {
                thisCache.val( label );
            }

            thisCache
                .focus(function() {
                    if( thisCache.val() == label ) {
                        thisCache.val('');
                    }
                })
                .blur(function() {
                    if( thisCache.val() == '' || thisCache.val() == label ) {
                        thisCache.val(label);
                    }
                })
                .closest('form')
                    .submit(function() {
                        inputs.each(function() {
                            if( thisCache.val() == label ) {
                                thisCache.val('');
                            }
                        })
                    });
        });
    }

});
