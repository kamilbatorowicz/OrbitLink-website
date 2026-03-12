# OrbitLink - Satellite Solutions 🛰️

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

## 📋 Opis projektu

**OrbitLink** to nowoczesna platforma webowa zaprojektowana dla lidera branży łączności satelitarnej. Projekt skupia się na dostarczeniu *premium user experience* poprzez zaawansowane animacje, interaktywne elementy 3D oraz minimalistyczny, "kosmiczny" design. Serwis demonstruje możliwości globalnej sieci satelitów LEO (Low Earth Orbit), oferując przejrzysty wgląd w misje, technologię oraz infrastrukturę firmy.

---

## 🏗️ Struktura i Funkcje Projektu

### 1. Hero Bento Grid (Missions)
Strona misji wykorzystuje nowoczesny układ **Bento Grid**, który w sposób hierarchiczny prezentuje kluczowe statystyki i sukcesy firmy:
* **Glassmorphism**: Wykorzystanie rozproszonego tła i półprzezroczystych warstw dla uzyskania efektu głębi.
* **Interaktywne Karty**: Każdy element siatki reaguje na najechanie kursorem, aktywując subtelne poświaty i mikro-animacje.

### 2. GSAP Satellite Scroller (Services)
Kluczowy element wizualny strony usług, gdzie model satelity "nawiguje" między sekcjami:
* **Dynamiczny Routing**: Satelita płynnie przemieszcza się po ekranie w reakcji na przewijanie strony (ScrollTrigger).
* **Responsywna Animacja**: System inteligentnie zmienia zachowanie satelity na urządzeniach mobilnych, przenosząc go w tło i upraszczając tor lotu dla zachowania czytelności tekstu.

### 3. Interaktywny Globus
Zastosowanie technologii WebGL do wizualizacji zasięgu sieci:
* **COBE**: Lekka i wydajna biblioteka do renderowania interaktywnej ziemi.
* **Synchronizacja markerów**: Dynamiczne oznaczanie kluczowych węzłów infrastruktury na obracającym się modelu 3D.

### 4. Smart UI Components
* **Rocket Cursor**: Spersonalizowany kursor w kształcie rakiety, dodający unikalnego charakteru podczas przeglądania strony.
* **Dynamic Navbar & Footer**: W pełni responsywne systemy nawigacyjne z inteligentnym linkowaniem i wykrywaniem aktywnych sekcji.

---

## 🛠️ Technologie

* **Frontend:** React 19 + TypeScript.
* **Stylizacja:** Tailwind CSS 4 (Custom design system).
* **Animacje:** 
  - **GSAP** (GreenSock) dla precyzyjnych animacji scrollowanych.
  - **Motion** (Framer Motion) dla płynnych przejść komponentów i efektów hover.
* **Grafika 3D:** React Three Fiber & COBE dla renderingu globusa.
* **Ikony:** Lucide React (spójny, techniczny zestaw ikon).

---

## 🚀 Instalacja i Uruchomienie

1. Sklonuj repozytorium na swój komputer.
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
4. Aby przygotować wersję produkcyjną (folder `dist`):
   ```bash
   npm run build
   ```

---

## 🌐 Publikacja
Strona jest automatycznie wdrażana na **GitHub Pages** przy użyciu workflow:
```bash
npm run deploy
```
Dostępna pod adresem: `https://kamilbatorowicz.github.io/OrbitLink-website/`
