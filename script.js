const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

let open = false;

function setMenu(next) {
  open = next;
  mobileNav.style.display = open ? "block" : "none";
  mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
  menuBtn.textContent = open ? "Close" : "Menu";
}

menuBtn.addEventListener("click", () => setMenu(!open));

mobileNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => setMenu(false));
});