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
  
  $form['Place2book_front_ticket_status'] = array(
    '#type' => 'radios',
    '#title' => t('Tilføj Place2book Billet status.'),
    '#default_value' => variable_get('Place2book_front_ticket_status', 0),
    '#description' => t("The maximum number of links to display in the block."),
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
    

  return system_settings_form($form);
}