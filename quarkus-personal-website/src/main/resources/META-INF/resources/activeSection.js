
const sections = document.querySelectorAll("section");
const sidebarLinks = document.querySelectorAll(".sidebar a");
let mainSection = document.querySelector(".main-content");

function setActiveSection(sectionId) {
    sections.forEach((section) => {
        section.classList.toggle("active", section.id === sectionId);
    });

    sidebarLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
    });
}

document.addEventListener("scroll", () => {
    const scrollPosition = mainSection.scrollTop;
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


// const sections = document.querySelectorAll("section");
// const sidebarLinks = document.querySelectorAll(".sidebar a");

// function setActiveSection(sectionId) {
//   sections.forEach((section) => {
//     section.classList.toggle("active", section.id === sectionId);
//   });

//   sidebarLinks.forEach((link) => {
//     link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
//   });
// }

// const observerOptions = {
//   root: document.querySelector(".main-content"),
//   threshold: 0.6, // Adjust the threshold as needed
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const sectionId = entry.target.id;
//       setActiveSection(sectionId);
//     }
//   });
// }, observerOptions);

// sections.forEach((section) => {
//   observer.observe(section);
// });

