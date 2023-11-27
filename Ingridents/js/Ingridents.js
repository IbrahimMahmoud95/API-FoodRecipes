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
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let FinalX = await x.json();
  let IngSample = FinalX.meals.slice(0, 20);
  // console.log(FinalX);
  // console.log(IngSample);
  return IngSample;
}
// GetData()
(async function DisplayMeals() {
  const MainData = await GetData();
  const Meals = MainData;
  console.log(Meals[5].strIngredient);
  var Card = "";
  for (let i = 0; i < Meals.length; ++i) {
    Card += `<div Mi="${
      Meals[i].strIngredient
    }" class="CardContainer rounded-3 col-md-3 col-sm-12 overflow-hidden">
        <div class="Card position-relative text-white text-center" Mi="${
          Meals[i].strIngredient
        }">
        <img src="Imgs/Ing.png" Mi="${
          Meals[i].strIngredient
        }" alt="MealPic" id="AREA" class="img-fluid rounded-3">
        <p Mi="${Meals[i].strIngredient}" class="fs-2 fw-bold" id="MealArea">${
      Meals[i].strIngredient
    }</p>
        <span class="text-white text-center">${Meals[i].strDescription
          .split(" ", 10)
          .join(" ")} </span>
        </div>
    </div>`;
  }
  document.getElementById("CardContainer").innerHTML = Card;
})();
//  Show Ingridents Meals
$("#CardContainer").click(async function (e) {
  var x = await e.target.getAttribute("Mi");
  console.log(x);
  localStorage.setItem("Ingrident", `${x}`);
  location.href = "IngMeals.html";
});
