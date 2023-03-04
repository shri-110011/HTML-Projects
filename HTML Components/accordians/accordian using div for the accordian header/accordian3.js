var accordians = document.getElementsByClassName("accordian");
for(i =0; i<accordians.length; i++) {
    accordians[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        let panel = this.nextElementSibling;
        
        // Adding/changing display style based on the previous display style for the panel.

        if(panel.style.display === "none") {
            panel.style.display = "block";
        }
        else if(panel.style.display === "block") {
            panel.style.display = "none";
        }
        else if(panel.style.display === "") {
            panel.style.display = "block";
        }
    });
}