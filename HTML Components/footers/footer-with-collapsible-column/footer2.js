var clientWidth, clientHeight;
var offsetWidth, offsetHeight;
var innerWidth, innerHeight ;
var isClickListenerAddedToAccordian = false;
var footerMainContent = document.querySelectorAll("#footer-main-content");

function getCurrentWidths() {
    clientWidth = document.body.clientWidth;
    offsetWidth = document.body.offsetWidth;
    innerWidth = window.innerWidth;
    clientHeight = document.body.clientHeight;
    offsetHeight = document.body.offsetHeight;
    innerHeight = window.innerHeight;
    console.log("clientWidth: "+clientWidth+" clientHeight: "+clientHeight);
    console.log("offsetWidth: "+offsetWidth+" offsetHeight: "+offsetHeight);
    console.log("innerWidth: "+innerWidth+" innerHeight: "+innerHeight);
}

if(document.body.clientWidth < 600) {
    removeClass(footerMainContent, "footer-main-content");
    changeFooterStyle();
}
window.addEventListener("resize", ()=> {
    clientWidth = document.body.clientWidth;
    if(document.body.clientWidth < 600) {
        removeClass(footerMainContent, "footer-main-content");
    }
    else {
        var footerColumnContents = document.querySelectorAll(".footer-column div");
        addClass(footerMainContent, "footer-main-content");
        removeCSSProperty(footerColumnContents, "display");
    }
    changeFooterStyle();
});
function changeFooterStyle() {
    var footerColumnHeaders = document.querySelectorAll(".footer-column h3");
    var footerColumnContents = document.querySelectorAll(".footer-column div");

    clientWidth = document.body.clientWidth;
    if(clientWidth<600) {
        // console.log("Screen width less than 600px");
        // console.log(footerColumnHeaders);
        addClass(footerColumnHeaders, "accordian");
        addClass(footerColumnContents, "panel");

        if(!isClickListenerAddedToAccordian) {
            var accordian = document.getElementsByClassName("accordian");
            for(i =0; i<accordian.length; i++) {
                accordian[i].addEventListener("click", handleClickOnFooterColumnHeader);
            }
            isClickListenerAddedToAccordian = true;
            // console.log("isClickListenerAddedToAccordian "+isClickListenerAddedToAccordian);
        }
    }
    else {
        isClickListenerAddedToAccordian = false;
        var accordian = document.getElementsByClassName("accordian");
        for(i=0; i<accordian.length; i++) {
            accordian[i].removeEventListener("click", handleClickOnFooterColumnHeader);
        }
        removeClass(footerColumnHeaders, "accordian");
        removeClass(footerColumnContents, "panel");
        // console.log("isClickListenerAddedToAccordian "+isClickListenerAddedToAccordian);
        // console.log(footerColumnHeaders);
    }
}

function handleClickOnFooterColumnHeader() {
     // console.log(this.classList);
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     // console.log(panel);
    //  console.log(panel.style.display);
     if(panel.style.display==="none") {
         panel.style.display = "block";
     }
     else if(panel.style.display==='') {
         panel.style.display = "block";
     }
     else {
         panel.style.display = "none";
     }
}
function addClass(nodeList, className) {
    for(i=0; i<nodeList.length; i++) {
        nodeList[i].classList = className;
    }
}
function removeClass(nodeList, className) {
    for(i=0; i<nodeList.length; i++) {
        nodeList[i].classList.remove(className);
    }
}
function removeCSSProperty(nodeList, propertyName) {
    for(i=0; i<nodeList.length; i++) {
        nodeList[i].style.removeProperty(propertyName);
    }
}
