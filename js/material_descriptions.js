(function ($) {
    /**
     * Load remote content after the main page loaded.
     */
    Drupal.behaviors.my_module_load_remote_content = {
        attach: function (context, settings) {
            /*
             * This is needed to make the jquery dialog not disable the ckeditor
             * text fields.
             * see: http://stackoverflow.com/questions/15348209/jquery-modal-dialog-and-ckeditor-input-dialog
             */
            $.widget("ui.dialog", $.ui.dialog, {
                _allowInteraction: function (event) {
                    return 1; // Hack to allow CKE dialog interactions in all browsers. 
                    //return !!$(event.target).closest(".cke_dialog").length || this._super(event);
                }
            });
            /*
             * add a new material description , if the number of materials
             * are larger then the number of descriptions , else dont.
             */
            var elem = $('.field-name-field-ding-news-materials').find('input[type="submit"]');
            elem.mousedown(function () {
                var material_children = $('.field-name-field-ding-news-materials').find('.form-item').length;
                var description_children = $('.field-name-field-ding-news-material-descrip').find('.form-item').length;
                if (material_children >= description_children)
                {
                    setTimeout(function(){
                        $('.field-name-field-ding-news-material-descrip').find('input[type="submit"]').mousedown();
                    },650);
                }
            });
            /*
             *  Add wysiwyg abillity for material descriptions.
             */
            var inputs = $('#edit-field-ding-news-material-descrip table input:not(.field-add-more-submit)');
            inputs.unbind('click');
            inputs.click(function (e) {
                if(CKEDITOR.instances.mat_descrip_editor != undefined)
                {
                   CKEDITOR.instances.mat_descrip_editor.destroy(); // ensure death.
                }
                //Define global so we can access the value later in the dialog.
                current_material_description_input = $(e.currentTarget);

                //build modal.
                var DivDialog = $(document.createElement('div'));
                DivDialog.attr('id','material_descrip_dialog')
                var old_text = current_material_description_input.val();
                DivDialog.html('<textarea name="editor123" id="mat_descrip_editor" rows="10" cols="80">' + old_text + '</textarea>');
                DivDialog.dialog({
                    title: 'Rediger materiale beskrivelse',
                    resizable: false,
                    height: 500,
                    width: 500,
                    modal: true,
                    buttons: {
                        "Gem": function () {
                            var new_text = CKEDITOR.instances.mat_descrip_editor.getData();
                            current_material_description_input.val(new_text);
                            CKEDITOR.instances.mat_descrip_editor.destroy();
                            $(this).dialog("close");
                            $(this).dialog("destroy");

                        },
                        "Annuler": function () {
                            CKEDITOR.instances.mat_descrip_editor.destroy();
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    },
                    open: function ()
                    {
                        /*
                         * Handle dialog close.
                         * this does not work work well out of the box.
                         */
                         $('body').on('click', ".ui-dialog-titlebar-close" ,function() { 
                             if(CKEDITOR.instances.mat_descrip_editor != undefined)
                             {
                                 CKEDITOR.instances.mat_descrip_editor.destroy();
                                  $('#material_descrip_dialog').dialog("close");
                                  $('#material_descrip_dialog').dialog("destroy");
                             }
                             
                         });
                        /*
                         * Spawn the ckeditor on dialog open.
                         */
                        CKEDITOR.replace('mat_descrip_editor', {
                            // Define the toolbar groups as it is a more accessible solution.
                            toolbarGroups: [
                                {"name": "links", "groups": ["links"]},
                                {"name": 'basicstyles', "groups": ["basicstyles"]}
                            ],
                            toolbar:[
                                { name: 'basicstyles', groups: [ 'basicstyles'], items: [ 'Bold'] },
                                { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] }
                            ],
                            // Remove the redundant buttons from toolbar groups defined above.
                            removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar,paragraph,document,insert,styles,about',
                        });
                    },
                });
            });
        }
    };
})(jQuery);
