/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function($) {
    debugger;
    try {
        if( Drupal.settings.oc_template_overwrites.xact_survey_enabled)
        {
            window.xact_width=400;
            window.xact_height=200;
            window.xact_surveyURL='https://www.survey-xact.dk/LinkCollector?key=' + Drupal.settings.oc_template_overwrites.xact_survey_id;
            window.xact_surveyKey= Drupal.settings.oc_template_overwrites.xact_survey_id;
            window.xact_probability = 1;
            window.xact_baseURL = 'http://www.survey-xact.dk';
            window.xact_language = "da";
            xact_startPopIn();   
        }       
    } catch (e) {
        
    }
});
