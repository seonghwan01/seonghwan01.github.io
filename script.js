const topButton = document.querySelector(".top-button");

const setTopButtonVisibility = () => {
  if (!topButton) return;
  topButton.classList.toggle("is-visible", window.scrollY > 520);
};

window.addEventListener("scroll", setTopButtonVisibility, { passive: true });
setTopButtonVisibility();

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
