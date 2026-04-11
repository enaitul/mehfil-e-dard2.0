// ============================================================
//  MEHFIL-E-DARD  |  script2.js  — Author's Choices
// ============================================================

// ─── Admin list ──────────────────────────────────────────────
const ADMINS = ["md enaitul hoque", "kamran asad"];

function isAdmin(name) {
  return ADMINS.includes((name || "").trim().toLowerCase());
}

// ─── LocalStorage helpers ────────────────────────────────────
function getRecs() {
  try { return JSON.parse(localStorage.getItem("ac_recs") || "[]"); }
  catch { return []; }
}
function saveRecs(recs) {
  localStorage.setItem("ac_recs", JSON.stringify(recs));
}

// ─── Utility ─────────────────────────────────────────────────
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

function getLinkLabel(cat) {
  if (cat === "songs")  return '<i class="fa-solid fa-headphones"></i> Listen';
  if (cat === "cinema") return '<i class="fa-solid fa-play"></i> Watch';
  if (cat === "books")  return '<i class="fa-solid fa-book-open-reader"></i> Read';
  return '<i class="fa-solid fa-arrow-up-right-from-square"></i> Explore';
}

function getCategoryLabel(cat) {
  const map = { songs: "🎵 Songs", cinema: "🎬 Cinema", books: "📚 Books", others: "✨ Others" };
  return map[cat] || cat;
}

// ─── Seed default data (first load only) ────────────────────
function seedDefaultsIfEmpty() {
  if (getRecs().length > 0) return;

  const defaults = [
    // Songs
    { id: Date.now() + 1, cat: "songs",  title: "Cold / Mess", desc: "Prateek Kuhad's quiet heartbreak. This song feels like 3am in November.", author: "Kamran Asad", link: "https://www.youtube.com/watch?v=6YF_YfNbRtg", image: null },
    { id: Date.now() + 2, cat: "songs",  title: "Yellow", desc: "Coldplay at their most achingly honest. For every person who loved quietly.", author: "Md Enaitul Hoque", link: "https://www.youtube.com/watch?v=yKNxeF4KMsY", image: null },
    { id: Date.now() + 3, cat: "songs",  title: "505", desc: "Arctic Monkeys — a song about longing so intense it transcends the music.", author: "Md Enaitul Hoque", link: "https://www.youtube.com/watch?v=Q4IqvR5LCLU", image: null },
    // Cinema
    { id: Date.now() + 4, cat: "cinema", title: "Whiplash", desc: "The pursuit of greatness at the cost of everything else. Terrifying and beautiful.", author: "Md Enaitul Hoque", link: "https://www.imdb.com/title/tt2582802/", image: null },
    { id: Date.now() + 5, cat: "cinema", title: "La La Land", desc: "A love story about dreams as much as people. The ending will stay with you forever.", author: "Kamran Asad", link: "https://www.imdb.com/title/tt3783958/", image: null },
    { id: Date.now() + 6, cat: "cinema", title: "Interstellar", desc: "Nolan asking the deepest questions — love, time, sacrifice — through the cosmos.", author: "Md Enaitul Hoque", link: "https://www.imdb.com/title/tt0816692/", image: null },
    // Books
    { id: Date.now() + 7, cat: "books",  title: "The Alchemist", desc: "Paulo Coelho's gentle reminder that the universe conspires to help you find your path.", author: "Kamran Asad", link: "https://www.goodreads.com/book/show/865.The_Alchemist", image: null },
    { id: Date.now() + 8, cat: "books",  title: "Kafka on the Shore", desc: "Murakami weaves dreams into reality. Surreal, poetic, unforgettable.", author: "Md Enaitul Hoque", link: "https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore", image: null },
    // Others
    { id: Date.now() + 9, cat: "others", title: "Wander at Dusk", desc: "Take a walk without a destination. The best thoughts arrive when you're not looking for them.", author: "Kamran Asad", link: null, image: null },
  ];
  saveRecs(defaults);
}

// ─── Render ───────────────────────────────────────────────────
const CATEGORIES = ["songs", "cinema", "books", "others"];
let activeCat = "all";

// Current admin viewer name (read from input when checking delete)
function getCurrentAdminName() {
  return (document.getElementById("ac-admin-name").value || "").trim();
}

function renderAll() {
  const recs = getRecs();

  CATEGORIES.forEach(cat => {
    const grid  = document.getElementById("grid-" + cat);
    const empty = document.getElementById("empty-" + cat);
    const items = recs.filter(r => r.cat === cat);

    grid.innerHTML = "";
    if (items.length === 0) {
      empty.style.display = "flex";
      grid.style.display  = "none";
    } else {
      empty.style.display = "none";
      grid.style.display  = "grid";
      items.forEach((rec, i) => {
        const card = buildCard(rec, i);
        grid.appendChild(card);
      });
    }

    // Section visibility based on filter
    const section = document.getElementById("section-" + cat);
    if (activeCat === "all" || activeCat === cat) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

function buildCard(rec, animIdx) {
  const viewer   = getCurrentAdminName();
  const canDel   = isAdmin(viewer);

  const card = document.createElement("div");
  card.className = "ac-card";
  card.style.animationDelay = (animIdx * 0.07) + "s";
  card.dataset.id = rec.id;

  const imageHTML = rec.image
    ? `<div class="ac-card-img"><img src="${rec.image}" alt="${rec.title}" loading="lazy" /></div>`
    : `<div class="ac-card-img ac-card-img--placeholder">
         <span class="ac-card-cat-icon">${getCatEmoji(rec.cat)}</span>
       </div>`;

  const linkHTML = rec.link
    ? `<a class="ac-card-link" href="${rec.link}" target="_blank" rel="noopener">
         ${getLinkLabel(rec.cat)}
       </a>`
    : "";

  const deleteHTML = canDel
    ? `<button class="ac-card-delete" data-id="${rec.id}" title="Remove">
         <i class="fa-solid fa-trash-can"></i>
       </button>`
    : "";

  const catBadge = `<span class="ac-card-badge">${getCategoryLabel(rec.cat)}</span>`;
  const authorLine = rec.author
    ? `<p class="ac-card-author"><i class="fa-solid fa-feather-pointed"></i> ${rec.author}</p>`
    : "";

  card.innerHTML = `
    ${imageHTML}
    <div class="ac-card-body">
      ${deleteHTML}
      ${catBadge}
      <h3 class="ac-card-title">${rec.title}</h3>
      <p class="ac-card-desc">${rec.desc}</p>
      ${authorLine}
      <div class="ac-card-footer">
        ${linkHTML}
      </div>
    </div>
  `;

  // Delete event
  const delBtn = card.querySelector(".ac-card-delete");
  if (delBtn) {
    delBtn.addEventListener("click", () => showDeleteModal(rec.id));
  }

  return card;
}

function getCatEmoji(cat) {
  const map = { songs: "🎵", cinema: "🎬", books: "📚", others: "✨" };
  return map[cat] || "✨";
}

// ─── Admin panel toggle ──────────────────────────────────────
const adminToggle   = document.getElementById("ac-admin-toggle");
const adminFormWrap = document.getElementById("ac-admin-form-wrap");
const chevron       = document.getElementById("ac-chevron");
const lockIcon      = document.getElementById("ac-lock-icon");
let adminOpen = false;

adminToggle.addEventListener("click", () => {
  adminOpen = !adminOpen;
  adminFormWrap.classList.toggle("open", adminOpen);
  chevron.style.transform = adminOpen ? "rotate(180deg)" : "rotate(0deg)";
  lockIcon.className = adminOpen ? "fa-solid fa-lock-open" : "fa-solid fa-lock";
});

// ─── Add Recommendation ──────────────────────────────────────
document.getElementById("ac-add-btn").addEventListener("click", async () => {
  const adminName = document.getElementById("ac-admin-name").value.trim();
  const cat       = document.getElementById("ac-category").value;
  const title     = document.getElementById("ac-title").value.trim();
  const desc      = document.getElementById("ac-desc").value.trim();
  const linkVal   = document.getElementById("ac-link").value.trim();
  const imgInput  = document.getElementById("ac-image-input");
  const errEl     = document.getElementById("ac-form-error");

  // Validation
  const showErr = (msg) => {
    errEl.textContent = msg;
    errEl.style.display = "block";
    setTimeout(() => { errEl.style.display = "none"; }, 3500);
  };

  if (!adminName)        return showErr("Please enter your admin name.");
  if (!isAdmin(adminName)) return showErr("Access denied. Only Md Enaitul Hoque and Kamran Asad can add recommendations.");
  if (!cat)              return showErr("Please choose a category.");
  if (!title)            return showErr("Please enter a title.");
  if (!desc)             return showErr("Please write a description.");

  let imageData = null;
  if (imgInput.files[0]) {
    imageData = await fileToBase64(imgInput.files[0]);
  }

  const rec = {
    id:     Date.now(),
    cat,
    title,
    desc,
    author: adminName,
    link:   linkVal || null,
    image:  imageData,
  };

  const recs = getRecs();
  recs.push(rec);
  saveRecs(recs);

  // Reset form fields (keep admin name for convenience)
  document.getElementById("ac-category").value = "";
  document.getElementById("ac-title").value = "";
  document.getElementById("ac-desc").value = "";
  document.getElementById("ac-link").value = "";
  imgInput.value = "";
  document.getElementById("ac-file-label").textContent = "";

  // Switch filter to show new category
  activeCat = cat;
  document.querySelectorAll(".ac-filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });

  renderAll();
});

// Image label preview
document.getElementById("ac-image-input").addEventListener("change", function () {
  if (this.files[0]) {
    document.getElementById("ac-file-label").textContent = "📷 " + this.files[0].name;
  }
});

// ─── Filter bar ──────────────────────────────────────────────
document.querySelectorAll(".ac-filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    activeCat = btn.dataset.cat;
    document.querySelectorAll(".ac-filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderAll();
  });
});

// ─── Delete modal ────────────────────────────────────────────
let pendingDeleteId = null;

function showDeleteModal(id) {
  pendingDeleteId = id;
  const modal = document.getElementById("ac-delete-modal");
  modal.style.display = "flex";
  const box = modal.querySelector(".delete-modal-box");
  box.style.transform = "scale(0.85)";
  box.style.opacity = "0";
  requestAnimationFrame(() => {
    box.style.transition = "transform 0.28s cubic-bezier(.34,1.56,.64,1), opacity 0.28s ease";
    box.style.transform = "scale(1)";
    box.style.opacity = "1";
  });
}

function hideDeleteModal() {
  document.getElementById("ac-delete-modal").style.display = "none";
  pendingDeleteId = null;
}

document.getElementById("ac-delete-yes").addEventListener("click", () => {
  if (pendingDeleteId === null) return;
  const recs = getRecs().filter(r => r.id !== pendingDeleteId);
  saveRecs(recs);
  hideDeleteModal();
  renderAll();
});

document.getElementById("ac-delete-no").addEventListener("click", hideDeleteModal);

// Re-render cards when admin name changes (to show/hide delete buttons)
document.getElementById("ac-admin-name").addEventListener("input", () => renderAll());

// ─── Overlay helpers ─────────────────────────────────────────
function showOverlay(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.style.display = "flex";
  section.classList.add("show");
  document.body.style.overflow = "hidden";
}
function hideOverlay(section) {
  if (!section) return;
  section.style.display = "none";
  section.classList.remove("show");
  document.body.style.overflow = "auto";
}

document.querySelectorAll(".hidden-section").forEach(section => {
  let closeBtn = section.querySelector(".close-btn");
  if (!closeBtn) {
    closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "Close";
    section.appendChild(closeBtn);
  }
  closeBtn.addEventListener("click", () => hideOverlay(section));
});

// ─── Sidebar (fixed, same pattern as main page) ───────────────
const menuIcon        = document.getElementById("menu-icon");
const sidebar         = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

function openSidebar() {
  sidebar.classList.add("open");
  sidebar.setAttribute("aria-hidden", "false");
  sidebarBackdrop.classList.add("active");
  menuIcon.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeSidebar() {
  sidebar.classList.remove("open");
  sidebar.setAttribute("aria-hidden", "true");
  sidebarBackdrop.classList.remove("active");
  menuIcon.classList.remove("active");
  if (!document.querySelector(".hidden-section.show")) {
    document.body.style.overflow = "auto";
  }
}

menuIcon.addEventListener("click", () => sidebar.classList.contains("open") ? closeSidebar() : openSidebar());
menuIcon.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sidebar.classList.contains("open") ? closeSidebar() : openSidebar(); }
});
sidebarCloseBtn.addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("touchstart", closeSidebar, { passive: true });

// ─── Sidebar link handling (robust mobile + touch support) ───
document.querySelectorAll(".sidebar a").forEach(link => {
  function handleSidebarLink(e) {
    const href = link.getAttribute("href");

    if (href === "#about-authors" || href === "#future-prospects") {
      e.preventDefault();
      closeSidebar();
      setTimeout(() => {
        if (href === "#about-authors")         showOverlay("about-authors-section");
        else if (href === "#future-prospects") showOverlay("future-prospects-section");
      }, 50);
    } else {
      // Normal navigation (index.html, index2.html, index.html#contact, index.html#donation)
      closeSidebar();
    }
  }

  link.addEventListener("click", handleSidebarLink);
  link.addEventListener("touchend", function(e) {
    const href = link.getAttribute("href");
    if (href === "#about-authors" || href === "#future-prospects") {
      handleSidebarLink(e);
    }
  }, { passive: false });
});

// Desktop nav overlay links
document.querySelectorAll(
  '.nav-links a[href="#about-authors"], .nav-links a[href="#future-prospects"]'
).forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#about-authors")         showOverlay("about-authors-section");
    else if (href === "#future-prospects") showOverlay("future-prospects-section");
  });
});

// ESC to close everything
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".hidden-section.show").forEach(s => hideOverlay(s));
    closeSidebar();
    hideDeleteModal();
  }
});

// ─── Scroll-triggered fade-in for sections ───────────────────
function observeSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ac-section--visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".ac-section").forEach(s => observer.observe(s));
}

// ─── Init ────────────────────────────────────────────────────
seedDefaultsIfEmpty();
renderAll();
observeSections();
