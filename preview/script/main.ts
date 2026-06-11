const selectors = document.querySelectorAll<HTMLSelectElement>(".theme-selector");
const savedTheme = localStorage.getItem("aurora-theme");

if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
  selectors.forEach((selector) => {selector.value = savedTheme;});
}

selectors.forEach((selector) => {
  selector.addEventListener("change", () => {
    const theme = selector.value;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("aurora-theme", theme);
    selectors.forEach((s) => { s.value = theme; });
  });
});