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
// Areas
async function GetData() {
  let x = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let FinalX = await x.json();
  return FinalX;
}
(async function DisplayMeals() {
  const MainData = await GetData();
  const Meals = MainData.meals;
  console.log(Meals);
  var Card = "";
  for (let i = 0; i < Meals.length; ++i) {
    Card += `<div Ma="${Meals[i].strArea}" class="CardContainer rounded-3 col-md-3 col-sm-12 overflow-hidden">
        <div class="Card position-relative text-white text-center" Ma="${Meals[i].strArea}">
        <img src="Imgs/Home.png" Ma="${Meals[i].strArea}" alt="MealPic" id="AREA" class="img-fluid rounded-3">
        <p Ma="${Meals[i].strArea}" class="fs-2 fw-bold" id="MealArea">${Meals[i].strArea}</p>
        </div>
    </div>`;
  }
  document.getElementById("CardContainer").innerHTML = Card;
})();
//  Show Area Meals
$("#CardContainer").click(function (e) {
  var x = e.target.getAttribute("Ma");
  console.log(x);
  localStorage.setItem("Area", `${x}`);
  location.href = "AreaMeals.html";
});
