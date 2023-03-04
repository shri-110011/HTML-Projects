function createHtmlElement() {
    console.log("Inside createElement!");
    var el = document.createElement("p");
    el.innerHTML="Hello World!";
    document.body.appendChild(el);
}