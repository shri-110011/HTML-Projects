var sidebarItems = document.querySelectorAll(".sidebar li");
console.log(sidebarItems);
var activeSidebarItem = sidebarItems[0];
for(i=0; i<sidebarItems.length; i++) {
    sidebarItems[i].addEventListener("click", function(e) {
        console.log(activeSidebarItem);
        activeSidebarItem.classList.remove("active");
        activeSidebarItem = this;
        this.classList.add("active");
        console.log(this);
        console.log(e.target);
    })
}
function toggleSidebar() {
    var sidebar = document.querySelectorAll(".sidebar");
    sidebar[0].classList.toggle("sidebar-hidden");
}