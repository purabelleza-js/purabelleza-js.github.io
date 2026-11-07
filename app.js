const BUSINESS_WHATSAPP_NUMBERS = new Set(["5493878759878", "5493878415462"]);
const CURRENCY = "ARS";

const initialProducts = [
  {
    id: "corrector-baoshi",
    name: "Corrector Baoshi",
    category: "Rostro",
    price: 2500,
    stock: 1,
    tag: "",
    image: "images/Corrector.jpg",
    alt: "Corrector Baoshi en barra",
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
    id: "Toallitas_Humedas",
    name: "Toallitas húmedas",
    category: "Rostro",
    price: 1500,
    stock: 1,
    tag: "",
    image: "images/Toallitas_Humedas.jpg",
    alt: "Toallitas húmedas para el rostro",
  },
  {
    id: "Gloss_Rosa_Con_Brillo",
    name: "Gloss rosa con brillo",
    category: "Labios",
    price: 2500,
    stock: 0,
    tag: "",
    image: "images/Gloss_Rosa_Con_Brillo.jpg",
    alt: "Gloss rosado con brillo",
  },
  {
    id: "Gloss_rojo",
    name: "Gloss Rojo",
    category: "Labios",
    price: 2500,
    stock: 1,
    tag: "",
    image: "images/Gloss_rojo.jpg",
    alt: "Gloss Rojo ",
  },
  {
    id:"Arqueadores_de_pestanas",
    name:"Arqueadores de pestañas",
    category:"Ojos",
    price:2000,
    stock:2,
    tag:"",
    image:"images/Arqueadores_de_pestanas.jpg",
    alt:"Arqueadores de pestañas",
  },
  {
    id:"delineadores_de_labios",
    name:"Delineadores de labios (Por unidad)",
    category:"Labios",
    price:2000,
    stock:5,
    tag:"",
    image:"images/delineadores_de_labios.jpg",
    alt:"Delineadores de labios",
  },
  {
    id:"libro_de_pestañas_10Vol_a_14Vol",
    name:"Libro de pestañas 10Vol a 14Vol",
    category:"Ojos",
    price:10000,
    stock:1,
    tag:"",
    image:"images/libro_de_pestañas_10Vol_a_14Vol.jpg",
    alt:"Libro de pestañas 10Vol a 14Vol",
  },
  {
    id:"libro_pestañas_10Vol_a_14Vol_x2",
    name:"Libro de pestañas 10Vol a 14Vol x2",
    category:"Ojos",
    price:16000,
    stock:1,
    tag:"",
    image:"images/libro_pestaña_10Vol_a_14Vol_x2.jpg",
    alt:"Libro de pestañas 10Vol a 14Vol x2",
  }
];

let products = [...initialProducts];
const cart = new Map();
const productGrid = document.querySelector("#product-grid");
const cartPanel = document.querySelector("#cart-panel");
const overlay = document.querySelector("#overlay");
const checkoutDialog = document.querySelector("#checkout-dialog");
const productDialog = document.querySelector("#product-dialog");
let activeCategory = "Todos";
let searchTerm = "";
let catalogLoadInProgress = false;
let catalogWarning = "";

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
  if (rows.length < 2) throw new Error("La hoja no tiene productos para mostrar.");

  const headers = rows[0].map((header) => header.replace(/^\uFEFF/, "").trim().toLowerCase());
  const requiredHeaders = ["id", "price", "stock"];
  const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header));
  if (missingHeaders.length) throw new Error(`Faltan columnas en la hoja: ${missingHeaders.join(", ")}.`);

  const ids = new Set();
  return new Map(rows.slice(1).map((cells, rowIndex) => {
    const values = Object.fromEntries(headers.map((header, index) => [header, (cells[index] ?? "").trim()]));
    const id = values.id;
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

    if (!/^[\p{L}\p{N}_-]+$/u.test(id)) throw new Error(`El ID de la fila ${rowNumber} está vacío o no es válido.`);
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

async function loadProducts() {
  const csvUrl = window.CATALOG_CSV_URL?.trim();
  if (!csvUrl) {
    renderProducts();
    return;
  }
  if (catalogLoadInProgress) return;
  catalogLoadInProgress = true;
  try {
    const url = new URL(csvUrl);
    url.searchParams.set("_catalog_refresh", Date.now());
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`No se pudo leer la hoja (error ${response.status}).`);
    const csv = await response.text();
    if (csv.trimStart().startsWith("<")) {
      throw new Error("El enlace no parece ser el CSV publicado. Copia el enlace de publicación en formato CSV.");
    }
    const updates = parseCsv(csv);
    const knownIds = new Set(initialProducts.map((product) => product.id));
    const unknownIds = [...updates.keys()].filter((id) => !knownIds.has(id));
    products = initialProducts.map((product) => {
      const update = updates.get(product.id);
      return update ? { ...product, ...update } : product;
    });
    catalogWarning = unknownIds.length
      ? `Se ignoraron IDs que no existen en los productos del sitio: ${unknownIds.join(", ")}.`
      : "";
    renderProducts();
    renderCart();
  } catch (error) {
    console.error("No se pudo actualizar el catálogo desde Google Sheets:", error);
    catalogWarning = `No se pudo actualizar el catálogo desde Google Sheets (${error.message}). Se muestran los productos guardados en esta página.`;
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
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch = `${product.name} ${product.category}`.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (!visibleProducts.length) {
    productGrid.innerHTML = `${warningMarkup}<p class="no-results">No encontramos productos con esa búsqueda.</p>`;
    return;
  }

  productGrid.innerHTML = warningMarkup + visibleProducts
    .map(
      (product) => {
        const available = isProductAvailable(product);
        return `
        <article class="product-card">
          <div class="product-image-wrap">
            <div class="image-placeholder" aria-hidden="true"><span>Foto local pendiente</span></div>
            ${product.image ? `
              <button class="product-image-view" type="button" data-view-product="${escapeHtml(product.id)}" aria-label="Ver imagen de ${escapeHtml(product.name)} ampliada">
                <img class="product-image" src="${escapeHtml(product.image)}" alt="" loading="lazy" />
              </button>` : ""}
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

function buildOrderMessage(name, note) {
  const cartEntries = [...cart.entries()].filter(([id]) => isProductAvailable(findProduct(id)));
  const productCount = cartEntries.reduce((total, [, quantity]) => total + quantity, 0);
  const lines = cartEntries.map(([id, quantity]) => {
    const product = findProduct(id);
    const unitPrice = product.price == null ? "A confirmar" : formatPrice(product.price);
    const subtotal = product.price == null ? "A confirmar" : formatPrice(product.price * quantity);
    return [
      `*${product.name}*`,
      `   Categoría: ${product.category}`,
      `   Cantidad: ${quantity} × ${unitPrice}`,
      `   Subtotal: ${subtotal}`,
    ].join("\n");
  });
  const total = cartEntries.reduce((sum, [id, quantity]) => {
    return sum + (findProduct(id)?.price ?? 0) * quantity;
  }, 0);
  const hasUnpricedItems = cartEntries.some(([id]) => findProduct(id)?.price == null);
  return [
    "🦋💜 *PURA BELLEZA JS* 💜🦋",
    "¡Hola! Quiero hacer este pedido:",
    "",
    `👤 *Nombre:* ${name}`,
    `🛍️ *Productos:* ${productCount} ${productCount === 1 ? "unidad" : "unidades"} en ${cartEntries.length} ${cartEntries.length === 1 ? "producto" : "productos"}`,
    "",
    ...lines,
    "",
    `💜 *Total: ${hasUnpricedItems ? "A confirmar" : formatPrice(total)}*`,
    note ? `📝 *Nota:* ${note}` : "",
    "",
    "¿Me cuentan las opciones de envío y pago?",
    "¡Muchas gracias! 🦋💜",
  ]
    .filter(Boolean)
    .join("\n");
}

document.querySelector("#product-grid").addEventListener("click", (event) => {
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
    document.querySelector(".filter-chip.active").classList.remove("active");
    button.classList.add("active");
    renderProducts();
  });
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

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name").toString().trim();
  const businessWhatsapp = formData.get("businessWhatsapp").toString();
  const note = formData.get("note").toString().trim();
  const message = buildOrderMessage(name, note);

  if (!BUSINESS_WHATSAPP_NUMBERS.has(businessWhatsapp)) {
    const hint = document.querySelector("#form-hint");
    hint.textContent = "Elige uno de los WhatsApp disponibles para enviar tu pedido.";
    return;
  }

  window.open(
    `https://wa.me/${businessWhatsapp}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
  cart.clear();
  renderCart();
  event.currentTarget.reset();
  checkoutDialog.close();
});

renderProducts();
renderCart();
loadProducts();

if (window.CATALOG_CSV_URL?.trim()) {
  window.addEventListener("focus", loadProducts);
  window.setInterval(() => {
    if (!document.hidden) loadProducts();
  }, 5 * 60 * 1000);
}
