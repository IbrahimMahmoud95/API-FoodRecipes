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
// Home Random Meals
async function GetData(I) {
  let x = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${I}`
  );
  let FinalX = await x.json();
  return FinalX;
}
let IngMeals = localStorage.getItem("Ingrident");

(async function DisplayMeals() {
  const MainData = await GetData(IngMeals);
  const Meals = MainData.meals;
  console.log(Meals);
  var Card = "";
  for (let i = 0; i < Meals.length; ++i) {
    Card += `<div Mn="${Meals[i].strMeal}" class="CardContainer rounded-3 col-md-3 col-sm-12 overflow-hidden">
        <div class="Card position-relative" Mn="${Meals[i].strMeal}">
            <img src=${Meals[i].strMealThumb} Mn="${Meals[i].strMeal}" alt="MealPic" class="img-fluid rounded-3">
            <div Mn="${Meals[i].strMeal}" class="CardOverlay rounded-3 position-absolute top-0 bottom-0 start-0 end-0 d-lg-flex justify-content-center align-items-center">
                <p Mn="${Meals[i].strMeal}" class="fs-3 fw-bold" id="MealName">${Meals[i].strMeal}</p>
            </div>
        </div>
    </div>`;
  }
  document.getElementById("CardContainer").innerHTML = Card;
})();

//  Show Meal
$("#CardContainer").click(function (e) {
  var x = e.target.getAttribute("Mn");
  console.log(x);
  localStorage.setItem("Meal", `${x}`);
  location.href = "Meal.html";
});
