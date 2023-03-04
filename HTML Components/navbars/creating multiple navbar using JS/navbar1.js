function createNavbar() {
    //Create the nav tag and set the class attribute as 'navbar'
    // var navbar = document.createElement("nav");

    //Crate the ul tag
    var ul = document.createElement("ul");
    // ul.setAttribute("class", "navbar")

    var menuItems=["Home", "About Us", "Contact Us"];

    //Create the li tag with contents similar to the one in the html page and placing 
    //them in ul
    for(let idx in menuItems) {
        // console.log(menuItems[idx]);
        var li = document.createElement("li");
        var a = document.createElement("a");
        var link = document.createTextNode(menuItems[idx]);
        a.appendChild(link);
        li.appendChild(a);
        ul.appendChild(li);
    }

    //Create the search bar
    var input = document.createElement("input");
    input.setAttribute("id", "search");
    input.setAttribute("placeholder", "Seaarch");

    //Placing the input element inside the ul
    ul.appendChild(input);

    //Placing the ul element inside the nav
    navbar.appendChild(ul);

    return navbar;
}

var body = document.getElementsByTagName("body")[0];

var nav = document.getElementsByClassName("navbar")[0];
// var nav = document.querySelectorAll("nav");

// console.log(nav);

//Placing the nav element inside the body
var noOfNavbars = 5;
var colors = ["white", "green"];
var backgroundColors = ["red", "blue"];
var colorsOnHover = ["green", "#a8a853", "magenta"];
for(let i=0;i<noOfNavbars;i++) {
    // console.log(i);

    //Create the br tag
    var br = document.createElement("br");
    body.appendChild(br);
    
    // var navbar = createNavbar();

    var navbar = nav.cloneNode(true);
    navbar.setAttribute("style","background-color:"+backgroundColors[i]);

    var a = [...navbar.getElementsByTagName("a")];
    // console.log(a);
    // console.log(navbar);

    a.forEach(el=> {
        // console.log(el);
        el.style.color = "floralWhite";
        el.dataset.colorOnHover=colorsOnHover[i];
        el.addEventListener("mouseover", changeBackgroundColor);
        el.addEventListener("mouseout", removeBackgroundColor);
    });

    // console.log(navbar);

    body.append(navbar);
}
function changeBackgroundColor(e) {
    console.log(e);
    // console.log(e.target);
    if(e.target.classList.contains("menu-link")) {
        e.target.style.backgroundColor = e.target.dataset.colorOnHover;
    }
}
function removeBackgroundColor(e) {
    // console.log(e);
    e.target.style.backgroundColor = "";
}
console.log("Inside navbar1.js");
