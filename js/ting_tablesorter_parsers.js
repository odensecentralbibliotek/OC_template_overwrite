/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 // add parser through the tablesorter addParser method 
(function ($) {
        $.tablesorter.addParser({ 
          // set a unique id 
          id: 'ting_date_sort', 
          is: function(s) { 
              // return false so this parser is not auto detected 
              return false; 
          }, 
          format: function(s) { 
              // format your data for normalization 
              var newdate = s.toLowerCase().replace(' ','/').split("/").reverse().join("/");
              var DateObj = new Date(newdate);
              return DateObj.getTime(); 
          }, 
          // set type, either numeric or text 
          type: 'numeric' 
      }); 

})(jQuery);

