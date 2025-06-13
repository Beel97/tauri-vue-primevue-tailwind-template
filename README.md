# 🦀⚡ Plantilla Base Tauri + Rust + Vue 3 + Tailwind CSS + PrimeVue

Esta es una plantilla base lista para comenzar proyectos con Tauri, Rust, Vue 3, Tailwind CSS y PrimeVue.

---

## 🚀 Requisitos

Antes de iniciar, asegúrate de tener instalado:

- Rust
- Cargo
- Node.js (con NPM)

---

## 🛠 Instalación

# Instala las dependencias de Node

npm install

# Corre el entorno de desarrollo

npm run tauri dev

---

## 🧩 Estructura del proyecto

- src-tauri/ → Código Rust (backend Tauri)
- src/ → Frontend Vue + Tailwind + PrimeVue
- src/configs/ → Configuraciones adicionales de la plantilla

---

## 📚 Documentación recomendada

Para ampliar o personalizar tu proyecto, consulta la documentación oficial:

- Documentación de Tauri: <https://tauri.app/documentation/>
- Documentación de PrimeVue: <https://primevue.org/>

---

## 🧪 Comando de prueba

El método `invoke` está expuesto globalmente como `window.invoke`, por lo que puedes usarlo en cualquier parte sin necesidad de importar nada más.

invoke('info').then(console.log);

Este comando devuelve información general sobre la plantilla (desde Rust).

---

## 📦 Créditos

Desarrollado con ♥  para la comunidad.  
