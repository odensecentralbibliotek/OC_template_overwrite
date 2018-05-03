/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($, Drupal) {

    Drupal.behaviors.ansat_table = {
        attach: function (context, settings) {
          $( ".views-field.views-field-field-bibliotek:contains('Borgerservice')" ).parent().remove();
        }
    };

})(jQuery, Drupal);
