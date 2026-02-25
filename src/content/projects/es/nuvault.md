---
title: "Nuvault"
description: "Un gestor de contraseñas móvil seguro y elegante para Android e iOS. Las credenciales se cifran en tu dispositivo antes de llegar a la nube — tu vault, tus reglas."
tagline: "Tus contraseñas. Solo tuyas."
image: "/projects/nuvault/hero.png"
technologies:
  - React Native
  - TypeScript
  - Expo SDK 53
  - Supabase
  - crypto-js
  - expo-secure-store
  - react-native-reanimated
github: "https://github.com/JoyMoGas/nuvault"
featured: true
order: 1
lang: "es"
sections:
  - title: "¿Qué es Nuvault?"
    body: "Nuvault fue construido desde cero para resolver un problema real: tener un vault privado y bajo tu propio control para contraseñas, sin depender de grandes corporaciones. Cada credencial se cifra antes de salir de tu dispositivo. El backend nunca ve tus contraseñas en texto plano — solo texto cifrado."
    image: "/projects/nuvault/home.png"
    imageAlt: "Pantalla principal de Nuvault mostrando la lista del vault con filtros de categorías"
    imageCaption: "El vault principal — busca, filtra por categoría y copia con un toque."
    layout: "image-right"

  - title: "Generador de Contraseñas"
    body: "Genera contraseñas fuertes y totalmente personalizables bajo demanda. Configura la longitud, incluye o excluye símbolos, números y mayúsculas. Un toque para copiar al portapapeles con retroalimentación háptica."
    image: "/projects/nuvault/generator.png"
    imageAlt: "Pantalla del generador de contraseñas con slider de longitud y toggles"
    imageCaption: "Generador integrado con control total sobre cada parámetro."
    layout: "image-left"

  - title: "Puntuación de Seguridad"
    body: "Un indicador visual refleja la fortaleza general de todas tus contraseñas guardadas de un vistazo. Nuvault evalúa cada credencial almacenada y te da una puntuación combinada para que siempre sepas en qué punto estás."
    image: "/projects/nuvault/settings.png"
    imageAlt: "Indicador de puntuación de seguridad y pantalla de configuración"
    imageCaption: "Tu salud de contraseñas general — visible en todo momento."
    layout: "image-right"

  - title: "Funcionalidades Clave"
    body: "- Cifrado de extremo a extremo con AES vía crypto-js antes de que cualquier dato salga del dispositivo\n- Sincronización en la nube — vaults cifrados almacenados y sincronizados en tiempo real vía Supabase\n- Categorías — organiza las credenciales por tipo para acceso rápido\n- Búsqueda instantánea — filtra todo tu vault mientras escribes\n- Interfaz adaptiva — respeta completamente el modo claro y oscuro del sistema\n- Flujos de autenticación completos — registro, inicio de sesión, recuperación y restablecimiento de contraseña con verificación por correo"
    layout: "text-only"
---
