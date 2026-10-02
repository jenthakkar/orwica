/* ===== 1. EDIT THIS BLOCK FIRST ===== */
const CONFIG = {
    whatsapp: "916354263757", // country code + number, no + or spaces
    phones: ["+91 6354263757", "+91 9601068459"], // shown in the Contact section
    email: "support@orwica.com", // confirm: your designs use orvica.com
    instagram: "the_orwica",
    hours: "Mon to Sat, 10 am to 7 pm",
    currency: "\u20B9"
};

/* ===== 2. PRODUCTS =====
   price: a number, or null to show "Price on WhatsApp"
   tag: "hair", "skin" or "hair skin" (used by the filter)
   isNew: true shows a "New" badge
   info: optional bigger infographic that opens when the photo is tapped
   benefits: optional list of short bullet points, e.g. benefits:["Nourishes hair","Adds shine"] */
const PRODUCTS = [{
        name: "Ayurvedic Hair Oil",
        tag: "hair",
        price: null,
        isNew: false,
        img: "images/product-hair-oil.jpg",
        info: "images/info-hair-oil.jpg",
        desc: "A herbal oil with amla, hibiscus, kalonji and coconut for scalp massage."
    },
    {
        name: "Rosemary Hair Oil",
        tag: "hair",
        price: null,
        isNew: true,
        img: "images/product-rosemary-oil.jpg",
        info: "images/info-rosemary-oil.jpg",
        desc: "Rosemary-infused hair oil in an easy dropper bottle."
    },
    {
        name: "Hair Mask",
        tag: "hair",
        price: null,
        isNew: false,
        img: "images/product-hair-mask.jpg",
        info: "images/info-hair-mask.jpg",
        desc: "A herbal powder with amla, hibiscus and kalonji. Mix with curd for a weekly mask."
    },
    {
        name: "Hair Conditioning Mask",
        tag: "hair",
        price: null,
        isNew: false,
        img: "images/product-hair-conditioning-mask.jpg",
        desc: "A soft conditioning mask powder for smoother, easier-to-manage hair."
    },
    {
        name: "Face Pack",
        tag: "skin",
        price: null,
        isNew: false,
        img: "images/product-face-pack.jpg",
        info: "images/info-face-pack.jpg",
        desc: "A multipurpose powder: use it as a face wash, face pack, scrub or body wash."
    },
    {
        name: "Chandan Powder",
        tag: "skin",
        price: null,
        isNew: false,
        img: "images/product-chandan.jpg",
        desc: "Pure sandalwood powder. Mix with rose water for a cooling pack."
    },
    {
        name: "Multani Mitti Powder",
        tag: "skin",
        price: null,
        isNew: false,
        img: "images/product-multani-mitti.jpg",
        desc: "Fuller's earth for a deep-cleansing face pack. Mix with rose water."
    },
    {
        name: "Neem Powder",
        tag: "hair skin",
        price: null,
        isNew: false,
        img: "images/product-neem.jpg",
        desc: "Traditional neem leaf powder for hair and skin care."
    },
    {
        name: "Santra Powder",
        tag: "skin",
        price: null,
        isNew: false,
        img: "images/product-santra-powder.jpg",
        desc: "Dried orange peel powder. Mix with rose water or curd for a fresh pack."
    },
    {
        name: "Aloe Vera Gel",
        tag: "hair skin",
        price: null,
        isNew: true,
        img: "images/product-aloe-vera-gel.jpg",
        desc: "A light, soothing gel for skin and hair. External use only."
    }
];

/* ===== 3. BENEFITS (icons are simple SVG paths) ===== */
const ICONS = {
    drop: '<path d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3z"/>',
    shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17l.7 1.8 1.8.7-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
    face: '<circle cx="12" cy="12" r="9"/><path d="M8 14c1 1.5 2.4 2 4 2s3-.5 4-2"/><path d="M9 9.5h.01M15 9.5h.01"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
};
const BENEFITS = [
    { icon: "drop", title: "A nourished scalp", text: "Herbal oils and masks made for regular scalp care and healthy-looking hair." },
    { icon: "shield", title: "Roots that feel stronger", text: "Amla, hibiscus and kalonji are traditional hair-care herbs, used here in simple blends." },
    { icon: "sparkle", title: "Natural shine and softness", text: "Conditioning care that leaves hair smoother and easier to manage." },
    { icon: "face", title: "Gentle, fresh cleansing", text: "Face packs and powders that clean skin without artificial fragrance." },
    { icon: "sun", title: "A natural glow", text: "Turmeric, santra peel and chandan have long been part of Indian skin routines." },
    { icon: "leaf", title: "Simple, herbal formulas", text: "Short ingredient lists, no artificial fragrance and no added colours." }
];

/* ===== 4. INGREDIENTS ===== */
const INGREDIENTS = [{
        name: "Amla",
        hindi: "\u0906\u0902\u0935\u0932\u093E",
        used: "Hair Oil, Hair Mask, Amla Mukhvas (winter)",
        img: "images/ing-hair-mask.jpg",
        text: "Indian gooseberry has been used in Ayurvedic hair care and in Indian kitchens for generations."
    },
    {
        name: "Hibiscus",
        hindi: "\u0917\u0941\u0921\u093C\u0939\u0932",
        used: "Hair Oil, Hair Mask",
        img: "images/ing-hair-mask.jpg",
        text: "Hibiscus flowers and leaves are traditionally used to condition hair and keep it feeling soft."
    },
    {
        name: "Kalonji",
        hindi: "\u0915\u0932\u094C\u0902\u091C\u0940",
        used: "Hair Oil, Hair Mask",
        img: "images/ing-hair-mask.jpg",
        text: "Black seed (nigella) is a traditional ingredient in scalp oils across India."
    },
    {
        name: "Rosemary",
        hindi: "\u0930\u094B\u091C\u093C\u092E\u0930\u0940",
        used: "Rosemary Hair Oil",
        img: "images/ing-rosemary.jpg",
        text: "A fragrant herb long used in scalp massage oils to nourish the scalp."
    },
    {
        name: "Neem",
        hindi: "\u0928\u0940\u092E",
        used: "Neem Powder",
        img: "images/product-neem.jpg",
        text: "Neem leaf has a long place in Indian home care for hair and skin and is traditionally mixed into pastes and packs."
    },
    {
        name: "Chandan",
        hindi: "\u091A\u0902\u0926\u0928",
        used: "Chandan Powder",
        img: "images/product-chandan.jpg",
        text: "Sandalwood is prized in Ayurvedic skin care for its cooling feel and soft natural scent."
    },
    {
        name: "Multani mitti",
        hindi: "\u092E\u0941\u0932\u094D\u0924\u093E\u0928\u0940 \u092E\u093F\u091F\u094D\u091F\u0940",
        used: "Multani Mitti Powder",
        img: "images/product-multani-mitti.jpg",
        text: "Fuller's earth is a mineral clay traditionally used in face packs to leave skin feeling clean and fresh."
    },
    {
        name: "Turmeric",
        hindi: "\u0939\u0932\u094D\u0926\u0940",
        used: "Face Pack",
        img: "images/ing-face-pack.jpg",
        text: "Haldi is a classic ingredient in Indian skin care, used for a clean, fresh look."
    },
    {
        name: "Santra peel",
        hindi: "\u0938\u0902\u0924\u0930\u093E",
        used: "Face Pack, Santra Powder",
        img: "images/product-santra-powder.jpg",
        text: "Dried orange peel is traditionally ground into a fine powder to freshen and brighten skin."
    }
];

/* ===== 5. HOW TO USE ===== */
const HOW = {
    "Hair Mask": {
        steps: [
            "Take the required amount of powder in a clean bowl.",
            "Add curd and mix well into a smooth paste.",
            "Apply evenly to scalp and hair. Leave for 1 to 2 hours.",
            "Rinse thoroughly with water."
        ],
        note: "Use once a week for best results."
    },
    "Face Pack": {
        steps: [
            "Take the required amount of powder in a clean bowl.",
            "Add water, rose water or curd (based on your skin type) and mix into a smooth paste.",
            "Apply evenly to face or body. Leave for 7 to 10 minutes.",
            "Rinse with plain water."
        ],
        note: "Use regularly for best results. Do a patch test first if you have sensitive skin."
    },
    "Hair Oil": {
        steps: [
            "Warm a small amount of oil slightly.",
            "Part your hair and massage into the scalp with your fingertips.",
            "Work the remaining oil through the lengths and ends.",
            "Leave for at least an hour or overnight, then wash with a mild shampoo."
        ],
        note: "Use 2 to 3 times a week."
    }
};

/* ===== Code below: no need to edit ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wa = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

/* WhatsApp and contact links */
$("#headerOrder").href = wa("Hello Orwica, I would like to place an order.");
$("#heroOrder").href = wa("Hello Orwica, I would like to ask about your products.");
$("#waBtn").href = wa("Hello Orwica, I would like to place an order.");
$("#igBtn").href = "https://instagram.com/" + CONFIG.instagram;
$$("[data-wa]").forEach(a => a.href = wa(a.dataset.wa));
CONFIG.phones.forEach((p, i) => {
    const el = $("#phone" + (i + 1));
    el.textContent = p;
    el.href = "tel:" + p.replace(/\s/g, "");
});
$("#emailLink").textContent = CONFIG.email;
$("#emailLink").href = "mailto:" + CONFIG.email;
$("#igLink").textContent = "@" + CONFIG.instagram;
$("#igLink").href = "https://instagram.com/" + CONFIG.instagram;
$("#hoursText").textContent = CONFIG.hours;
$("#year").textContent = new Date().getFullYear();

/* Mobile menu */
const menuBtn = $("#menuBtn"),
    nav = $("#nav");
menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
});
$$("#nav a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
}));

/* Products (no weight or volume is shown on purpose) */
const grid = $("#productGrid");

function renderProducts(filter = "all") {
    const list = PRODUCTS.filter(p => filter === "all" || (filter === "new" ? p.isNew : p.tag.split(" ").includes(filter)));
    grid.innerHTML = list.map(p => {
                const media = `${p.isNew ? '<span class="badge">New</span>' : ''}<img src="${p.img}" alt="${p.name}" loading="lazy">${p.info ? '<span class="view">View details</span>' : ''}`;
                return `
    <article class="card">
      ${p.info
        ? `<button class="card-img has-info" type="button" data-full="${p.info}" data-name="${p.name}" aria-label="View ${p.name} details">${media}</button>`
        : `<div class="card-img">${media}</div>`}
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        ${p.benefits && p.benefits.length ? `<ul class="bullets">${p.benefits.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
        <div class="price ${p.price ? "" : "ask"}">${p.price ? CONFIG.currency + p.price : "Price on WhatsApp"}</div>
        <a class="btn btn-sm" target="_blank" rel="noopener"
           href="${wa(`Hello Orwica, I would like to ask about ${p.name}.`)}">Ask on WhatsApp</a>
      </div>
    </article>`;
  }).join("");
}
$$("#filters .tab").forEach(btn => btn.addEventListener("click", () => {
  $$("#filters .tab").forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", false); });
  btn.classList.add("is-active"); btn.setAttribute("aria-selected", true);
  renderProducts(btn.dataset.filter);
}));
renderProducts();

/* Product detail popup */
const lb = $("#lightbox"), lbImg = $("#lbImg");
grid.addEventListener("click", e => {
  const b = e.target.closest(".card-img.has-info"); if (!b) return;
  lbImg.src = b.dataset.full; lbImg.alt = b.dataset.name + " details";
  lb.showModal();
});
$("#lbClose").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

/* Benefits */
$("#benefitGrid").innerHTML = BENEFITS.map(b => `
  <div class="benefit">
    <div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[b.icon]}</svg></div>
    <h3>${b.title}</h3><p>${b.text}</p>
  </div>`).join("");

/* Ingredients */
const ingList = $("#ingList"), ingPanel = $("#ingPanel");
ingList.innerHTML = INGREDIENTS.map((i, n) => `<button role="tab" data-i="${n}" aria-selected="${n===0}" class="${n===0?'is-active':''}">${i.name}</button>`).join("");
function showIngredient(n) {
  const i = INGREDIENTS[n];
  ingPanel.innerHTML = `<div class="pic"><img src="${i.img}" alt="${i.name}"></div>
    <div class="txt"><h2>${i.name}</h2><p class="hindi">${i.hindi}</p><p>${i.text}</p><p class="used">Found in: ${i.used}</p></div>`;
}
ingList.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  $$("button", ingList).forEach(x => { x.classList.remove("is-active"); x.setAttribute("aria-selected", false); });
  b.classList.add("is-active"); b.setAttribute("aria-selected", true);
  showIngredient(+b.dataset.i);
});
showIngredient(0);

/* How to use */
const howTabs = $("#howTabs"), howSteps = $("#howSteps"), howNote = $("#howNote");
const howKeys = Object.keys(HOW);
howTabs.innerHTML = howKeys.map((k, n) => `<button role="tab" class="tab ${n===0?'is-active':''}" aria-selected="${n===0}" data-k="${k}">${k}</button>`).join("");
function showHow(k) {
  howSteps.innerHTML = HOW[k].steps.map(s => `<li>${s}</li>`).join("");
  howNote.textContent = HOW[k].note;
}
howTabs.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  $$(".tab", howTabs).forEach(x => { x.classList.remove("is-active"); x.setAttribute("aria-selected", false); });
  b.classList.add("is-active"); b.setAttribute("aria-selected", true);
  showHow(b.dataset.k);
});
showHow(howKeys[0]);

/* Contact form: opens WhatsApp with the message filled in (nothing is stored on a server) */
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#cName").value.trim(), phone = $("#cPhone").value.trim(),
        topic = $("#cTopic").value, msg = $("#cMsg").value.trim(), out = $("#cMsgStatus");
  if (!name || phone.replace(/\D/g, "").length < 10) { out.textContent = "Enter your name and a 10-digit phone number."; return; }
  const text = `Hello Orwica, I am ${name} (${phone}).\nAbout: ${topic}\n${msg}`;
  window.open(wa(text), "_blank", "noopener");
  out.textContent = "Opening WhatsApp. Press send there to finish.";
});