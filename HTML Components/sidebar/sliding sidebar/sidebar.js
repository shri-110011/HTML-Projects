var sidebarItems = document.querySelectorAll(".sidebar-item");
console.log(sidebarItems);
var activeSidebarItem = sidebarItems[0];
for(i=0; i<sidebarItems.length; i++) {
    sidebarItems[i].addEventListener("click", function() {
        console.log(activeSidebarItem);
        activeSidebarItem.classList.remove("active");
        activeSidebarItem = this;
        this.classList.add("active");
        console.log(this);
    })
}

function toggleSidebar() {
    var sidebar = document.querySelectorAll(".sidebar");
    console.log(sidebar[0].matches(".sidebar-hidden"));
    if(!sidebar[0].matches(".sidebar-hidden")) {
        sidebar[0].style.right = "18%";
    }
    else {
        sidebar[0].style.right = "0%";
        console.log("#");
    }
    sidebar[0].classList.toggle("sidebar-hidden");
}