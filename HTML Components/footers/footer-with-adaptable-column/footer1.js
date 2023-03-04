var clientWidth, clientHeight;
var innerWidth, innerHeight ;

function getCurrentWidths() {
    clientWidth = document.body.clientWidth;
    innerWidth = window.innerWidth;
    clientHeight = document.body.clientHeight;
    innerHeight = window.innerHeight;
    console.log("clientWidth: "+clientWidth+" clientHeight: "+clientHeight);
    console.log("innerWidth: "+innerWidth+" innerHeight: "+innerHeight);
}

// window.addEventListener("resize", ()=> {
//     clientWidth = document.body.parentNode.clientWidth;
//     innerWidth = window.innerWidth;
//     // console.log("innerWidth: "+innerWidth);
//     if(clientWidth<735) {
//         console.log("#");
//         document.body.style.width = "735px";
//         // document.body.style.backgroundColor = "palegoldenrod";
//     }
//     else {
//         // document.body.style.removeProperty("background-color");
//         document.body.style.removeProperty("width");
//     }
// });