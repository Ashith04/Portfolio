# Ashit.dev — Developer Portfolio

A modern, dark-themed developer portfolio built with React and Vite. Features an animated particle background, interactive hover effects, scroll-reveal animations, and a sleek glassmorphism design.

## Tech Stack

- React 18
- Vite
- Vanilla CSS
- Google Fonts (Space Grotesk, Fira Code)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
git clone https://github.com/your-username/Portfolio_website.git
cd Portfolio_website
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment.

## Sections

### Navbar
Sticky navigation bar with smooth scrolling, active section highlighting, and mobile hamburger menu.

### Hero
Full-screen landing section with a typing animation that cycles through roles, animated profile image, call-to-action buttons, and social links.

### About
Two-column layout with a personal introduction, animated stat counters (projects, technologies, curiosity), and approach cards covering education, motivation, and current focus.

### Selected Works
Project showcase grid with numbered cards. Each card displays a title, description, tech stack tags, and a link to the repository.

### Technical Stack
Skills organized into three categories (Frontend, Backend, Tools & More) with pill-shaped tags.

### Certifications
Grid of certification cards showing title, issuer, date, and optional credential links.

### Learning Journey
Vertical timeline showing key milestones and technologies explored over the years, with alternating card layout.

### Contact
Contact form with name, email, and message fields alongside direct contact cards for email, GitHub, and LinkedIn.

### Footer
Minimal footer with branding, social icons, and copyright notice.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   ├── Timeline.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## License

This project is open source and available under the MIT License.
