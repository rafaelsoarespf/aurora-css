const selector = document.querySelector<HTMLSelectElement>(
  "#theme-selector"
);

if (selector) {
  const savedTheme = localStorage.getItem("aurora-theme");

  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    selector.value = savedTheme;
  }

  selector.addEventListener("change", (event) => {
    const theme = (event.target as HTMLSelectElement).value;

    document.body.setAttribute("data-theme", theme);

    localStorage.setItem("aurora-theme", theme);
  });
}