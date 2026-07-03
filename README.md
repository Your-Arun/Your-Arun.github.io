# Arun Kumar | Developer Portfolio

A premium, fully animated developer portfolio website built using **React**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Live Demo
Visit the live portfolio here: [Your-Arun.github.io](https://Your-Arun.github.io)

---

## 🛠️ Tech Stack & Libraries
* **Framework**: React (Vite)
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Hosting**: GitHub Pages

---

## 📂 Project Structure
* `portfolio-src/` — Contains all the React source code.
* `assets/` — Production build assets (automatically generated on build).
* `index.html` — The main entry point (production build output copied here).
* `.nojekyll` — Bypasses Jekyll on GitHub Pages to serve raw SPA assets smoothly.

---

## 💻 Local Development

### 1. Install Dependencies
Navigate to the source directory and install the packages:
```bash
cd portfolio-src
npm install
```

### 2. Run Dev Server
Start the local development server:
```bash
npm run dev
```

### 3. Build for Production
To build the application and copy assets directly to the root for GitHub Pages:
```bash
npm run build
```
This command builds the React application into `portfolio-src/dist` and executes the `postbuild.js` script to copy the output (`index.html` and `assets/`) to the repository root.

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
