// init functions ====================================================
document.addEventListener("DOMContentLoaded", init);

function init(): void {
  initSidebar();
}

//initSidebar =============================================
export async function initSidebar(): Promise<void> {
  const sidebar = document.querySelector<HTMLElement>("#doc-sidebar");
  if (!sidebar) return;

  const response = await fetch("../../components/sidebar.html");
   if (!response.ok) { throw new Error("Unable to load sidebar.");}
  
  sidebar.innerHTML = await response.text();
}

//==================================================================
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
        ?.querySelector('.entrance-demo') as HTMLElement | null;

      if (!demo) return;

      const animationClass = animations.find(name =>
        demo.classList.contains(name)
      );

      if (!animationClass) return;

      demo.classList.remove(animationClass);

      void demo.offsetWidth;

      demo.classList.add(animationClass);

    });

  });

});

