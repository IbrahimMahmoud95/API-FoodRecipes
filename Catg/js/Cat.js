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
// Cats Data
async function GetData() {
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  let FinalX = await x.json();
  // console.log(FinalX)
  return FinalX;
}
// GetData();
(async function DisplayMeals() {
  const MainData = await GetData();
  const Meals = MainData.categories;
  console.log(Meals);
  var Card = "";
  for (let i = 0; i < Meals.length; ++i) {
    Card += `<div Mc="${
      Meals[i].strCategory
    }" class="CardContainer rounded-3 col-md-3 col-sm-12 overflow-hidden">
        <div class="Card position-relative" Mc="${Meals[i].strCategory}">
            <img src=${Meals[i].strCategoryThumb} Mc="${
      Meals[i].strCategory
    }" alt="MealPic" class="img-fluid rounded-3">
            <div Mc="${
              Meals[i].strCategory
            }" class="CardOverlay rounded-3 position-absolute top-0 bottom-0 start-0 end-0 d-flex flex-column text-center overflow-hidden">
                <p Mc="${
                  Meals[i].strCategory
                }" class="fs-5 p-0 m-0 fw-bold" id="MealCat">${
      Meals[i].strCategory
    }</p>
                <span Mc="${
                  Meals[i].strCategory
                }" class="fs-5 p-0 m-0 text-center">${Meals[
      i
    ].strCategoryDescription
      .split(" ", 15)
      .join(" ")}</span>
            </div>
        </div>
    </div>`;
  }
  document.getElementById("CardContainer").innerHTML = Card;
})();
// show cat
$("#CardContainer").click(function (e) {
  var x = e.target.getAttribute("Mc");
  console.log(x);
  // window.alert(x)
  localStorage.setItem("Cat", `${x}`);
  location.href = "CatShow.html";
});
