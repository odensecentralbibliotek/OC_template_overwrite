<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function oc_template_overwrites_admin()
{
  $form = array();
  $form['Place2book_front_ticket_status'] = array(
    '#type' => 'radios',
    '#title' => t('Tilføj Place2book Billet udsolgt status.'),
    '#default_value' => variable_get('Place2book_front_ticket_status', 0),
    '#description' => t("The maximum number of links to display in the block."),
    '#required' => FALSE,
    '#options' => array(t('Slået Fra'),t('Slået Til')),
  );
  return system_settings_form($form);
}