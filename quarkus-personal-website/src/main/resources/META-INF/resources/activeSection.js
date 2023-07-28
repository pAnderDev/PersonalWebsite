
const sections = document.querySelectorAll("section");
const sidebarlinks = document.querySelectorAll(".sidebar a");

function setActiveSection(sectionId) {
    sections.forEach((section) => {
        section.classList.toggle("active", section.id == sectionId);
    });

    sidebarlinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") == '#${sectionId}');
    });
}

document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    let activeSection = "about"; //default active section view
    let maxVisible = 0;


    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 10; //adjust based on layout
        const sectionHeight = section.clientHeight;
        const sectionId = section.id;
        if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection = sectionId;
        }
        if(sectionTop > maxVisible && sectionTop < scrollPosition) {
            maxVisible = sectionTop;
        }
    
    });

    setActiveSection(activeSection);

    if(scrollPosition < maxVisible) {
        setActiveSection("about");
    }
});
