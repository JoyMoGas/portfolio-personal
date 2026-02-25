---
title: "Sistema de Inventario de Laboratorio"
description: "Sistema web fullstack que digitaliza y automatiza la gestión de inventario, reservas de prácticas y préstamos de equipos en el laboratorio de eléctrica de la Universidad de Sonora."
tagline: "Sin papeles. Con control total."
image: "/projects/lab-inventory/hero.png"
technologies:
  - Django 5
  - Python 3
  - Django REST Framework
  - React 19
  - Vite 7
  - PostgreSQL
  - Power Automate
  - Google Sheets
  - pandas
github: "https://github.com/JoyMoGas/lab-inventory"
featured: true
order: 2
lang: "es"
sections:
  - title: "El Problema"
    body: "El laboratorio de ingeniería eléctrica de la Universidad de Sonora funcionaba completamente en papel. Las solicitudes de prácticas se llenaban a mano, los préstamos de equipos no tenían trazabilidad, y no existía un registro digital de activos. La coordinación entre profesores y personal era lenta, propensa a errores e insostenible. Este proyecto fue desarrollado como parte del programa de Servicio Social universitario para cambiar eso."
    image: "/projects/lab-inventory/dashboard.png"
    imageAlt: "Dashboard mostrando estadísticas del laboratorio y reservas pendientes"
    imageCaption: "Un solo dashboard para ver todo lo que ocurre en el laboratorio."
    layout: "image-right"

  - title: "Flujo de Entrada Automatizado"
    body: "El flujo comienza cuando un profesor o alumno llena una solicitud en Microsoft Forms. Un flujo de Power Automate transfiere automáticamente los datos a Google Sheets — que actúa como centro de integración. Un comando de sincronización del backend lee la hoja con pandas, valida los datos y los inserta en la base de datos. Cada solicitud se identifica de forma única para evitar duplicados."
    image: "/projects/lab-inventory/reservations.png"
    imageAlt: "Lista de reservas de prácticas con indicadores de estado"
    imageCaption: "Las solicitudes llegan automáticamente — el personal solo revisa y aprueba."
    layout: "image-left"

  - title: "Qué Gestiona el Sistema"
    body: "- Equipos — activos fijos rastreados por número de serie con alertas de mantenimiento automáticas\n- Consumibles — materiales gestionados por stock con alertas de reabastecimiento\n- Historial de equipos — bitácora inmutable de eventos por activo (mantenimiento, calibración, reparaciones)\n- Reportes de incidencias — registro de fallas vinculadas a reservas específicas\n- Reservas — sesiones de laboratorio agendadas vinculadas a profesores y prácticas oficiales\n- Préstamos — control de salida física de activos con fechas de devolución\n- Mensajería interna — comunicación entre el personal del lab y los usuarios\n- Catálogo académico — prácticas oficiales y temporales, materias y recursos"
    image: "/projects/lab-inventory/inventory.png"
    imageAlt: "Lista de inventario de equipos con números de serie y alertas"
    imageCaption: "Cada activo del laboratorio, rastreado y auditable."
    layout: "image-right"

  - title: "Control de Acceso"
    body: "El sistema usa autenticación JWT con control de acceso por roles. Los usuarios regulares pueden enviar solicitudes y rastrear su estado. Los administradores del laboratorio tienen capacidades completas: inventario CRUD, seguimiento de préstamos, registro de incidencias y aprobación directa de solicitudes de prácticas entrantes."
    layout: "text-only"
---
