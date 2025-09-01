// ===== Theme persistence =====
const THEME_KEY = "na_theme";
(function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark") document.body.classList.add("dark");
})();
function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, document.body.classList.contains("dark") ? "dark" : "light");
}

// ===== Mobile menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle){
  menuToggle.addEventListener("click", ()=> navLinks.classList.toggle("show"));
}

// ===== Typing effect =====
const roles = ["Data Analyst","Web Developer","Problem Solver","Java • Html • CSS • SQL "];
const typedEl = document.getElementById("typed");
let ri=0, ci=0, deleting=false;
function typeLoop(){
  const word = roles[ri];
  typedEl.innerHTML = (deleting ? word.slice(0, ci--) : word.slice(0, ci++)) + '<span class="cursor">|</span>';
  if (!deleting && ci > word.length + 3) deleting = true;
  if (deleting && ci < 0){ deleting = false; ri = (ri+1)%roles.length; }
  setTimeout(typeLoop, deleting ? 60 : 100);
}
typeLoop();

// ===== Smooth fade-in on scroll =====
const faders = document.querySelectorAll('.fade-in');
function reveal(){
  faders.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) el.classList.add('visible');
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// ===== Project filtering buttons =====
document.querySelectorAll('.filter-btns button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btns button.active').classList.remove('active');
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
    });
  });
});

// ===== Search filter =====
const searchInput = document.getElementById('projectSearch');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll('.project-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    const visible = text.includes(q);
    card.style.display = visible ? 'block' : 'none';
  });
});

// ===== Modal for project preview =====
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");

document.querySelectorAll(".project-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    modalImg.src = card.getAttribute("data-img");
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDesc.textContent = card.querySelector("p").textContent;
    modalLink.href = card.getAttribute("data-link") || "#";
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
  });
  card.addEventListener("keypress", (e)=>{
    if(e.key === "Enter") card.click();
  });
});
modal.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal") || e.target.classList.contains("close")){
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
  }
});

// ===== Resume download =====
function downloadResume(){
  window.open('resume.pdf', '_blank');
}
window.downloadResume = downloadResume;

// ===== Contact form + toast =====
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), 2500);
    form.reset();
  });
}

// ===== Scroll to top & Active nav =====
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", ()=>{
  toTop.classList.toggle("show", window.scrollY > 400);
  // active nav
  const sections = document.querySelectorAll("section[id]");
  const top = window.scrollY;
  let curr = "";
  sections.forEach(sec=>{
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) curr = sec.getAttribute("id");
  });
  document.querySelectorAll(".nav a[href^='#']").forEach(a=>{
    a.classList.toggle("active", a.getAttribute("href") === `#${curr}`);
  });
});
toTop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
