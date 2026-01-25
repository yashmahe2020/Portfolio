# Yash Maheshwari | Personal Portfolio

A modern, high-performance personal portfolio website built to showcase my work in **AI Research, Software Engineering, and Educational Technology**. This site features a dynamic, responsive design tailored to highlight my projects, speaking engagements, and research contributions.

![Portfolio Banner](./public/images/yashmaheshwari.png)

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) - For lightning-fast development and performance.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Ensuring type safety and code reliability.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For a sleek, modern, and responsive UI.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Adding fluid interactions and entrance effects.
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, consistent iconography.

## 🌟 Key Features

- **Interactive Hero Section**: Engaging introduction with "Student-Governed" highlighting.
- **Project Showcase**: Detailed cards for web apps, research papers, and products.
- **Speaking & Awards**: Timelines and grids displaying conferences and achievements.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop.
- **Dark/Light Mode**: (If implemented, or strictly styled for a premium look).

## 🛠️ Project Structure

This project uses a standard Vite + React structure:

- **`index.html`**: The entry point of the application. The browser loads this file first.
- **`src/`** (or root level in this setup):
  - **`App.tsx`**: The main React component acting as the application shell.
  - **`index.tsx`**: The TypeScript entry file that mounts the React app into `index.html`.
  - **`components/`**: Reusable UI components (Hero, Navigation, Projects, etc.).
  - **`content.ts`**: Centralized data file for easy updates to text, projects, and events.
  - **`public/`**: Static assets like images and resumes.

## 💻 Running Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yashmahe2020/yash-mahe-website.git
    cd yash-mahe-website
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start the Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🚢 Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

---

**© 2026 Yash Maheshwari**
