
---

# **React + TypeScript + Vite - Portfolio Starter**

This is a **modern, fast, and minimal** portfolio starter template built with **React, TypeScript, and Vite**. It comes with **ESLint**, **pre-configured styling**, and a structured project layout.

## 🚀 **Features**
✅ **Blazing Fast** - Powered by Vite for instant HMR and lightning-fast builds.  
✅ **TypeScript Support** - Ensures type safety and better developer experience.  
✅ **Linting & Formatting** - Pre-configured ESLint and Prettier for clean code.  
✅ **Responsive Design** - Built with Tailwind CSS for a modern UI.  
✅ **Easy Deployment** - Optimized for hosting on **Vercel**, **Netlify**, or any static hosting service.  

---

## 📦 **Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/walonCode/portfolio_for_bounty.git
cd portfolio_for_bounty
```

### **2️⃣ Install Dependencies**
Make sure you have **Node.js (>= 16.x)** installed. Then run:
```sh
npm install
```
or  
```sh
yarn install
```

### **3️⃣ Start the Development Server**
Run the following command to start the development server:
```sh
npm run dev
```
or  
```sh
yarn dev
```
The project will be available at **`http://localhost:5173/`**.

---

## 🔧 **Project Structure**
```
📦 your-project
├── 📂 src
│   ├── 📂 components   # Reusable UI components
│   ├── 📂 pages        # Page components (Home, About, Projects, Contact)
│   ├── 📂 data         # Static data (projects, skills, etc.)
│   ├── 📂 assets       # Images, icons, fonts, etc.
│   ├── App.tsx        # Main app entry point
│   ├── main.tsx       # ReactDOM render logic
│   ├── routes.tsx     # React Router configuration
├── 📂 public           # Static assets
├── 📂 styles          # Global styles (Tailwind, CSS files)
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies and scripts
```

---

## 🛠 **ESLint & TypeScript Configuration**
This project includes a robust **ESLint + TypeScript** configuration for clean and maintainable code.

### **Expanding ESLint Rules**
If you're working on a **production-ready** project, it's recommended to enhance TypeScript-aware linting:

1️⃣ Update `parserOptions`:
```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```
2️⃣ Use `recommendedTypeChecked` or `strictTypeChecked` rules:
```js
export default tseslint.config({
  extends: ['tseslint.configs.recommendedTypeChecked'],
});
```
3️⃣ Install **eslint-plugin-react**:
```sh
npm install eslint-plugin-react --save-dev
```
4️⃣ Update `eslint.config.js`:
```js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

---

## 🚀 **Building & Deployment**
### **1️⃣ Build for Production**
```sh
npm run build
```
This will generate an optimized **`dist/`** folder ready for deployment.

### **2️⃣ Deploy on Vercel (Recommended)**
Install Vercel CLI and deploy in seconds:
```sh
npm install -g vercel
vercel
```

### **3️⃣ Deploy on Netlify**
Use Netlify CLI:
```sh
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🎨 **Customization**
- Update `src/data/project.ts` to add your projects.
- Modify styles in `src/styles/global.css` or `tailwind.config.js`.
- Replace `src/assets/` images with your own branding.

---

## ❓ **Need Help?**
If you run into any issues, feel free to:
- Open an issue on **GitHub**
- Join the **React + Vite** community for support

