// Set cookie for Contrast Theme
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var themeName = getCookie("Theme Name");
  if (themeName == "spring-theme") {
    $('input[value="spring-theme"]').prop("checked", true);
	$('input[value="summer-theme"]').prop("checked", false);
	$('input[value="winter-theme"]').prop("checked", false);
	$("body").removeClass("summer-theme");
	$("body").removeClass("winter-theme");
    $("body").addClass(themeName);
  } else {
    $('input[value="spring-theme"]').prop("checked", false);
	$('input[value="summer-theme"]').prop("checked", true);
	$('input[value="winter-theme"]').prop("checked", false);
	$("body").removeClass("spring-theme");
	$("body").removeClass("winter-theme");
    $("body").addClass(themeName);
  }
}

checkCookie();

$('.theme--contrast-theme input[type="radio"]').click(
  function () {
    var contrastValue = $('input[name="change-contrast"]:checked').val();
    setCookie("Theme Name", contrastValue, 30);
    if ($("body").hasClass("spring-theme")) {
      $("body").removeClass("spring-theme");
	  $("body").removeClass("summer-theme");
	  $("body").removeClass("winter-theme");
    }
    if ($("body").hasClass("summer-theme")) {
      $("body").removeClass("spring-theme");
	  $("body").removeClass("summer-theme");
	  $("body").removeClass("winter-theme");
	}
	if ($("body").hasClass("winter-theme")) {
		$("body").removeClass("spring-theme");
		$("body").removeClass("summer-theme");
		$("body").removeClass("winter-theme");
	  }
    $("body").addClass(contrastValue);
  }
);
