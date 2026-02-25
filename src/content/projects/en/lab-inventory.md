---
title: "Lab Inventory System"
description: "A full-stack web system that digitizes and automates inventory management, practice reservations, and equipment loans for a university electrical lab."
tagline: "Paper out. Efficiency in."
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
lang: "en"
sections:
  - title: "The Problem"
    body: "The electrical engineering lab at the University of Sonora ran entirely on paper. Practice requests were filled out by hand, equipment loans had no traceability, and there was no digital record of assets. Coordinating between professors and lab staff was slow, error-prone, and unsustainable. This project was developed as part of a university Social Service program to change that."
    image: "/projects/lab-inventory/dashboard.png"
    imageAlt: "Dashboard showing lab statistics and pending reservations"
    imageCaption: "A single dashboard to see everything happening in the lab."
    layout: "image-right"

  - title: "Automated Intake Flow"
    body: "The workflow begins when a professor or student fills out a Microsoft Forms request. A Power Automate flow automatically transfers the response data to Google Sheets — acting as an integration hub. A backend sync command then reads the spreadsheet using pandas, validates the data, and inserts it into the database. Each request is uniquely identified to prevent duplicates."
    image: "/projects/lab-inventory/reservations.png"
    imageAlt: "Practice reservations list with status badges"
    imageCaption: "Requests flow in automatically — lab staff just review and approve."
    layout: "image-left"

  - title: "What the System Manages"
    body: "- Equipment — fixed assets tracked by serial number with automatic maintenance alerts\n- Consumables — stock-based materials with restocking alerts\n- Equipment History — immutable log of events per asset (maintenance, calibration, repairs)\n- Incident Reports — failure logs linked to specific reservations\n- Reservations — scheduled lab sessions linked to professors and official practices\n- Loans — physical asset check-out with return date tracking\n- Internal Messaging — communication between lab staff and users\n- Academic Catalog — official and temporary practices, subjects, and resources"
    image: "/projects/lab-inventory/inventory.png"
    imageAlt: "Equipment inventory list with serial numbers and maintenance alerts"
    imageCaption: "Every asset in the lab, tracked and auditable."
    layout: "image-right"

  - title: "Access Control"
    body: "The system uses JWT-based authentication with role-based access. Regular users can submit requests and track their status. Lab administrators have full management capabilities: inventory CRUD, loan tracking, incident reporting, and direct approval of incoming practice requests."
    layout: "text-only"
---
