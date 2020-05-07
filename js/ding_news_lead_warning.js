/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function($) {
    var Warning_Shown = false;
    /*
     * Create a counter showing how many letters the news lead has.
     */
    $('#edit-field-ding-news-lead').find('.form-textarea-wrapper').append($('<div id="ding_news_lead_length" style="float:right;">'+Drupal.settings.oc_template_overwrites.oc_ding_news_lead_warning_limit+'</div>'));
    var startval =  Drupal.settings.oc_template_overwrites.oc_ding_news_lead_warning_limit - $('#edit-field-ding-news-lead').find('textarea').val().length;
    $('#ding_news_lead_length').text(startval);
    /*
     * Register user typing and change counter
     */
    $('#edit-field-ding-news-lead').on('keyup','textarea',function(){
        var startval = Drupal.settings.oc_template_overwrites.oc_ding_news_lead_warning_limit - $(this).val().length;
        if(startval <= 0 && Warning_Shown != true)
        {
           
            var the_dialog = $('<div id="dialog" title="">'+Drupal.t('OBS. Du har indtastet så mange tegn, at din tekst delvist vil vises under billedet på forside visning af artiklen.<br><br> Denne besked vises kun 1 gang pr. redigering. Du kan se grænsen for antal tegn, så du undgår tekst ombrydning i højre hjørne af manchet tekst boksen.')+'</div>').dialog({
                title: "Vigtig Information",
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
          
          Warning_Shown = true;
          $('#ding_news_lead_length').text(startval);
        }
        else
        {
            $('#ding_news_lead_length').text(startval);
        }
    });
    
});
