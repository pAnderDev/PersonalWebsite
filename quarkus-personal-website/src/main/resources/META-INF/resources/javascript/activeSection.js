let sidebarLinks = document.querySelectorAll(".navbar a");

function removeActionClassFromLinks() {
    sidebarLinks.forEach((link) => {
        link.classList.remove("active");
    });
}

sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        removeActionClassFromLinks();
        event.target.classList.add("active");
    });
});