jQuery(document).ready(function () {
  jQuery(".nav-tabs").on("click", function () {
    jQuery(
      '<div class="search-overlay--wrapper"><div class="search-overlay--inner"><span class="icon-spinner icon-spin search-overlay--icon"></span><p class="search-overlay--text">' +
        Drupal.t("Henter oversigt...") +
        '</p><p class="cancel"><a href="#">' +
        Drupal.t("Luk") +
        "</a></p></div></div>"
    ).prependTo("body");
  });

  // FBS fraværs mimimumsperiode
  let minDate =
    Drupal.settings.oc_template_overwrites.holdMin == undefined ||
    Drupal.settings.oc_template_overwrites.holdMin == ""
      ? 0
      : Drupal.settings.oc_template_overwrites.holdMin;
  jQuery(
    "#edit-profile-provider-fbs-field-fbs-on-hold-und-0-from-datepicker-popup-0"
  ).datepicker({ minDate: minDate });
});
