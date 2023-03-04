var paraCount=0;
function showText() {
    var para = document.createElement("p");
    para.innerHTML = "Learning Waits in Selenium";
    paraCount++;
    para.setAttribute("id", paraCount);

    var container2 = document.getElementById("container-2");

    setTimeout(function (){
        container2.appendChild(para);
    }, 7000);
}
function showFavouriteColor() {
    var colorDropdown = document.getElementById("color-dropdown");
    var favColorPara =  document.getElementById("fav-color");
    favColorPara.innerHTML = colorDropdown.value;
}