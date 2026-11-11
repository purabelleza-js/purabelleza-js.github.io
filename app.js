const BUSINESS_WHATSAPP_NUMBERS = new Set(["5493878759878", "5493878415462"]);
const PAYMENT_ACCOUNT = {
  beneficiary: "Joaquín Sánchez Montel",
  bank: "Naranja X",
  alias: "purabellezajs.2026",
  concept: "Pura Belleza JS - Pedido",
};
const CURRENCY = "ARS";

const initialProducts = [
  {
    id: "corrector-para-ojeras",
    name: "Corrector para ojeras en barra",
    category: "Rostro",
    price: 2500,
    stock: 3,
    tag: "",
    image: "images/corrector_para_ojeras.jpg",
    alt: "Corrector para ojeras en barra",
  },
  {
    id: "mascara-miss-betty",
    name: "Máscara de pestañas Miss Betty",
    category: "Ojos",
    price: 2000,
    stock: 2,
    tag: "",
    image: "images/Rimel_volu.jpg",
    alt: "Máscaras de pestañas Miss Betty para largo y volumen",
  },
  {
    id: "lip-gloss-lip-oil",
    name: "Lip gloss y lip oil (4 modelos)(Por unidad)",
    category: "Labios",
    price: 1500,
    stock: 3,
    tag: "",
    image: "images/Gloss.jpg",
    alt: "Cuatro modelos de lip gloss y lip oil",
  },
  {
    id: "mascarillas-faciales",
    name: "Mascarillas faciales Capybara y Centella Asiática",
    category: "Rostro",
    price: 2000,
    stock: 2,
    tag: "",
    image: "images/Mascarilla.jpg",
    alt: "Mascarillas faciales Capybara y de Centella Asiática",
  },
  {
    id: "delineador-magnetico",
    name: "Delineador retráctil Romantic Rain",
    category: "Ojos",
    price: 2000,
    stock: 2,
    tag: "",
    image: "images/delineador_de_ojos_Magnetico.jpg",
    alt: "Delineador magnético negro Romantic Rain",
  },
  {
    id: "balsamo-chanchito",
    name: "Bálsamo labial Chanchito",
    category: "Labios",
    price: 2000,
    stock: 1,
    tag: "",
    image: "images/Balsamo_chanchito.jpg",
    alt: "Bálsamo labial hidratante con envase de chanchito rosa",
  },
  {
    id: "delineador-ultra-fino",
    name: "Delineador ultrafino negro",
    category: "Ojos",
    price: 2000,
    stock: 2,
    tag: "",
    image: "images/Delineador_de_ojos.jpg",
    alt: "Delineador negro ultrafino, tono 1001",
  },
  {
    id: "pestanas-8d",
    name: "Pestañas 8D",
    category: "Ojos",
    price: 2000,
    stock: 0,
    tag: "",
    image: "images/pestañas_8D.jpg",
    alt: "Pestañas postizas 8D reutilizables",
  },
  {
    id: "labial-miss-betty",
    name: "Labial Miss Betty",
    category: "Labios",
    price: 2500,
    stock: 1,
    tag: "",
    image: "images/Labial_Mate.jpg",
    alt: "Labial Miss Betty de color duradero",
  },
  {
    id: "parches-acne",
    available: false,
    name: "Parches para el acné",
    category: "Rostro",
    price: 2000,
    stock: 0,
    tag: "",
    image: "images/Parche_de_acne.jpg",
    alt: "Parches faciales para granitos de día y noche",
  },
  {
    id: "unas-press-on",
    name: "Uñas press on celestes y rosas",
    category: "Uñas",
    price: 2000,
    stock: 1,
    tag: "",
    image: "images/Uñas_efecto_gato.jpg",
    alt: "Uñas efecto gato",
  },
  {
    id: "toallitas-humedas",
    name: "Toallitas húmedas",
    category: "Rostro",
    price: 1500,
    stock: 1,
    tag: "",
    image: "images/Toallitas_Humedas.jpg",
    alt: "Toallitas húmedas para el rostro",
  },
  {
    id: "gloss-rosa-con-brillo",
    name: "Gloss rosa con brillo",
    category: "Labios",
    price: 2500,
    stock: 0,
    tag: "",
    image: "images/Gloss_Rosa_Con_Brillo.jpg",
    alt: "Gloss rosado con brillo",
  },
  {
    id: "gloss-rojo",
    name: "Gloss Rojo",
    category: "Labios",
    price: 2500,
    stock: 1,
    tag: "",
    image: "images/Gloss_rojo.jpg",
    alt: "Gloss Rojo ",
  },
  {
    id:"arqueadores-de-pestanas",
    name:"Arqueadores de pestañas",
    category:"Ojos",
    price:2000,
    stock:2,
    tag:"",
    image:"images/Arqueadores_de_pestanas.jpg",
    alt:"Arqueadores de pestañas",
  },
  {
    id:"delineadores-de-labios",
    name:"Delineadores de labios (Por unidad)",
    category:"Labios",
    price:2000,
    stock:5,
    tag:"",
    image:"images/delineadores_de_labios.jpg",
    alt:"Delineadores de labios",
  },
  {
    id:"libro-de-pestanas-10vol-a-14vol",
    name:"Libro de pestañas 10Vol a 14Vol",
    category:"Ojos",
    price:10000,
    stock:1,
    tag:"",
    image:"images/libro_de_pestanas_10Vol_a_14Vol.jpg",
    alt:"Libro de pestañas 10Vol a 14Vol",
  },
  {
    id:"libro-pestanas-10vol-a-14vol-x2",
    name:"Libro de pestañas 10Vol a 14Vol x2",
    category:"Ojos",
    price:16000,
    stock:1,
    tag:"",
    image:"images/libro_pestana_10Vol_a_14Vol_x2.jpg",
    alt:"Libro de pestañas 10Vol a 14Vol x2",
  },
  {
    id: "cepillo-para-pestanas-a",
    name: "Cepillo para pestañas Azules (pack de 3)",
    category: "Ojos",
    price: 2000,
    stock: 6,
    tag: "",
    image: "images/cepillo_de_pestañas_azul.jpg",
    alt: "Cepillo para pestañas Azules"
  },
  {
    id: "cepillo-para-pestanas-r",
    name: "Cepillo para pestañas Rosados (pack de 3)",
    category: "Ojos",
    price: 1000,
    stock: 6,
    tag: "",
    image: "images/cepillo_de_pestañas_rosado.jpg",
    alt: "Cepillo para pestañas rosados"
  },
  {
    id: "cepillo-para-pestanas-m",
    name: "Cepillo para pestañas Moradas (pack de 3)",
    category: "Ojos",
    price: 1000,
    stock: 3,
    tag: "",
    image: "images/Cepillo_de_pestañas_morado.jpg",
    alt: "Cepillo para pestañas Moradas"
  },
  {
    id: "cepillo-para-pestanas-rosa-fuerte",
    name: "Cepillo para pestañas Rosa Fuerte (pack de 3)",
    category: "Ojos",
    price: 1000,
    stock: 6,
    tag: "",
    image: "images/cepillo_de_pestañas_rosado_fuerte.jpg",
    alt: "Cepillo para pestañas Rosa Fuerte"
  },
  {
    id: "rubor-liquido",
    name: "Rubor líquido",
    category: "Rostro",
    price: 5000,
    stock: 1,
    tag: "",
    image: "images/rubor_liquido.jpg",
    alt: "Rubor líquido"  
  },
  {
    id: "pinza-para-depilar-cejas",
    name: "Pinza para depilar cejas",
    category: "Rostro",
    price: 2000,
    stock: 1,
    tag: "",
    image: "images/pinza_para_depilar_cejas.jpg",
    alt: "Pinza para depilar cejas"
  },
  {
    id:"perfiladora-de-pelo-facial-y-cepillo-para-cejas", 
    name:"Perfiladora de pelo facial y cepillo para cejas",
    category:"Rostro",
    price:2500,
    stock:1,
    tag:"",
    image:"images/perfiladora_de_pelo_y_cepillo_de_pestañas.jpg",
    alt:"Perfiladora de pelo facial y cepillo para cejas"
  },
  {
    id:"mascarilla-de-barro",
    name:"Mascarilla facial de barro",
    category:"Rostro",
    price:1000,
    stock:0,
    tag:"",
    image:"images/mascarilla_facial_de_barro.jpg",
    alt:"Mascarilla facial de barro"
  },
  {
    id:"crema-de-arroz-para-manos",
    name:"Crema de arroz para manos",
    category:"Rostro",
    price:3000,
    stock:2,
    tag:"",
    image:"images/crema_para_manos_de_arroz.jpg",
    alt:"Crema de arroz para manos"
  },
  {
    id:"parches-para-ojos",
    name:"Parches para ojos",
    category:"Rostro",
    price:2000,
    stock:1,  
    tag:"",
    image:"images/parches_para_ojos.jpg",
    alt:"Parches para ojos"
  
  }
];

const CATALOG_CACHE_KEY = "pura-belleza-catalog-v1";
const FAVORITES_STORAGE_KEY = "pura-belleza-favorites-v1";
const CATALOG_ID_ALIASES = new Map([
  ["corrector", "corrector-para-ojeras"],
  ["corrector-baoshi", "corrector-para-ojeras"],
  ["cascarilla-de-barro", "mascarilla-de-barro"],
]);
let products = [...initialProducts];
const cart = new Map();
let favoriteProductIds = new Set();
const productGrid = document.querySelector("#product-grid");
const cartPanel = document.querySelector("#cart-panel");
const overlay = document.querySelector("#overlay");
const checkoutDialog = document.querySelector("#checkout-dialog");
const productDialog = document.querySelector("#product-dialog");
const brandSocials = document.querySelector(".brand-socials");
let activeCategory = "Todos";
let searchTerm = "";
let catalogLoadInProgress = false;
let catalogWarning = "";
let hasLoadedCatalog = false;

document.addEventListener("click", (event) => {
  if (!brandSocials.contains(event.target)) brandSocials.open = false;
});

function restoreFavorites() {
  try {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!savedFavorites) return;
    const favoriteIds = JSON.parse(savedFavorites);
    if (!Array.isArray(favoriteIds) || favoriteIds.some((id) => typeof id !== "string")) {
      throw new Error("El formato de favoritos guardados no es válido.");
    }
    favoriteProductIds = new Set(favoriteIds);
  } catch (error) {
    console.warn("No se pudieron recuperar los favoritos guardados:", error);
    favoriteProductIds = new Set();
  }
}

function toggleFavorite(productId) {
  if (favoriteProductIds.has(productId)) favoriteProductIds.delete(productId);
  else favoriteProductIds.add(productId);

  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...favoriteProductIds]));
  } catch (error) {
    console.warn("No se pudieron guardar los favoritos:", error);
  }
  renderFavoritesCount();
  renderProducts();
}

function renderFavoritesCount() {
  const count = favoriteProductIds.size;
  document.querySelector("#favorites-count").textContent = count;
  document.querySelector("#open-favorites").setAttribute("aria-label", `Ver favoritos (${count})`);
}

function showImagePlaceholder(event) {
  if (event.target instanceof HTMLImageElement) {
    event.target.hidden = true;
    const viewButton = event.target.closest(".product-image-view");
    if (viewButton) {
      viewButton.disabled = true;
      viewButton.setAttribute("aria-label", "Imagen del producto no disponible");
    }
  }
}

productGrid.addEventListener("error", showImagePlaceholder, true);
document.querySelector("#cart-items").addEventListener("error", showImagePlaceholder, true);

const formatPrice = (price) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: CURRENCY,
    maximumFractionDigits: 0,
  }).format(price);

const displayPrice = (price) => (price == null ? "Precio a confirmar" : formatPrice(price));
const findProduct = (id) => products.find((item) => item.id === id);
const normalizeProductId = (id) =>
  id.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/_/g, "-");
const isProductAvailable = (product) =>
  product?.stock == null ? product?.available !== false : product.stock > 0;
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
})[character]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted) {
      if (character === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"' && field.length === 0) {
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n" || character === "\r") {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      row.push(field);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }

  if (quoted) throw new Error("El CSV tiene una comilla sin cerrar.");
  if (field.length || row.length) {
    row.push(field);
    if (row.some((value) => value.trim())) rows.push(row);
  }
  if (rows.length < 2) throw new Error("El archivo CSV no tiene productos para mostrar.");

  const headers = rows[0].map((header) => header.replace(/^\uFEFF/, "").trim().toLowerCase());
  const requiredHeaders = ["id", "price", "stock"];
  const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header));
  if (missingHeaders.length) throw new Error(`Faltan columnas en el archivo CSV: ${missingHeaders.join(", ")}.`);

  const ids = new Set();
  return new Map(rows.slice(1).map((cells, rowIndex) => {
    const values = Object.fromEntries(headers.map((header, index) => [header, (cells[index] ?? "").trim()]));
    const id = normalizeProductId(values.id);
    const rowNumber = rowIndex + 2;
    const rawPrice = values.price.replace(/[^\d.,+-]/g, "");
    const normalizedPrice = rawPrice.includes(",") && rawPrice.includes(".")
      ? rawPrice.lastIndexOf(",") > rawPrice.lastIndexOf(".")
        ? rawPrice.replace(/\./g, "").replace(",", ".")
        : rawPrice.replace(/,/g, "")
      : /[.,]\d{3}$/.test(rawPrice)
        ? rawPrice.replace(/[.,]/g, "")
        : rawPrice.replace(",", ".");
    const price = values.price === "" ? null : Number(normalizedPrice);
    const stock = Number(values.stock);

    if (!/^[a-z0-9_-]+$/.test(id)) throw new Error(`El ID de la fila ${rowNumber} está vacío o no es válido.`);
    if (ids.has(id)) throw new Error(`El ID "${id}" está repetido en la fila ${rowNumber}.`);
    if (values.price !== "" && (!Number.isFinite(price) || price < 0)) {
      throw new Error(`El precio de la fila ${rowNumber} debe ser un número igual o mayor que cero, o quedar vacío.`);
    }
    if (values.stock === "" || !Number.isInteger(stock) || stock < 0) {
      throw new Error(`El stock de la fila ${rowNumber} debe ser un número entero igual o mayor que cero.`);
    }
    ids.add(id);
    return [id, { price, stock }];
  }));
}

function applyCatalogCsv(csv) {
  const parsedUpdates = parseCsv(csv);
  const updates = new Map();
  for (const [id, update] of parsedUpdates) {
    const sheetId = normalizeProductId(id);
    const canonicalId = CATALOG_ID_ALIASES.get(sheetId) ?? sheetId;
    if (updates.has(canonicalId)) {
      throw new Error(`El ID "${canonicalId}" aparece más de una vez en la hoja.`);
    }
    updates.set(canonicalId, update);
  }
  const knownIds = new Set(initialProducts.map((product) => normalizeProductId(product.id)));
  const unknownIds = [...updates.keys()].filter((id) => !knownIds.has(id));
  products = initialProducts.map((product) => {
    const update = updates.get(normalizeProductId(product.id));
    return update ? { ...product, ...update } : product;
  });
  catalogWarning = unknownIds.length
    ? `Se ignoraron IDs que no existen en los productos del sitio: ${unknownIds.join(", ")}.`
    : "";
  hasLoadedCatalog = true;
}

function restoreCachedCatalog() {
  try {
    const csv = localStorage.getItem(CATALOG_CACHE_KEY);
    if (csv) applyCatalogCsv(csv);
    return Boolean(csv);
  } catch (error) {
    console.warn("No se pudo recuperar el último catálogo guardado:", error);
    return false;
  }
}

async function loadProducts() {
  const csvUrl = window.CATALOG_CSV_URL?.trim();
  if (!csvUrl) {
    renderProducts();
    return;
  }
  if (catalogLoadInProgress) return;
  catalogLoadInProgress = true;
  try {
    const url = new URL(csvUrl, window.location.href);
    url.searchParams.set("_catalog_refresh", Date.now());
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`No se pudo leer el archivo CSV (error ${response.status}).`);
    const csv = await response.text();
    if (csv.trimStart().startsWith("<")) {
      throw new Error("El archivo del catálogo no parece estar en formato CSV.");
    }
    applyCatalogCsv(csv);
    try {
      localStorage.setItem(CATALOG_CACHE_KEY, csv);
    } catch (error) {
      console.warn("No se pudo guardar una copia local del catálogo:", error);
    }
    renderProducts();
    renderCart();
  } catch (error) {
    console.error("No se pudo cargar el archivo CSV del catálogo:", error);
    if (!hasLoadedCatalog) restoreCachedCatalog();
    const fallback = hasLoadedCatalog
      ? "Se conserva el último catálogo válido."
      : "Se muestran los datos iniciales de esta página.";
    catalogWarning = `No se pudo cargar el catálogo (${error.message}). ${fallback}`;
    renderProducts();
  } finally {
    catalogLoadInProgress = false;
  }
}

function renderProducts() {
  const warningMarkup = catalogWarning
    ? `<p class="catalog-warning" role="status">${escapeHtml(catalogWarning)}</p>`
    : "";
  document.querySelector(".shop-tools").hidden = products.length === 0;
  if (products.length === 0) {
    productGrid.innerHTML = `${warningMarkup}<p class="no-results">Próximamente encontrarás aquí nuestros productos.</p>`;
    return;
  }

  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos"
      || (activeCategory === "Favoritos"
        ? favoriteProductIds.has(product.id)
        : product.category === activeCategory);
    const matchesSearch = `${product.name} ${product.category}`.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (!visibleProducts.length) {
    const emptyMessage = activeCategory === "Favoritos" && !searchTerm
      ? "Todavía no tienes productos favoritos. Marca el corazón de un producto para guardarlo aquí."
      : "No encontramos productos con esa búsqueda.";
    productGrid.innerHTML = `${warningMarkup}<p class="no-results">${emptyMessage}</p>`;
    return;
  }

  productGrid.innerHTML = warningMarkup + visibleProducts
    .map(
      (product) => {
        const available = isProductAvailable(product);
        const isFavorite = favoriteProductIds.has(product.id);
        return `
        <article class="product-card">
          <div class="product-image-wrap">
            <div class="image-placeholder" aria-hidden="true"><span>Foto local pendiente</span></div>
            ${product.image ? `
              <button class="product-image-view" type="button" data-view-product="${escapeHtml(product.id)}" aria-label="Ver imagen de ${escapeHtml(product.name)} ampliada">
                <img class="product-image" src="${escapeHtml(product.image)}" alt="" loading="${product.id === "libro_pestanas_10Vol_a_14Vol_x2" ? "eager" : "lazy"}" />
              </button>` : ""}
              <button class="favorite-button${isFavorite ? " is-favorite" : ""}" type="button" data-favorite="${escapeHtml(product.id)}" aria-label="${isFavorite ? `Quitar ${escapeHtml(product.name)} de favoritos` : `Agregar ${escapeHtml(product.name)} a favoritos`}" aria-pressed="${isFavorite}">
                ${isFavorite ? "♥" : "♡"}
              </button>
              ${!available ? '<span class="product-tag">Agotado</span>' : product.tag ? `<span class="product-tag">${escapeHtml(product.tag)}</span>` : ""}
              <button class="add-button" type="button" data-add="${escapeHtml(product.id)}" aria-label="${available ? `Agregar ${escapeHtml(product.name)} al pedido` : `${escapeHtml(product.name)}, agotado`}" ${available ? "" : "disabled"}>
                ${available ? 'Agregar al pedido <span aria-hidden="true">+</span>' : "Próximamente"}
            </button>
          </div>
          <div class="product-info">
            <p class="product-category">${escapeHtml(product.category)}</p>
            <h3 class="product-name">${escapeHtml(product.name)}</h3>
            ${product.stock == null ? "" : `<p class="product-stock${product.stock === 0 ? " out-of-stock" : ""}">${product.stock === 0 ? "Agotado · Próximamente" : `Quedan ${product.stock} ${product.stock === 1 ? "unidad" : "unidades"}`}</p>`}
            <div class="product-bottom">
              <span class="product-price">${displayPrice(product.price)}</span>
              <span class="product-rating">✳ elegido con cariño</span>
            </div>
          </div>
        </article>`;
      },
    )
    .join("");
}

function renderCart() {
  const staleEntries = [...cart.entries()].filter(([id]) => !isProductAvailable(findProduct(id)));
  staleEntries.forEach(([id]) => cart.delete(id));

  const items = [...cart.entries()];
  const count = items.reduce((total, [, quantity]) => total + quantity, 0);
  const hasUnpricedItems = items.some(([id]) => findProduct(id)?.price == null);
  const total = items.reduce((sum, [id, quantity]) => {
    const product = findProduct(id);
    return sum + (product?.price ?? 0) * quantity;
  }, 0);

  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-empty").hidden = items.length > 0;
  document.querySelector("#cart-summary").hidden = items.length === 0;
  document.querySelector("#cart-total").textContent = hasUnpricedItems ? "A confirmar" : formatPrice(total);
  document.querySelector("#cart-items").innerHTML = items
    .map(([id, quantity]) => {
      const product = findProduct(id);
      if (!product) return "";
      return `
        <article class="cart-line">
          <div class="cart-product-image">
            <div class="image-placeholder" aria-hidden="true"><span>Foto pendiente</span></div>
            ${product.image ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" loading="lazy" />` : ""}
          </div>
          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <p>${displayPrice(product.price)}</p>
            <div class="quantity-control" aria-label="Cantidad de ${escapeHtml(product.name)}">
              <button type="button" data-quantity="${escapeHtml(id)}" data-change="-1" aria-label="Quitar una unidad">−</button>
              <span>${quantity}</span>
              <button type="button" data-quantity="${escapeHtml(id)}" data-change="1" aria-label="Agregar una unidad">+</button>
            </div>
          </div>
          <button class="remove-item" type="button" data-remove="${escapeHtml(id)}" aria-label="Eliminar ${escapeHtml(product.name)}">Quitar</button>
        </article>`;
    })
    .join("");
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.classList.add("cart-open");
  document.querySelector("#close-cart").focus();
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  document.body.classList.remove("cart-open");
}

function getPaymentDetails(paymentMethod) {
  if (paymentMethod === "transferencia") {
    return [
      "💳 Forma de pago: Transferencia bancaria",
      `👤 Titular: ${PAYMENT_ACCOUNT.beneficiary}`,
      `🏦 Banco / billetera: ${PAYMENT_ACCOUNT.bank}`,
      `💜 Alias: ${PAYMENT_ACCOUNT.alias}`,
      `🧾 Concepto sugerido: ${PAYMENT_ACCOUNT.concept}`,
      "📩 Por favor, envía el comprobante por este medio para confirmar la compra.",
    ].join("\n");
  }

  return "💬 Forma de pago: A coordinar por WhatsApp.";
}

function buildOrderMessage(name, note, paymentMethod = "transferencia") {
  const cartEntries = [...cart.entries()].filter(([id]) => isProductAvailable(findProduct(id)));
  const lines = cartEntries.map(([id, quantity]) => {
    const product = findProduct(id);
    const unitPrice = product.price == null ? "A confirmar" : formatPrice(product.price);
    const subtotal = product.price == null ? "A confirmar" : formatPrice(product.price * quantity);
    return [
      `💄 ${product.name}`,
      `✨ Categoría: ${product.category}`,
      `🛍️ Cantidad: ${quantity} × ${unitPrice}`,
      `💜 Subtotal: ${subtotal}`,
    ].join("\n  ");
  });
  const total = cartEntries.reduce((sum, [id, quantity]) => {
    return sum + (findProduct(id)?.price ?? 0) * quantity;
  }, 0);
  const hasUnpricedItems = cartEntries.some(([id]) => findProduct(id)?.price == null);
  return [
    "🦋💜 PURA BELLEZA JS 💜🦋",
    "",
    "¡Hola! 😊 Quiero hacer el siguiente pedido:",
    "",
    `💁 Nombre: ${name}`,
    getPaymentDetails(paymentMethod),
    "",
    "🛍️ Productos:",
    lines.join("\n\n"),
    "",
    `💜 Total del pedido: ${hasUnpricedItems ? "A confirmar" : formatPrice(total)}`,
    note ? `📝 Nota: ${note}` : "",
    "",
    "🚚 ¿Podrían indicarme las opciones de envío?",
    "¡Muchas gracias! 😊🦋",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildWhatsAppUrl(phone, message) {
  const url = new URL(`https://wa.me/${phone}`);
  const whatsappMessage = message.normalize("NFC").replace(/\r?\n/g, "\r\n");
  url.searchParams.set("text", whatsappMessage);
  return url.toString();
}

document.querySelector("#product-grid").addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }

  const imageButton = event.target.closest("[data-view-product]");
  if (imageButton) {
    const product = findProduct(imageButton.dataset.viewProduct);
    if (!product || !product.image) return;
    const previewImage = document.querySelector("#product-dialog-image");
    previewImage.src = product.image;
    previewImage.alt = product.alt;
    document.querySelector("#product-dialog-title").textContent = product.name;
    document.querySelector("#product-dialog-price").textContent = displayPrice(product.price);
    productDialog.showModal();
    document.querySelector("#close-product-dialog").focus();
    return;
  }

  const button = event.target.closest("[data-add]");
  if (!button) return;
  const id = button.dataset.add;
  if (!isProductAvailable(findProduct(id))) return;
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  openCart();
});

document.querySelector("#cart-items").addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) {
    const id = quantityButton.dataset.quantity;
    const quantity = (cart.get(id) || 0) + Number(quantityButton.dataset.change);
    if (quantity <= 0) cart.delete(id);
    else cart.set(id, quantity);
    renderCart();
  }
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
  }
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".filter-chip").forEach((filterChip) => {
      filterChip.classList.remove("active");
    });
    button.classList.add("active");
    renderProducts();
  });
});

document.querySelector("#open-favorites").addEventListener("click", () => {
  document.querySelector('.filter-chip[data-category="Favoritos"]').click();
  document.querySelector("#productos").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#product-search").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProducts();
});

document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#keep-shopping").addEventListener("click", () => {
  closeCart();
  document.querySelector("#productos").scrollIntoView({ behavior: "smooth" });
});
overlay.addEventListener("click", closeCart);
document.querySelector("#checkout").addEventListener("click", () => {
  closeCart();
  document.querySelector("#form-hint").textContent = "";
  checkoutDialog.showModal();
  document.querySelector("#customer-name").focus();
});
document.querySelector("#close-dialog").addEventListener("click", () => checkoutDialog.close());
document.querySelector("#close-product-dialog").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

const paymentMethodSelect = document.querySelector("#checkout-payment-method");
const paymentTransferInfo = document.querySelector("#payment-transfer-info");

function updatePaymentModeView() {
  const selectedMethod = paymentMethodSelect.value;
  const isTransfer = selectedMethod === "transferencia";
  paymentTransferInfo.hidden = !isTransfer;
}

async function copyPaymentData() {
  const paymentText = [
    `Titular: ${PAYMENT_ACCOUNT.beneficiary}`,
    `Banco / billetera: ${PAYMENT_ACCOUNT.bank}`,
    `Alias: ${PAYMENT_ACCOUNT.alias}`,
    `Concepto sugerido: ${PAYMENT_ACCOUNT.concept}`,
  ].join("\n");

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(paymentText);
      const hint = document.querySelector("#form-hint");
      hint.textContent = "Datos bancarios copiados. Podes pegarlos en tu app de pago.";
      return;
    }
  } catch (error) {
    console.warn("No se pudieron copiar los datos bancarios:", error);
  }

  window.prompt("Copia estos datos para la transferencia:", paymentText);
}

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name").toString().trim();
  const businessWhatsapp = formData.get("businessWhatsapp").toString();
  const paymentMethod = formData.get("paymentMethod").toString();
  const note = formData.get("note").toString().trim();
  const message = buildOrderMessage(name, note, paymentMethod);

  if (!BUSINESS_WHATSAPP_NUMBERS.has(businessWhatsapp)) {
    const hint = document.querySelector("#form-hint");
    hint.textContent = "Elige uno de los WhatsApp disponibles para enviar tu pedido.";
    return;
  }

  window.open(buildWhatsAppUrl(businessWhatsapp, message), "_blank", "noopener,noreferrer");
  cart.clear();
  renderCart();
  event.currentTarget.reset();
  paymentMethodSelect.value = "transferencia";
  updatePaymentModeView();
  checkoutDialog.close();
});

document.querySelector("#copy-payment-data").addEventListener("click", copyPaymentData);
paymentMethodSelect.addEventListener("change", updatePaymentModeView);
updatePaymentModeView();

restoreFavorites();
renderFavoritesCount();
renderCart();
if (window.CATALOG_CSV_URL?.trim()) {
  productGrid.innerHTML = '<p class="no-results" role="status">Cargando catálogo actualizado…</p>';
  loadProducts();
  window.addEventListener("focus", loadProducts);
  window.setInterval(() => {
    if (!document.hidden) loadProducts();
  }, 5 * 60 * 1000);
} else {
  renderProducts();
}
