# 🔐 Sistema de Login y Menú – Proyecto Frontend

Proyecto frontend desarrollado con **HTML, CSS y JavaScript puro**, enfocado en practicar autenticación básica, navegación entre vistas y organización correcta de archivos y carpetas.

---

## 🧩 Descripción general

Este proyecto simula un **flujo simple de login**:

1. El usuario accede a una pantalla inicial
2. Ingresa sus credenciales en el login
3. Si son correctas, accede al menú principal
4. Desde el menú puede navegar a otras vistas

El foco está en el **flujo y la lógica**, no en la seguridad real.

---

## 👤 Credenciales de acceso

Actualmente existe **un único usuario registrado** de forma estática en JavaScript:

| Usuario | Contraseña |
|-------|-----------|
| `admin` | `usuario123456` |

⚠️ Credenciales hardcodeadas solo con fines educativos.

---

## 🗂️ Estructura del proyecto

```txt
assets/
│
├── css/
│   ├── login.css
│   ├── menu.css
│   ├── style.css
│   └── transacciones.css
│
├── img/
│   └── fondo.png
│
├── js/
│   └── login.js
│
├── index.html
├── login.html
├── menu.html
├── transaccion.html
└── README.md
