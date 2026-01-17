# GitHub Explorer

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-yellow?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)

Minimalist application to search and display GitHub profiles, built with a Feature-Based Architecture.

![Screenshot](./api05.jpeg)

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Development
pnpm run dev

# Build
pnpm run build

# Deploy
pnpm run deploy
```

---

## ✨ Features

✅ Search for GitHub users
✅ View full profile
✅ Automatic dark mode
✅ Responsive design
✅ Smooth animations and micro-interactions

---

## 🎨 UI/UX Enhancements

This project focuses on providing a polished and modern user experience. Some of the key UI/UX features include:

*   **Modern Loading Spinner:** A custom SVG spinner with smooth animations provides a better loading experience.
*   **Engaging Error States:** Error messages are displayed in a user-friendly and visually appealing way, with clear icons and animations.
*   **Interactive User Card:** The user card features subtle hover effects and a clean, hierarchical design to improve readability and engagement.
*   **Fluid Animations:** The entire interface uses subtle animations and transitions to feel more alive and responsive.

For a more detailed breakdown of the UI/UX improvements, see the [UX/UI Analysis](./src/docs/UX_UI_ANALYSIS.md).

---

## 🏗️ Architecture

This project now follows a **Feature-Based Architecture**. This approach organizes code by distinct functionalities, making it modular, scalable, and easy to maintain as the application grows.

```
src/
├── features/        # Contains code grouped by specific features
│   └── user-search/ # All components, hooks, logic, and services for user search
│       ├── application/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       └── services/
└── shared/          # Contains reusable components, utilities, and common logic
    ├── components/
    │   └── ui/      # UI primitives (buttons, cards, etc.)
    │   └── ThemeToggle.jsx
    ├── context/
    ├── domain/
    └── utils/
```

This structure enhances developer experience by co-locating all code relevant to a feature, improving navigability and reducing cognitive load.

---

## 💻 Tech Stack

- **React 18.3** - UI Library
- **Vite 5.4** - Build Tool
- **Tailwind CSS 3.4** - Styling
- **React Context** - State Management
- **Google Fonts** - Lora & Macondo
- **React Icons** - Icons

---

## 📚 Documentation

See [DOCUMENTATION.md](./src/docs/DOCUMENTATION.md) for complete documentation.

**Other documents:**
- [Final Analysis](./src/docs/FINAL_ANALYSIS.md)
- [Migration Plan](./src/docs/MIGRATION_PLAN.md)
- [UX/UI Analysis](./src/docs/UX_UI_ANALYSIS.md)

---

## 📊 Metrics

- **JS Bundle**: 159 KB (51 KB gzip)
- **CSS Bundle**: 15 KB (3.5 KB gzip)
- **Lighthouse**: 95+
- **0 ESLint Errors**

---

## 🤝 Contribuir

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 Licencia

MIT License - See [LICENSE](./LICENSE) for more details.

---

**Developed with ❤️ using React + Vite + Tailwind CSS**
