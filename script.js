// ===== Shayari Section =====
const mushairaTab = document.getElementById("mushaira-tab");
const poetsTab = document.getElementById("poets-tab");
const shayariBox = document.getElementById("shayari-box");
const englishShayari = document.getElementById("english-shayari");
const urduShayari = document.getElementById("urdu-shayari");
const shayariAudio = document.getElementById("shayari-audio");
const shayariBtn = document.getElementById("shayari-btn");

const shayaris = [{ english: "Ab mujhe uski yaad nahi aati, ab woh mujhe yaad ho chuki hai.", urdu: "اب مجھے اُس کی یاد نہیں آتی، اب وہ مجھے یاد ہو چکی ہے۔", audio: "Assets/YaadE.m4a" }, { english: "Kya sitam hai ki uski surat ab gaur karne par yaad aati hai.", urdu: "کیا ستم ہے کہ اُس کی صورت اب غور کرنے پر یاد آتی ہے۔", audio: "Assets/sitamK.m4a" },
{ english: "Zindagi mein kuch haasil nahi kar sakta, main kabhi aaraam nahi paa sakta.", urdu: "زندگی میں کچھ حاصل نہیں کر سکتا، میں کبھی آرام نہیں پا سکتا۔", audio: "Assets/aaramKK.m4a" }, { english: "Nafrat bhi kyun karein unse, itna bhi vaasta kyun rakhein unse?", urdu: "نفرت بھی کیوں کریں اُن سے، اتنا بھی واسطہ کیوں رکھیں اُن سے؟", audio: "Assets/nafratE.m4a" },
{ english: "Ki ab hum bichhde toh shayad khwabon mein milein, jaise sukhe hue phool kitaabon mein milein.", urdu: "کہ اب ہم بچھڑے تو شاید خوابوں میں ملیں، جیسے سوکھے ہوئے پھول کتابوں میں ملیں۔", audio: "Assets/phoolK.m4a" },
{ english: "Usse kaho bohot jald milne aaye humein, kahin akele rehne ki aadat hi na pad jaaye humein.", urdu: "اُس سے کہو بہت جلد ملنے آئے ہمیں، کہیں اکیلے رہنے کی عادت ہی نہ پڑ جائے ہمیں۔", audio: "Assets/akeleE.m4a" },
{ english: "Apne maiyyar se neeche toh main aane se raha, sher bhooka hi sahi, ghaas toh khaane se raha.", urdu: "اپنے معیار سے نیچے تو میں آنے سے رہا، شیر بھوکا ہی سہی، گھاس تو کھانے سے رہا۔", audio: "Assets/maiyyarE.m4a" },
{ english: "Aap apne baal baandh lo, main baar-baar apni baat bhool raha hoon.", urdu: "آپ اپنے بال باندھ لو، میں بار بار اپنی بات بھول رہا ہوں۔", audio: "Assets/baalE.m4a" },
{ english: "Ab nikal aao apne andar se, ghar mein samaan ki zaroorat hai.", urdu: "اب نکل آؤ اپنے اندر سے، گھر میں سامان کی ضرورت ہے۔", audio: "Assets/samaanE.m4a" },
{ english: "Woh kehti hai, 'Safed kapdon mein bade acche lagte ho Asif.' Aaj kafan mein lipta hoon toh woh roti kyun hai?", urdu: "وہ کہتی ہے، 'سفید کپڑوں میں بڑے اچھے لگتے ہو آصف۔' آج کفن میں لپٹا ہوں تو وہ روٹی کیوں ہے؟", audio: "Assets/kafanE.ogg" },
{ english: "Aere gaire ko theherne ki ijaazat nahi di, dil ko dil rakha hai, bazaar nahi hone diya.", urdu: "اَیر غیر کو ٹھہرنے کی اجازت نہیں دی، دل کو دل رکھا ہے، بازار نہیں ہونے دیا۔", audio: "Assets/bazaarE.ogg" },
{ english: "Hum bhi gaon mein kabhi shaam ko baitha karte the, humko bhi haalaaton ne baahar bheja hai.", urdu: "ہم بھی گاؤں میں کبھی شام کو بیٹھا کرتے تھے، ہم کو بھی حالات نے باہر بھیجا ہے۔", audio: "Assets/haalatonE.ogg" },
{ english: "Tera chup rehna mere zehan mein kya baith gaya, itni awaazein tujhe di ki gala baith gaya.", urdu: "تیرا چُپ رہنا میرے ذہن میں کیا بیٹھ گیا، اتنی آوازیں تجھے دی کہ گلا بیٹھ گیا۔", audio: "Assets/AwaazE.ogg" },
{ english: "Raat ke dariya ka kinara bhi kabhi aayega, waqt ka kya hai, humara bhi kabhi aayega, ek accha din aaya tha zindagi mein kabhi, poochhna tha: dobara bhi kabhi aayega?", urdu: "رات کے دریا کا کنارہ بھی کبھی آئے گا، وقت کا کیا ہے، ہمارا بھی کبھی آئے گا، ایک اچھا دن آیا تھا زندگی میں کبھی، پوچھنا تھا: دوبارہ بھی کبھی آئے گا؟", audio: "Assets/RaatE.ogg" },
{ english: "Guftagu humse aur khayalon mein koi aur, haal aapka bhi hamare namaazon jaisa hai.", urdu: "گفتگو ہم سے اور خیالات میں کوئی اور، حال آپ کا بھی ہمارے نمازوں جیسا ہے۔", audio: "Assets/NamazK.m4a" },
{ english: "Aur phir ek sawaari kya utri, main bhari gaadi mein akela reh gaya.", urdu: "اور پھر ایک سواری کیا اترے، میں بھاری گاڑی میں اکیلا رہ گیا۔", audio: "Assets/SawaariK.m4a" },
{ english: "Haqeeqat jaan lunga toh sab paraaye ho jaayenge, humein is bharam mein rehne do ki sab apne hain.", urdu: "حقیقت جان لوں گا تو سب پرائے ہو جائیں گے، ہمیں اس بھرم میں رہنے دو کہ سب اپنے ہیں۔", audio: "Assets/ParayeK.m4a" },
{ english: "Mujhe mehenge-mehenge tohfe bohot pasand hain, jaise waqt, aitbaar, izzat, aur chai.", urdu: "مجھے مہنگے مہنگے تحفے بہت پسند ہیں، جیسے وقت، اعتبار، عزت، اور چائے۔", audio: "Assets/ChaiK.m4a" },
{ english: "Intezaar itna karo ki Khuda bhi kahe, le le, haq hai tera.", urdu: "انتظار اتنا کرو کہ خدا بھی کہے، لے لے، حق ہے تیرا۔", audio: "Assets/HaqK.m4a" }, { english: "Hazaar gham hain, khulaasa kaun kare? Muskura dete hain, ab tamaasha kaun kare?", urdu: "ہزار غم ہیں، خلاصہ کون کرے؟ مسکرا دیتے ہیں، اب تماشہ کون کرے؟", audio: "Assets/TamashaK.m4a" }];

let currentShayari = -1;

mushairaTab.addEventListener("click", () => {
  mushairaTab.classList.add("active");
  poetsTab.classList.remove("active");
  shayariBox.style.display = "flex";
  shayariBtn.style.display = "inline-block";
  document.getElementById("poets-society").style.display = "none";
  englishShayari.textContent = "Press the button to begin.";
  urduShayari.textContent = "";
  shayariBtn.textContent = "Click Me!";
  currentShayari = -1;
});

shayariBtn.addEventListener("click", () => {
  if (shayaris.length === 0) return;
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * shayaris.length);
  } while (randomIndex === currentShayari && shayaris.length > 1);
  currentShayari = randomIndex;
  englishShayari.textContent = shayaris[currentShayari].english;
  urduShayari.textContent = shayaris[currentShayari].urdu;
  shayariAudio.src = shayaris[currentShayari].audio;
  shayariAudio.play();
  shayariBtn.textContent = "Next";
});

// ===== POET'S SOCIETY TAB (NEW) =====
poetsTab.addEventListener("click", () => {
  mushairaTab.classList.remove("active");
  poetsTab.classList.add("active");
  shayariBox.style.display = "none";
  shayariBtn.style.display = "none";
  document.getElementById("poets-society").style.display = "block";
  renderFeed();
});

// ===== POET'S SOCIETY: DATA & STORAGE =====
function getPosts() {
  try {
    return JSON.parse(localStorage.getItem("ps_posts") || "[]");
  } catch { return []; }
}

function savePosts(posts) {
  localStorage.setItem("ps_posts", JSON.stringify(posts));
}

function getInitials(name) {
  if (!name) return "?";
  return name.trim().split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return Math.floor(diff / 60) + "m ago";
  if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
  return Math.floor(diff / 86400) + "d ago";
}

// ===== POET'S SOCIETY: RENDER FEED =====
function renderFeed() {
  const feed = document.getElementById("ps-feed");
  if (!feed) return;
  const posts = getPosts();
  if (posts.length === 0) {
    feed.innerHTML = `<div class="ps-empty"><i class="fa-solid fa-feather" style="font-size:2rem; color:crimson;"></i><p>No posts yet. Be the first to share your poetry!</p></div>`;
    return;
  }
  feed.innerHTML = "";
  posts.slice().reverse().forEach((post, idx) => {
    const realIdx = posts.length - 1 - idx;
    const card = document.createElement("div");
    card.className = "ps-card";
    card.style.animationDelay = (idx * 0.07) + "s";

    const imageHTML = post.imageData
      ? `<div class="ps-card-image"><img src="${post.imageData}" alt="post image" /></div>`
      : "";

    const pdfHTML = post.pdfData
      ? `<div class="ps-card-pdf">
           <i class="fa-solid fa-file-pdf" style="color:crimson;"></i>
           <a class="ps-pdf-link" href="${post.pdfData}" download="${post.pdfName || 'poem.pdf'}">
             <i class="fa-solid fa-download"></i> ${post.pdfName || "Download PDF"}
           </a>
         </div>`
      : "";

    card.innerHTML = `
      <div class="ps-card-header">
        <div class="ps-avatar">${getInitials(post.name)}</div>
        <div class="ps-card-meta">
          <span class="ps-card-name">${post.name || "Anonymous"}</span>
          <span class="ps-card-time">${timeAgo(post.timestamp)}</span>
        </div>
      </div>
      <div class="ps-card-body">
        <p class="ps-card-text">${post.content.replace(/\n/g, "<br>")}</p>
        ${imageHTML}
        ${pdfHTML}
      </div>
      <div class="ps-card-actions">
        <button class="ps-like-btn ${post.liked ? 'liked' : ''}" data-idx="${realIdx}">
          <i class="fa-${post.liked ? 'solid' : 'regular'} fa-heart"></i>
          <span class="ps-like-count">${post.likes || 0}</span>
        </button>
        <button class="ps-comment-toggle-btn" data-idx="${realIdx}">
          <i class="fa-regular fa-comment"></i>
          <span>${(post.comments || []).length}</span>
        </button>
      </div>
      <div class="ps-comments-section" id="comments-${realIdx}" style="display:none;">
        <div class="ps-comments-list" id="comments-list-${realIdx}">
          ${(post.comments || []).map(c => `<div class="ps-comment"><span class="ps-comment-author">${c.author}:</span> ${c.text}</div>`).join("")}
        </div>
        <div class="ps-comment-input-row">
          <input type="text" class="ps-comment-input" id="comment-input-${realIdx}" placeholder="Add a comment..." maxlength="200" />
          <button class="ps-comment-post-btn" data-idx="${realIdx}"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>
    `;
    feed.appendChild(card);
  });

  // Like button events
  feed.querySelectorAll(".ps-like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx);
      const posts = getPosts();
      posts[idx].liked = !posts[idx].liked;
      posts[idx].likes = (posts[idx].likes || 0) + (posts[idx].liked ? 1 : -1);
      if (posts[idx].likes < 0) posts[idx].likes = 0;
      savePosts(posts);
      renderFeed();
    });
  });

  // Comment toggle events
  feed.querySelectorAll(".ps-comment-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.idx;
      const section = document.getElementById("comments-" + idx);
      section.style.display = section.style.display === "none" ? "block" : "none";
    });
  });

  // Comment post events
  feed.querySelectorAll(".ps-comment-post-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.idx);
      const input = document.getElementById("comment-input-" + idx);
      const text = input.value.trim();
      if (!text) return;
      const posts = getPosts();
      if (!posts[idx].comments) posts[idx].comments = [];
      posts[idx].comments.push({ author: "Guest", text });
      savePosts(posts);
      renderFeed();
      // Re-open comments section after re-render
      const section = document.getElementById("comments-" + idx);
      if (section) section.style.display = "block";
    });
  });
}

// ===== POET'S SOCIETY: POST BUTTON =====
document.getElementById("ps-post-btn").addEventListener("click", async () => {
  const name = document.getElementById("ps-name").value.trim();
  const content = document.getElementById("ps-content").value.trim();
  const imageInput = document.getElementById("ps-image-input");
  const pdfInput = document.getElementById("ps-pdf-input");

  if (!content) {
    alert("Please write something before posting.");
    return;
  }

  const post = {
    name: name || "Anonymous",
    content,
    timestamp: Date.now(),
    likes: 0,
    liked: false,
    comments: [],
    imageData: null,
    pdfData: null,
    pdfName: null
  };

  // Handle image
  if (imageInput.files[0]) {
    post.imageData = await fileToBase64(imageInput.files[0]);
  }

  // Handle PDF
  if (pdfInput.files[0]) {
    post.pdfData = await fileToBase64(pdfInput.files[0]);
    post.pdfName = pdfInput.files[0].name;
  }

  const posts = getPosts();
  posts.push(post);
  savePosts(posts);

  // Reset form
  document.getElementById("ps-name").value = "";
  document.getElementById("ps-content").value = "";
  imageInput.value = "";
  pdfInput.value = "";
  document.getElementById("ps-file-label").textContent = "";

  renderFeed();
});

// File label update
document.getElementById("ps-image-input").addEventListener("change", function () {
  if (this.files[0]) document.getElementById("ps-file-label").textContent = "📷 " + this.files[0].name;
});
document.getElementById("ps-pdf-input").addEventListener("change", function () {
  if (this.files[0]) document.getElementById("ps-file-label").textContent = "📄 " + this.files[0].name;
});

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ===== OVERLAY FUNCTIONS =====
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

// ===== ABOUT AUTHORS OVERLAY =====
document.querySelectorAll('a[href="#about-authors"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showOverlay("about-authors-section");
  });
});

// ===== FUTURE PROSPECTS OVERLAY =====
document.querySelectorAll('a[href="#future-prospects"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showOverlay("future-prospects-section");
  });
});

// ===== OVERLAY CLOSE BUTTONS =====
document.querySelectorAll('.hidden-section').forEach(section => {
  let closeBtn = section.querySelector('.close-btn');
  if (!closeBtn) {
    closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = "Close";
    section.appendChild(closeBtn);
  }
  closeBtn.addEventListener('click', () => hideOverlay(section));
});

// ===== MOBILE SIDEBAR =====
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.style.right = sidebar.style.right === "0px" ? "-100%" : "0";
  menuIcon.classList.toggle("active");
});

// ===== OVERLAY & SIDEBAR LINKS =====
document.querySelectorAll('a[href="#about-authors"], a[href="#future-prospects"], a[href="#contact"], a[href="#donation"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#about-authors") showOverlay("about-authors-section");
    else if (href === "#future-prospects") showOverlay("future-prospects-section");
    else if (href === "#donation") showOverlay("donation-section");
    else if (href === "#contact") document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    sidebar.style.right = "-100%";
    menuIcon.classList.remove("active");
  });
});

// ===== OVERLAY CLOSE BUTTONS (second pass for dynamically needed) =====
document.querySelectorAll('.hidden-section').forEach(section => {
  let closeBtn = section.querySelector('.close-btn');
  if (!closeBtn) {
    closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = "Close";
    section.appendChild(closeBtn);
  }
  closeBtn.addEventListener('click', () => hideOverlay(section));
});

// ===== ESC KEY CLOSE =====
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll('.hidden-section.show').forEach(section => hideOverlay(section));
    sidebar.style.right = "-100%";
    menuIcon.classList.remove("active");
  }
});

// ===== DONATION MODAL (NEW) =====
// Payment method selection
document.querySelectorAll(".pay-method-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pay-method-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.getElementById("donate-btn").addEventListener("click", () => {
  const name = document.getElementById("donor-name").value.trim();
  const amount = document.getElementById("donor-amount").value.trim();
  const method = document.querySelector(".pay-method-btn.active")?.dataset.method || "UPI";
  const msgEl = document.getElementById("donate-msg");

  if (!name || !amount || isNaN(amount) || Number(amount) <= 0) {
    msgEl.textContent = "Please enter your name and a valid amount.";
    msgEl.style.display = "block";
    msgEl.style.color = "crimson";
    return;
  }

  msgEl.textContent = `Thank you for supporting Mehfil-e-Dard ❤️ (${method}: ₹${amount})`;
  msgEl.style.display = "block";
  msgEl.style.color = "#00e676";

  document.getElementById("donor-name").value = "";
  document.getElementById("donor-amount").value = "";

  setTimeout(() => { msgEl.style.display = "none"; }, 4000);
});
