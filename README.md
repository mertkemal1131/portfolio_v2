# Portfolio — FSWeb Frontend Challenge

A personal portfolio website built with React + Vite, Tailwind CSS, Context API, and Axios.

## Features

- ✅ React + Vite
- ✅ Context API (language + dark mode global state)
- ✅ TR / EN bilingual support (no i18n library)
- ✅ Dark / Light mode with persistence via localStorage
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Axios POST to reqres.in API
- ✅ react-toastify notifications
- ✅ TailwindCSS styling
- ✅ Components for every section
- ✅ Data from static JSON / JS file rendered with `.map()`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed navbar with lang/dark toggles
│   ├── Hero.jsx         # Landing section
│   ├── About.jsx        # About me + stats
│   ├── Skills.jsx       # Skills by category
│   ├── Projects.jsx     # Project cards with hover links
│   ├── Contact.jsx      # Contact form with Axios POST
│   └── Footer.jsx       # Footer
├── context/
│   └── AppContext.jsx   # Language + dark mode global state
├── data/
│   └── data.js          # All TR/EN content
├── App.jsx
├── main.jsx
└── index.css
```

## Customizing Your Info

Edit `src/data/data.js` to update:
- Your name, title, and bio
- Skills list
- Project details (title, description, tech stack, links, images)
- Contact info

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```
