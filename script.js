// ===== Shayari Section =====
const mushairaTab = document.getElementById("mushaira-tab");
const poetsTab = document.getElementById("poets-tab");
const shayariBox = document.getElementById("shayari-box");
const englishShayari = document.getElementById("english-shayari");
const urduShayari = document.getElementById("urdu-shayari");
const shayariAudio = document.getElementById("shayari-audio");
const shayariBtn = document.getElementById("shayari-btn");

// Add your full shayaris array here

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

// Mushaira tab
mushairaTab.addEventListener("click", () => {
  mushairaTab.classList.add("active");
  poetsTab.classList.remove("active");
  shayariBox.style.display = "flex";
  shayariBtn.style.display = "inline-block";
  englishShayari.textContent = "Press the button to begin.";
  urduShayari.textContent = "";
  shayariBtn.textContent = "Click Me!";
  currentShayari = -1;
});

// Shayari button
shayariBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * shayaris.length);
  currentShayari = randomIndex;
  englishShayari.textContent = shayaris[currentShayari].english;
  urduShayari.textContent = shayaris[currentShayari].urdu;
  shayariAudio.src = shayaris[currentShayari].audio;
  shayariAudio.play();
  shayariBtn.textContent = "Next";
});

// Poets tab
poetsTab.addEventListener("click", () => {
  mushairaTab.classList.remove("active");
  poetsTab.classList.add("active");
  shayariBox.style.display = "flex";
  shayariBtn.style.display = "none";
  englishShayari.textContent = "Coming Soon...";
  urduShayari.textContent = "جلد آ رہا ہے...";
});

// ===== Overlay Function (Simplified) =====
function showOverlay(sectionId) {
  const mainContent = document.getElementById("main-content");
  const section = document.getElementById(sectionId);

  // Hide main content
  mainContent.style.display = "none";

  // Hide all overlays
  document.querySelectorAll('.hidden-section').forEach(sec => sec.classList.remove('show'));

  // Show the selected overlay
  section.classList.add('show');
}

// ===== About Authors =====
const aboutLink = document.querySelector('a[href="#about-authors"]');
aboutLink.addEventListener("click", e => {
  e.preventDefault();
  showOverlay("about-authors-section");
});

// ===== Future Prospects =====
const futureLink = document.querySelector('a[href="#future-prospects"]');
futureLink.addEventListener("click", e => {
  e.preventDefault();
  showOverlay("future-prospects-section");
});

// ===== Overlay Close Buttons =====
document.querySelectorAll('.hidden-section').forEach(section => {
  const closeBtn = document.createElement('button');
  closeBtn.textContent = "Close";
  closeBtn.className = "close-btn";
  section.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    section.classList.remove('show');
    document.getElementById("main-content").style.display = "block";
  });
});

// ===== Mobile Sidebar =====
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

// Open sidebar
menuIcon.addEventListener("click", () => {
  sidebar.style.left = "0";
});

// Close sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

// Close sidebar when clicking a link
sidebar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.style.left = "-100%";
  });
});
