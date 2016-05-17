/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function($) {
    /*
     * User has cookie ?
     */
        var start_date = new Date(Drupal.settings.oc_template_overwrites.oc_custom_survey_start_date* 1000);
        var end_date = new Date(Drupal.settings.oc_template_overwrites.oc_custom_survey_end_date* 1000);
        var cur_date = new Date();
        var user_opt_out = $.cookie('oc_custom_survey_dont_show_again');
        //Add + infront of Date objects to compare as timestamps.
        if(user_opt_out == undefined && cur_date >= start_date && cur_date <= end_date)
        {
            /*
            * Show survey teaser.
            */
            var dynamicDialog = $('<div id="oc_custom_survey_dialog">\
            <h3>'+Drupal.settings.oc_template_overwrites.oc_custom_survey_title+'</h3>\
            <p>'+Drupal.settings.oc_template_overwrites.oc_custom_survey_teaser_html+'</p>\
            <div style="position:absolute;bottom:0px;"><label for="oc_custom_survey_remember_opt_out"><input style=" vertical-align: middle;" type="checkbox" id="oc_custom_survey_remember_opt_out"> Vis ikke igen</label></div>\
            </div>');
        
                dynamicDialog.dialog({ title: Drupal.settings.oc_template_overwrites.oc_custom_survey_title,
                    width: 450,
                    height: 300,
                    modal: true,
                    buttons: [{ text: "Ja", click: function () { 
                            user_survey_opt_out_set();
                            window.open(Drupal.settings.oc_template_overwrites.oc_custom_survey_link, '_blank');
                            $(this).dialog("close");
                        } }, { text: "Nej", click: function () {
                            user_survey_opt_out_set();
                   
                        $(this).dialog("close"); } }]
                });
        }
        function user_survey_opt_out_set()
        {
            if($('#oc_custom_survey_remember_opt_out').is(':checked'))
            {
                 $.cookie('oc_custom_survey_dont_show_again', 'yes', { expires: 30, path: '/' });
            }
        }
});

