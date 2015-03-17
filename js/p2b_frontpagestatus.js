jQuery( document ).ready(function() {
    //Get the elements.
    var Elems = jQuery('.view-display-id-ding_event_date_list_icons').find('.list-item');
    //Get their nid's
    jQuery.each(Elems,function(index,obj){
        var Nid = jQuery(obj).find('.views-field-nid .field-content');
        var Nid = Nid.html();
        //GetPlace2Book Status.
        jQuery.ajax({
            method: "POST",
            url: "/ding/place2book/ticketinfo/ajax/raw/" + Nid,
          }).done(function( msg ) {
              if(msg.data != null)
              {
                if(msg.data.headers["available-tickets"] == 0)
                {
                  var obj = jQuery('.field-content:contains("'+ msg.nid +'")').parent().parent();
                  var heading = obj.find('.heading a');
                  heading[0].innerHTML = Drupal.t("UDSOLGT: ") + "<br/>" + heading[0].innerHTML;
                }
              }
              
            });
    })
});

