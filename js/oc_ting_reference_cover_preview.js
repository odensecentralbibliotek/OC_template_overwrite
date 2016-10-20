/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function ($) {
    if(!Drupal.settings.oc_template_overwrites.oc_material_img_preview_enabled)
    {
        return;
    }
    var ting_objects = [];
    var keyd_inputs = {};
    /*
     * Bind preview creation for newly entered fields.
     */
    var Inputs = $('#edit-field-ding-news-materials').on('blur','input',update_preview);
    /*
     * Create Previews for non-empty fields
     */
    var Inputs = $('#edit-field-ding-news-materials input[value!=""]:not(".ajax-processed")');

    var preloader = get_preloader_elem();
    $.each(Inputs, function (index,elem) {
        var localId = parse_local_id(elem.value);
 
        ting_objects.push({local_id: localId, image_style: 'ding_medium', owner_id: '746100'});
        keyd_inputs[localId] = elem; //so their easier to pair with their images.
        $(elem).before(preloader);
    });
    
    update_cover_previews(keyd_inputs,ting_objects);

    function show_large_image(imageElem)
    {
        var the_dialog = $('<div id="dialog" title=""><img style="" id="oc_image_preview" src="'+$(imageElem.currentTarget).attr('src')+'" /></div>').dialog({
            title: "OC Materiale Viewer",
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
              ok: function() {
                $( this ).dialog( "close" );
                $( this ).dialog( "destroy" );
              }
            }
          });
    }
    function update_preview(elem)
    {
        debugger;
        var Target = $(elem.currentTarget);
        var localId = parse_local_id(Target.val());
        /*
         * Exit if empty
         */
        if(localId == "")
        {
            return;
        }
        
        var old_preview_elem = Target.parent().find('.cover_preview');
        var old_local_id = null;
        if(old_preview_elem.length != 0)
        {
           /*
            * Get the old cover id
            */
           old_local_id = parse_local_id(old_preview_elem.attr('id'))
        }
        /*
        * Only update the cover if it is different id.
        */
        if(localId != old_local_id)
        {
            var keyd_inputs = {};
            var ting_objects = [];
            ting_objects.push({local_id: localId, image_style: 'ding_medium', owner_id: '746100'});
            keyd_inputs[localId] = elem.currentTarget; //so their easier to pair with their images.
            
            old_preview_elem.remove();
            Target.before(get_preloader_elem());

            update_cover_previews(keyd_inputs,ting_objects);
        }
    }
    function update_cover_previews(keyd_inputs,ting_objects)
    {
        if (ting_objects.length != 0)
        {
            $.ajax({
                type: "POST",
                url: "/ting/covers",
                content: "application/json, charset=utf8",
                data: {coverData: ting_objects}
            })
                    .done(function (Data) {
                        $.each(Data,function(index,dataobj){
                            var elem = keyd_inputs[dataobj['local_id']];
                            var img = $('<img id="'+dataobj['local_id']+'" class="cover_preview" style="vertical-align:middle;height:27px;margin-right:5px;cursor:pointer;" />').attr('src',dataobj['url']).click(show_large_image);
                            $(elem).parent().find('#oc_material_preview_preloader').remove();
                            $(elem).before(img);
                        });
                    });
        }
    }
    function parse_local_id(id)
    {
        var localId = id.split(':');
        if(localId.length == 1)
        {
            localId = localId[0];
        }
        else
        {
            localId = localId[1];
        }
        return localId;
    }
    function get_preloader_elem()
    {
        var spinnerUrl = Drupal.settings.basePath + "files/362.GIF";
        return $('<img style="vertical-align:middle;height:27px;margin-right:5px;" id="oc_material_preview_preloader" src="'+spinnerUrl+'" />');
    }
});

