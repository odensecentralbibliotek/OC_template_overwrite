/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function ($) {
    if(!Drupal.settings.oc_template_overwrites.oc_material_img_preview_enabled)
    {
        return
    }
    var ting_objects = [];
    var keyd_inputs = {};
    //ting_objects.push({local_id:'22629344' , image_style: 'ding_medium' , owner_id: '746100'});

    var Inputs = $('#edit-field-ding-news-materials input[value!=""]:not(".ajax-processed")');
    $.each(Inputs, function (index,elem) {
        
        var localId = elem.value.split(':');
        if(localId.length == 1)
        {
            localId = localId[0];
        }
        else
        {
            localId = localId[1];
        }
        ting_objects.push({local_id: localId, image_style: 'ding_medium', owner_id: '746100'});
        keyd_inputs[localId] = elem; //so their easier to pair with their images.
    });
    
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
                        var img = $('<img style="vertical-align:middle;height:27px;margin-right:5px;cursor:pointer;" />').attr('src',dataobj['url']).click(show_large_image);
                        $(elem).before(img);
                    });
                });
    }

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
});

