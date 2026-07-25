# 🚀 Personal Streak AI 🚀

## Project Overview
Tauri app for tracking daily habits and streaks with:
- Lightweight desktop notifications
- SQLite persistence
- Minimalist design system

## Getting Started

### Prerequisites
- Rust toolchain (~1.70)
- Node.js (v18.16+)
- Yarn/Webpack (optional for frontend)

### Install Dependencies
```bash
cargo install tauri-cli --git https://github.com/tauri-apps/tauri --branch v2
cargo tauri init --template "react-ts"
```

### Commands
```bash
# Development
npm run dev

# Build
npm run build

# Generate executable
cargo tauri build

# Run targets
cargo tauri watch

# Package for distribution
cargo tauri package
```

---

### Kubernetes Integration
- Builds `.deb`, `.dmg`, and `.exe` bundles via `cargo tauri package`
- Automatic app icon/manifest resolution through `tauri.conf.json`
- Zero-config cross-platform deployment

### Security
- Sandboxed Tauri webview
- SQLite encryption support
- Content Security Policy (CSP) headers

---

## 📁 Project File Structure

```
personal-streak-ai/
├── 📦 root
│   ├── Cargo.toml              # Rust package configuration
│   ├── Cargo.lock              # Locked Rust dependencies
│   ├── tauri.conf.json         # Tauri app configuration
│   ├── package.json            # Node.js dependencies & scripts
│   ├── package-lock.json       # Locked npm dependencies
│   ├── vite.config.js          # Vite bundler configuration
│   ├── index.html              # Main HTML entry point
│   └── README.md               # This file
│
├── 🌐 frontend (src/)
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # Global styles (Tailwind CSS)
│   └── assets/
│       └── react.svg           # React logo asset
│
├── 🖼️ static assets (public/)
│   ├── mood/                   # Mood tracking images
│   │   └── reference.png
│   ├── icons/                  # App icons (multiple sizes)
│   │   ├── 32x32.png
│   │   ├── 128x128.png
│   │   ├── 128x128@2x.png
│   │   ├── icon.icns           # macOS icon
│   │   ├── icon.ico            # Windows icon
│   │   └── StoreLogo.png
│   └── tauri.svg               # Tauri branding
│
├── 🔧 backend (src-tauri/)
│   ├── build.rs                # Build script for native assets
│   ├── Cargo.toml              # Tauri Rust dependencies
│   ├── Cargo.lock              # Locked Rust dependencies
│   ├── tauri.conf.json         # Tauri-specific config
│   │
│   ├── 📁 src/
│   │   ├── main.rs             # Tauri entry point
│   │   └── lib.rs              # Shared Rust library
│   │
│   ├── 📁 capabilities/
│   │   └── default.json        # App permissions config
│   │
│   ├── 📁 gen/
│   │   └── schemas/            # Tauri API schemas
│   │       ├── acl-manifests.json
│   │       ├── capabilities.json
│   │       ├── desktop-schema.json
│   │       └── windows-schema.json
│   │
│   └── 📁 icons/              # Backend icons
│       ├── 32x32.png
│       ├── 128x128.png
│       ├── 128x128@2x.png
│       ├── icon.icns
│       ├── icon.ico
│       └── StoreLogo.png
│
├── ⚙️ configuration
│   └── .vscode/
│       └── extensions.json     # VS Code recommended extensions
│
├── 📦 build outputs (excluded from repo)
│   ├── node_modules/           # npm packages
│   ├── target/                 # Rust build artifacts
│   └── dist/                   # Frontend build output
│
└── 📝 other files
    ├── .gitignore
    └── .git/                   # Git repository
```

---

## 📋 Project Architecture

### Stack Overview
| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 19 + Vite | UI components, state management |
| **Styling** | Tailwind CSS 4.x | Utility-first CSS framework |
| **State** | Zustand 5.x | Lightweight state management |
| **Backend** | Rust 2021 + Tauri 2 | Native desktop app shell |
| **Database** | SQLite | Local data persistence |
| **Plugins** | SQL, Notification, Opener | Extended functionality |

### Plugin Integrations
- `@tauri-apps/api` - Core Tauri API
- `@tauri-apps/plugin-sql` - SQLite database plugin
- `@tauri-apps/plugin-notification` - Desktop notifications
- `@tauri-apps/plugin-opener` - External URL handling

---

## 🔧 Development Setup

### IDE Setup (Recommended)
- Visual Studio Code with:
  - [Tauri VS Code Extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
  - Rust Analyzer
  - ESLint/Prettier

### Quick Start
```bash
# Clone and enter project
cd personal-streak-ai

# Install Node.js dependencies
npm install

# Start development server
npm run dev

# In another terminal, start Tauri
cargo tauri dev
```

---

## 🏗️ Build & Deploy

### Production Build
```bash
# Build frontend
npm run build

# Build Tauri app
cargo tauri build
```

### Distribution Targets
- **Windows**: `.msi`, `.exe` installer
- **macOS**: `.dmg`, `.app` bundle
- **Linux**: `.deb`, `.rpm`, `.AppImage`

---

## 📚 Useful Links

- [Tauri Documentation](https://tauri.app/v1/guides/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)