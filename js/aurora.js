document.addEventListener("DOMContentLoaded", () => {
  initThemeSelector();
  initNavbar();
  initSidebar();
  initPanel();
});

//theme selector ----------------------------------------------------------
function initThemeSelector() {
  const selectors = document.querySelectorAll(".theme-selector");
  const savedTheme = localStorage.getItem("aurora-theme");

  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);

    selectors.forEach((selector) => {
      selector.value = savedTheme;
    });
  }

  selectors.forEach((selector) => {
    selector.addEventListener("change", () => {
      const theme = selector.value;

      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("aurora-theme", theme);

      selectors.forEach((s) => {
        s.value = theme;
      });
    });
  });
}

//navbar --------------------------------------------------------------
function initNavbar() {
  const navbar = document.querySelector(".navbar__menu");
  const toggle = document.querySelector(".navbar__toggle");

  if (!(navbar instanceof HTMLElement) || !(toggle instanceof HTMLButtonElement)) {
    return;
  }

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof Node && navbar.classList.contains("active") && !navbar.contains(target) && !toggle.contains(target)) {
      navbar.classList.remove("active");
      toggle.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navbar.classList.remove("active");
      toggle.classList.remove("active");
    }
  });
}

//sidebar -----------------------------------------------------------------
function initSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".sidebar__toggle");

  if (!(sidebar instanceof HTMLElement) || !(toggle instanceof HTMLButtonElement)) {return;}

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target instanceof Node &&
      sidebar.classList.contains("active") &&
      !sidebar.contains(target) &&
      !toggle.contains(target)
    ) {
      sidebar.classList.remove("active");
      toggle.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      sidebar.classList.remove("active");
      toggle.classList.remove("active");
    }
  });
}

//panel --------------------------------------------------------------------
function initPanel() {
  const panels = document.querySelectorAll(".panel-left, .panel-right");

  panels.forEach((panel) => {
    const toggle = panel.querySelector(".panel-toggle");

    if (!(panel instanceof HTMLElement) || !(toggle instanceof HTMLButtonElement)) {
      return;
    }

    const updateToggle = () => {
      const isClosed = panel.classList.contains("closed");
      const isLeft = panel.classList.contains("panel-left");

      toggle.textContent = isLeft
        ? (isClosed ? "❯" : "❮")
        : (isClosed ? "❮" : "❯");

      toggle.setAttribute("aria-expanded", String(!isClosed));
    };

    updateToggle();

    toggle.addEventListener("click", () => {
      panel.classList.toggle("closed");
      updateToggle();
    });

  });
}

//toast -----------------------------------------------------------
function showToast(message, duration = 3000) {
  const toast = document.createElement("div");

  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}

window.Aurora = { showToast };