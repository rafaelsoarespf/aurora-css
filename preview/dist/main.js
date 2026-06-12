const selectors = document.querySelectorAll(".theme-selector");
const savedTheme = localStorage.getItem("aurora-theme");
if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    selectors.forEach((selector) => { selector.value = savedTheme; });
}
selectors.forEach((selector) => {
    selector.addEventListener("change", () => {
        const theme = selector.value;
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("aurora-theme", theme);
        selectors.forEach((s) => { s.value = theme; });
    });
});
window.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".docs-menu-btn");
    const sidebar = document.querySelector(".docs-sidebar");
    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }
});
export {};
//# sourceMappingURL=main.js.map