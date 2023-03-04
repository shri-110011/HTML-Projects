var accordians = document.getElementsByClassName("accordian");
for(i =0; i<accordians.length; i++) {
    accordians[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        let panel = this.nextElementSibling;
        
       // Adding the value for maxHeight equal to the height of the panel.
       console.log(panel.scrollHeight);

       if (panel.style.maxHeight) {
           panel.style.maxHeight = null;
       } else {
           panel.style.maxHeight = panel.scrollHeight + "px";
       } 
    });
}