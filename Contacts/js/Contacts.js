// Loading
$(document).ready(function () {
  $("body,html").css("overflow", "auto");
  $(".sk-circle").fadeOut(500, function () {
    $(".LoadingPage").fadeOut(500);
  });
});

// SideNavBar
$(".MainNavBarIcon").click(function () {
  const HiddenWidth = $(".InnerNavBar").innerWidth();
  if ($(".SideNavBar").css("left") == "-240.562px") {
    $(".SideNavBar").animate({ left: 0 }, 500);
    $("#OpenMenu").hide(250);
    $("#CloseMenu").show(250);
  } else {
    $(".SideNavBar").animate({ left: -HiddenWidth }, 500);
    $("#OpenMenu").show(250);
    $("#CloseMenu").hide(250);
  }
});
let NameReGex = /^[A-Za-z]{3,}$/;
let EmailReGex = /[a-zA-Z0-9]{2,}\_?[a-zA-Z0-9]{2,}?\@(gmail|yahoo)\.(com)$/;
let MobileRegex = /^01[0125][0-9]{8}$/;
let PasswordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;

$('input[id="Name"]').keyup(function () {
  x = document.getElementById("Name");
  console.log(x);
  $("#Dname").show();
  if (NameReGex.test(x.value) == true) {
    $("#Dname").hide();
  }
});
$('input[id="Mail"]').keyup(function () {
  x = document.getElementById("Mail");
  console.log(x);
  $("#DMail").show();
  if (EmailReGex.test(x.value) == true) {
    $("#DMail").hide();
  }
});
$('input[id="Phone"]').keyup(function () {
  x = document.getElementById("Phone");
  console.log(x);
  $("#MN").show();
  if (MobileRegex.test(x.value) == true) {
    $("#MN").hide();
  }
});
$('input[id="Age"]').focus(function () {
  x = document.getElementById("Age");
  console.log(x);
  $("#Age").show();
  if (x < 65) {
    $("#Age").hide();
  }
});
$('input[id="Password"]').keyup(function () {
  x = document.getElementById("Password");
  console.log(x);
  $("#Pass").show();
  if (PasswordRegex.test(x.value) == true) {
    $("#Pass").hide();
  }
});
$('input[id="RePassword"]').keyup(function () {
  x = document.getElementById("RePassword");
  console.log(x);
  $("#RePass").show();
  if (
    document.getElementById("Password").value ==
    document.getElementById("RePassword").value
  ) {
    $("#RePass").hide(10, function () {
      if (
        document.getElementById("Password").value ==
          document.getElementById("RePassword").value &&
        PasswordRegex.test(document.getElementById("Password").value) == true &&
        document.getElementById("Age") < 65 &&
        MobileRegex.test(document.getElementById("Phone").value) == true &&
        EmailReGex.test(document.getElementById("Mail").value) == true &&
        NameReGex.test(document.getElementById("Name").value) == true
      )
        console.log(MobileRegex.test(document.getElementById("Phone").value));
      {
        $('button[id="Submit"').removeAttr("disabled");
      }
    });
  }
});
