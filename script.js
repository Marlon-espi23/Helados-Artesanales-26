const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

function pedido(producto) {
  const numero = "50557817630";
  const mensaje = "Hola, quiero pedir " + producto + " de Esencia Cítrica.";
  const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}

let productoActual = "";

function abrirModalPedido(producto){
  productoActual = producto;

  document.getElementById("productoSeleccionado").textContent =
    "Producto seleccionado: " + producto;

  document.getElementById("pedidoModal").classList.add("activo");
  document.getElementById("opcionesLlevar").classList.remove("activo");
}

function cerrarModal(){
  document.getElementById("pedidoModal").classList.remove("activo");
}

function servidoAqui(){
  const numero = "50557817630";
  const mensaje = "Hola, quiero pedir " + productoActual + " servido aquí.";
  window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje), "_blank");
}

function mostrarParaLlevar(){
  document.getElementById("opcionesLlevar").classList.add("activo");
}

function seleccionarSabor(sabor){
  const numero = "50557817630";
  const mensaje =
    "Hola, quiero ordenar un helado para llevar.\n\n" +
    "Sabor: " + sabor + "\n" +
    "Presentación: 120 ml";

  window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje), "_blank");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(elemento => {
  observer.observe(elemento);
});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;

    if(elementTop < windowHeight - 80){
      item.classList.add('active');
    }
  });
});

// Buscador de productos
const buscador = document.getElementById("buscadorProductos");

if (buscador) {
  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    const productos = document.querySelectorAll(".product-card");

    productos.forEach(producto => {
      const nombre = producto.querySelector("h3").textContent.toLowerCase();

      if (nombre.includes(texto)) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  });
}

// Modo oscuro
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      darkModeBtn.textContent = "☀️";
    } else {
      darkModeBtn.textContent = "🌙";
    }
  });
}

// WhatsApp automático
function whatsappGeneral(){
  const numero = "50557817630";
  const mensaje = "Hola, quiero información sobre los helados artesanales de Esencia Cítrica.";
  window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje), "_blank");
}

const searchToggle = document.getElementById("searchToggle");
const searchContainer = document.getElementById("searchContainer");

searchToggle.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
});

