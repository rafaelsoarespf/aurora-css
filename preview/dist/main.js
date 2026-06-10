const selector = document.querySelector("#theme-selector");
if (selector) {
    const savedTheme = localStorage.getItem("aurora-theme");
    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
        selector.value = savedTheme;
    }
    selector.addEventListener("change", (event) => {
        const theme = event.target.value;
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("aurora-theme", theme);
    });
}
export {};
//# sourceMappingURL=main.js.map