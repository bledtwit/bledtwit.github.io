document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const revealSections = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // для секций, видимых сразу
});
