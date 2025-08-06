//NODE_OPTIONS=--max-old-space-size=4096 npm run tailwind

const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-button");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  const navLinks = mobileMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });
};

document.addEventListener("DOMContentLoaded", initApp);
