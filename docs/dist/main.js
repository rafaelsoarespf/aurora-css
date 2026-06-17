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
//toast
export function showToast(message, duration = 3000) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, duration);
}
//buttton animation 
window.addEventListener('DOMContentLoaded', () => {
    const animations = [
        'fade-in',
        'slide-up',
        'slide-down',
        'slide-left',
        'slide-right',
        'zoom-in',
        'pop-in',
        'blur-in'
    ];
    document.querySelectorAll('.replay-animation').forEach(button => {
        button.addEventListener('click', () => {
            const demo = button
                .parentElement
                ?.querySelector('.entrance-demo');
            if (!demo)
                return;
            const animationClass = animations.find(name => demo.classList.contains(name));
            if (!animationClass)
                return;
            demo.classList.remove(animationClass);
            void demo.offsetWidth;
            demo.classList.add(animationClass);
        });
    });
});
//# sourceMappingURL=main.js.map