var accordian = document.getElementsByClassName("accordian");
for(i =0; i<accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        // console.log(this.classList);
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        // console.log(panel);
        // console.log(panel.style.display=='');
        if(panel.style.display==="none") {
            panel.style.display = "block";
        }
        else if(panel.style.display==='') {
            panel.style.display = "block";
        }
        else {
            panel.style.display = "none";
        }
    });
}
