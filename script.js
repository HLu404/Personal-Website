const text = "Hi, I'm Harry";
const typed = document.getElementById("typed");
const tabs = document.getElementById("tabs");
let i = 0;

function type() {
  typed.textContent = text.slice(0, ++i);
  if (i < text.length) {
    setTimeout(type, 90);
  } else {
    typed.insertAdjacentHTML("afterend", '<span class="dot">.</span>');
    setTimeout(() => tabs.classList.add("show"), 300);
  }
}
setTimeout(type, 400);

tabs.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const open = btn.getAttribute("aria-selected") === "true";
  tabs.querySelectorAll("button").forEach((b) =>
    b.setAttribute("aria-selected", b === btn && !open)
  );
  document.querySelectorAll("section").forEach((s) =>
    s.classList.toggle("active", s.id === btn.dataset.tab && !open)
  );
});
