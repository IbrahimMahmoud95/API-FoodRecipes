let MealName=localStorage.getItem('Meal');
// Loading
$(document).ready(function () {
    $('body,html').css('overflow','auto');
    $('.sk-circle').fadeOut(500,function(){
        $('.LoadingPage').fadeOut(500)
    })
});
    // SideNavBar
    $('.MainNavBarIcon').click(function(){
        const HiddenWidth=$('.InnerNavBar').innerWidth();
        if ($('.SideNavBar').css('left') == '-240.562px') {
            $('.SideNavBar').animate({left:0},500);
            $('#OpenMenu').hide(250);
            $('#CloseMenu').show(250);
        }
        else{
            $('.SideNavBar').animate({left:-(HiddenWidth)},500);
            $('#OpenMenu').show(250);
            $('#CloseMenu').hide(250);
        } 
    });
    async function GetData(z=''){
        let x= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${z}`)
        let FinalX= await x.json();
        return FinalX;
    };
    GetData(MealName);
    (async function DisplayMeals(){
        const MainData= await GetData(`${MealName}`);
        // const Meals=MainData.meals[0];
        const Meals=MainData.meals.find(Meal=>Meal.strMeal===MealName)
        // console.log(MainData)
        // console.log(MainData.meals.length)
        // console.log(Meals);
        // window.alert(Meals.strMeal)
        document.getElementById('MealName').innerHTML=Meals.strMeal;
        document.getElementById('Instructions').innerHTML=Meals.strInstructions;
        document.getElementById('Area').innerHTML=Meals.strArea;
        document.getElementById('Cat').innerHTML=Meals.strCategory;
        document.getElementById('Tag').innerHTML=Meals.strTags;
        document.getElementById('MealPic').setAttribute('src',`${Meals.strMealThumb}`);
        document.getElementById('Source').setAttribute('href',`${Meals.strSource}`);
        document.getElementById('Video').setAttribute('href',`${Meals.strYoutube}`);
        let keyss =Object.values(Meals);
        let Ingridents= keyss.slice(9,29);
        let Measures= keyss.slice(29,49);
        console.log(Ingridents);
        console.log(Measures);
        let SingleIng='';
        for(let i=0;i<Ingridents.length;++i){
            if (Ingridents[i]!='') {
                SingleIng+=`<p class="Ingridents bg-primary d-inline-block py-1 mx-2 rounded-1">${Measures[i]} ${Ingridents[i]}</p>`
            }
            else{
                break;
            }
        }
        document.getElementById('MeaContainer').innerHTML=SingleIng;
    })()
