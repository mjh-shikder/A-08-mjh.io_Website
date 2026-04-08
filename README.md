# MJH.IO — Productive App Discovery Platform

> **We Build Productive Apps.** MJH.IO is a modern app discovery and management platform built with React 19 and Vite — allowing users to browse, install, and manage their favourite productivity applications.

---

## 🚀 Live Demo

[text](https://mjhio.netlify.app/)

---

## 📸 Overview

MJH.IO is a single-page application (SPA) that serves as a showcase platform for a collection of productivity-focused apps. Users can explore trending apps, search and filter the full catalogue, view detailed app information with rating charts, and manage a personal list of installed apps — all persisted via `localStorage`.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Home / Landing Page** | Hero banner with stats (29.6M+ downloads, 906K+ reviews, 132+ apps) and trending app highlights |
| 📱 **App Catalogue** | Browse all available apps with real-time search and sort by downloads (High → Low / Low → High) |
| 🔍 **App Details** | Full app info page with download count, average rating, review count, and an interactive rating bar chart |
| ⚙️ **Installation Manager** | View, sort, and uninstall personally installed apps; state persisted in `localStorage` |
| 📦 **One-click Install** | Install apps from the details page; duplicates are prevented automatically |
| 🔔 **Toast Notifications** | Real-time feedback for install and uninstall actions via `react-toastify` |
| 📊 **Rating Visualisation** | Interactive horizontal bar chart powered by `Recharts` |
| 📱 **Responsive Design** | Fully responsive across mobile, tablet, and desktop |
| 🧭 **Client-side Routing** | Multi-page navigation with `React Router v7` and a 404 error page |

---

## 🛠️ Tech Stack

### Core
- **[React 19](https://react.dev/)** — UI library
- **[Vite 7](https://vitejs.dev/)** — Lightning-fast build tool and dev server
- **[React Router v7](https://reactrouter.com/)** — Client-side routing with data loaders

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework (via `@tailwindcss/vite` plugin)
- **[DaisyUI v5](https://daisyui.com/)** — Tailwind CSS component library
- **[React Icons](https://react-icons.github.io/react-icons/)** — Icon library (GitHub, App Store, home icons, etc.)
- **[Lucide React](https://lucide.dev/)** — Additional icon set

### Data & Utilities
- **[Recharts](https://recharts.org/)** — Composable charting library for the rating bar chart
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** — Toast notification system
- **`localStorage`** — Persists the user's installed app list on the browser

### Dev & Linting
- **ESLint** — Code linting with React-specific plugins (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)

---

## 📁 Project Structure

```
mjh.io/
├── public/
│   ├── AllApplications.json   # Full application data (loaded by route loaders)
│   ├── Trending.json          # Trending apps data
│   └── _redirects             # SPA redirect rule for deployment
├── src/
│   ├── assets/                # Images and icons (logo, hero, store badges, etc.)
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Responsive navigation bar with mobile dropdown
│   │   ├── Banner.jsx         # Hero section with stats panel
│   │   ├── Trending.jsx       # Trending apps section
│   │   ├── AppCard.jsx        # App catalogue card
│   │   ├── InstallCard.jsx    # Installed app card with uninstall action
│   │   └── Footer.jsx         # Site footer
│   ├── pages/
│   │   ├── Root.jsx           # Layout shell (Navbar + Outlet + Footer + ToastContainer)
│   │   ├── Home.jsx           # Home page (Banner + Trending)
│   │   ├── Apps.jsx           # App catalogue with search & sort
│   │   ├── AppDetails.jsx     # Individual app page with chart
│   │   ├── Installation.jsx   # Installed apps manager
│   │   └── Error/             # 404 and no-results error pages
│   ├── Routes/
│   │   └── Routes.jsx         # createBrowserRouter configuration
│   ├── Utility/
│   │   └── addToDb.js         # localStorage helpers (add, get, remove)
│   ├── App.jsx
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚦 Routes

| Path | Component | Data Loader |
|---|---|---|
| `/` | `Home` | `Trending.json` |
| `/apps` | `Apps` | `AllApplications.json` |
| `/installation` | `Installation` | `AllApplications.json` |
| `/appDetails/:id` | `AppDetails` | `AllApplications.json` |
| `*` | `ErrorPage` | — |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mjh-shikder/mjh.io.git
   cd mjh.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🌐 Deployment

This project includes a `public/_redirects` file for SPA routing support on platforms like **Netlify**. For other platforms:

- **Vercel** — Automatic SPA support, no extra config needed.
- **GitHub Pages** — Requires a custom `404.html` redirect workaround or use of `HashRouter`.

Build the project before deploying:
```bash
npm run build
```
Then deploy the contents of the `dist/` folder.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

See the [GitHub repository](https://github.com/mjh-shikder) for more details.

---

## 👤 Author

**MJH Shikder**

- GitHub: [@mjh-shikder](https://github.com/mjh-shikder)

---

## 📄 License

This project is private and not currently licensed for public use.

---

<p align="center">Built with ❤️ using React & Vite</p>
