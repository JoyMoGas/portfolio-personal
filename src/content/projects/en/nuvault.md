---
title: "Nuvault"
description: "A secure, elegant mobile password manager for Android & iOS. Credentials are encrypted on your device before reaching the cloud — your vault, your rules."
tagline: "Your passwords. Yours alone."
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
lang: "en"
sections:
  - title: "What is Nuvault?"
    body: "Nuvault was built from scratch to solve a real problem: having a private, self-controlled vault for passwords without depending on big corporations. Every credential is encrypted before it leaves your device. The backend never sees your raw passwords — only ciphertext."
    image: "/projects/nuvault/home.png"
    imageAlt: "Nuvault home screen showing the vault list with password entries and category filters"
    imageCaption: "The main vault — search, filter by category, and copy with one tap."
    layout: "image-right"

  - title: "Password Generator"
    body: "Generate strong, fully customizable passwords on demand. Configure length, include or exclude symbols, numbers, and uppercase letters. One tap to copy to your clipboard with haptic feedback."
    image: "/projects/nuvault/generator.png"
    imageAlt: "Password generator screen with length slider and toggles"
    imageCaption: "Built-in generator with full control over every parameter."
    layout: "image-left"

  - title: "Security Score"
    body: "A visual indicator reflects the overall strength of all your stored passwords at a glance. Nuvault rates each stored credential and gives you a combined score so you always know where you stand."
    image: "/projects/nuvault/settings.png"
    imageAlt: "Security score indicator and settings screen"
    imageCaption: "Your overall password health — visible at all times."
    layout: "image-right"

  - title: "Core Features"
    body: "- End-to-end encryption with AES via crypto-js before any data leaves the device\n- Cloud sync — encrypted vaults stored and synced in real time via Supabase\n- Categories — organize credentials by type for fast access\n- Instant search — filter your entire vault as you type\n- Adaptive UI — fully respects system light & dark mode\n- Full auth flows — sign-up, login, forgot password, and reset with email verification"
    layout: "text-only"
---
