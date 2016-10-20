<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function oc_template_overwrites_admin()
{
  $form = array(
    '#tree' => TRUE,
  );
  
  $form['description_meta'] = array(
      '#type' => 'textfield',
      '#default_value' => variable_get('description_meta', ''),
      '#title' => t('Angiv meta beskrivelse.'),
      '#attributes' => array(
          'placeholder' => t('En beskrivelse omkring hjemmesiden der dukker op ved søgeresultat i google '),
      ),
      '#description' => t('En beskrivelse omkring hjemmesiden der dukker op ved søgeresultat i google'),
  );

  $form['Place2book_front_ticket_status'] = array(
    '#type' => 'radios',
    '#title' => t('Tilføj Place2book Billet status.'),
    '#default_value' => variable_get('Place2book_front_ticket_status', 0),
    '#description' => t("The maximum number of links to display in the block."),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra'),t('Slået Til')),
  );
  
  $form['nemid_button'] = array(
    '#type' => 'radios',
    '#title' => t('Tilføj nemid knap.'),
    '#default_value' => variable_get('nemid_button', 0),
    '#description' => t("Tilføj nemid knap på login boksen."),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra'),t('Slået Til')),
  );
  
  $form['nysfyn_badge_enabled'] = array(
    '#type' => 'radios',
    '#title' => t('Slå nysgerig fyn badge til og fra på arrangemants siden.'),
    '#default_value' => variable_get('nysfyn_badge_enabled', 0),
    '#description' => t("nysgerig fyn badge"),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra.'),t('Slået Til.')),
  );
  if(variable_get('nysfyn_badge_enabled', 0) == 1)
  {
        $form['nysfyn_home_page'] = array(
            '#type' => 'textfield',
            '#default_value' => variable_get('nysfyn_home_page', ''),
            '#title' => t('klub side:'),
            '#attributes' => array(
                'placeholder' => t('Link til nysgerrig fyn informations side.'),
            ),
        );
  }
  $form['google_translate_enabled'] = array(
    '#type' => 'radios',
    '#title' => t('Google translate.'),
    '#default_value' => variable_get('google_translate_enabled', 0),
    '#description' => t("Google translate service"),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra.'),t('Slået Til.')),
  );
  if(variable_get('google_translate_enabled', 0) == 1)
  {
        $form['google_translate_languages'] = array(
            '#type' => 'textfield',
            '#default_value' => variable_get('google_translate_languages', ''),
            '#title' => t('Tilladte google translate sporg'),
            '#attributes' => array(
                'placeholder' => t('Tilladte google translate sporg'),
            ),
            '#description' => t('En større list med sprog koder kan findes <a href="http://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code">her</a>'),
        );
  }
  
  $form['oc_material_descriptions_enabled'] = array(
    '#type' => 'radios',
    '#title' => t('Material descriptions'),
    '#default_value' => variable_get('oc_material_descriptions_enabled', 0),
    '#description' => t("Materiale beskrivelser slået til."),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra.'),t('Slået Til.')),
  ); 
  
  $form['oc_material_img_preview_enabled'] = array(
    '#type' => 'radios',
    '#title' => t('Material Preview'),
    '#default_value' => variable_get('oc_material_img_preview_enabled', 0),
    '#description' => t("Gør det muligt af se materiale informationer på ting refernce tabeller."),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra.'),t('Slået Til.')),
  ); 
  
   $form['oc_survey_xact_enabled'] = array(
    '#type' => 'radios',
    '#title' => t('Survey xact'),
    '#default_value' => variable_get('oc_survey_xact_enabled', 0),
    '#description' => t("Slå survey xact til"),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra.'),t('Slået Til.')),
  ); 
   $form['oc_survey_xact_survey_id'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('oc_survey_xact_survey_id', ''),
    '#title' => t('Survey link'),
    '#attributes' => array(
        'placeholder' => t('Survey id..'),
    ),
    '#description' => t('survey xact'),
);
   $form['oc_survey_bpi_buttons_enabled'] = array(
    '#type' => 'radios',
    '#title' => t('BPI'),
    '#default_value' => variable_get('oc_survey_bpi_buttons_enabled', 0),
    '#description' => t("OC bpi knapper"),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra.'),t('Slået Til.')),
  ); 
    $form['oc_bpi_send_to_state_sid'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('oc_bpi_send_to_state_sid', ''),
    '#title' => t('Send to bpi SID'),
    '#attributes' => array(
        'placeholder' => t('Survey id..'),
    ),
    '#description' => t(''),
    );
   $form['oc_bpi_delete_state_sid'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('oc_bpi_delete_state_sid', ''),
    '#title' => t('Delete from BPI SID'),
    '#attributes' => array(
        'placeholder' => t('sid'),
    ),
    '#description' => t(''),
    );
      $form['oc_bpi_crated_from_state_sid'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('oc_bpi_crated_from_state_sid', ''),
    '#title' => t('created from BPI SID'),
    '#attributes' => array(
        'placeholder' => t('sid'),
    ),
    '#description' => t(''),
    );
   /*
    * Setings for the oc custom survey popup
    */
    $form['oc_custom_survey_enabled'] = array(
    '#type' => 'radios',
    '#title' => t('custom survey'),
    '#default_value' => variable_get('oc_custom_survey_enabled', 0),
    '#description' => t("oc custom survey popup"),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra.'),t('Slået Til.')),
  );
  if(variable_get('oc_custom_survey_enabled', 0) == 1)
  {
       $form['oc_custom_survey_link'] = array(
            '#type' => 'textfield',
            '#default_value' => variable_get('oc_custom_survey_link', ''),
            '#title' => t('Survey link'),
            '#attributes' => array(
                'placeholder' => t('Survey url'),
            ),
            '#description' => t(''),
        );
       $form['oc_custom_survey_title'] = array(
            '#type' => 'textfield',
            '#default_value' => variable_get('oc_custom_survey_title', ''),
            '#title' => t('Survey teaser title'),
            '#attributes' => array(
                'placeholder' => t('Survey teaser title'),
            ),
            '#description' => t(''),
        );
       $form['oc_custom_survey_teaser_html'] = array(
            '#type' => 'textarea',
            '#default_value' => variable_get('oc_custom_survey_teaser_html', ''),
            '#title' => t('Survey teaser html'),
            '#attributes' => array(
                'placeholder' => t('Survey teaser html'),
            ),
            '#description' => t(''),
        );
       $format = 'd-m-Y H:i';
 
        $form['oc_custom_survey_start_date'] = array(
           '#type' => 'date_popup', // types 'date_text' and 'date_timezone' are also supported. See .inc file.
           '#title' => t('Survey start date'),
           '#default_value' => variable_get('oc_custom_survey_start_date',date($format)), 
           '#date_format' => $format,
           '#date_label_position' => 'within', // See other available attributes and what they do in date_api_elements.inc
           '#date_increment' => 15, // Optional, used by the date_select and date_popup elements to increment minutes and seconds.
           '#date_year_range' => '-0:+1', // Optional, used to set the year range (back 3 years and forward 3 years is the default).
        );
        $form['oc_custom_survey_end_date'] = array(
           '#type' => 'date_popup', // types 'date_text' and 'date_timezone' are also supported. See .inc file.
           '#title' => t('Survey start date'),
           '#default_value' => variable_get('oc_custom_survey_end_date',date($format)), 
           '#date_format' => $format,
           '#date_label_position' => 'within', // See other available attributes and what they do in date_api_elements.inc
           '#date_increment' => 15, // Optional, used by the date_select and date_popup elements to increment minutes and seconds.
           '#date_year_range' => '-0:+1', // Optional, used to set the year range (back 3 years and forward 3 years is the default).
        );
  }
  $form['oc_ding_news_lead_warning_limit'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('oc_ding_news_lead_warning_limit', '290'),
    '#title' => t('Ding news lead warning limit'),
    '#attributes' => array(
        'placeholder' => t('text size..'),
    ),
    '#description' => t(''),
    );
  return system_settings_form($form);
}