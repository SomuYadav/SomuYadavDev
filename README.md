# Somu Yadav - iOS Engineer Portfolio

A minimalistic, Apple-inspired portfolio website showcasing my iOS development expertise and projects.

## 🚀 Features

- **Apple-inspired Design**: Clean, minimalistic interface with smooth animations
- **Responsive**: Perfect on all devices from mobile to desktop
- **Performance Optimized**: Fast loading with optimized images and code
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## 📱 Sections

- **Hero** - Introduction with profile and key information
- **Work** - Featured projects with real app screenshots
- **About** - Professional background and achievements
- **Skills** - Technical expertise and proficiency levels
- **Contact** - Multiple ways to get in touch

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/SomuYadav/SomuYadavDev.git
cd SomuYadavDev
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
\`\`\`

## 📦 Deployment

This portfolio is configured for GitHub Pages deployment:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://somuyadav.github.io/SomuYadavDev/`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable components
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── img/              # Images and screenshots
│   └── resume/           # Resume PDF
└── .github/workflows/    # GitHub Actions
\`\`\`

## 🎨 Customization

### Adding New Projects

Edit the `projects` array in `app/page.tsx`:

\`\`\`typescript
const projects = [
  {
    name: "Your App Name",
    description: "App description",
    image: "/img/index/your-app.png",
    logo: "/img/index/your-logo.png",
    tech: ["Swift", "SwiftUI"],
    metrics: ["Users", "Performance", "Rating"],
    link: "https://apps.apple.com/your-app",
  },
  // ... more projects
]
\`\`\`

### Updating Skills

Modify the `skills` array in `app/page.tsx`:

\`\`\`typescript
const skills = [
  { name: "Swift", level: 95 },
  { name: "SwiftUI", level: 90 },
  // ... more skills
]
\`\`\`

### Changing Colors

Update the color scheme in `tailwind.config.ts` and `app/globals.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: somendra.sy@gmail.com
- **LinkedIn**: [linkedin.com/in/somendrayadav](https://linkedin.com/in/somendrayadav/)
- **GitHub**: [github.com/SomuYadav](https://github.com/SomuYadav)
- **Twitter**: [@Somendra_Dev](https://twitter.com/Somendra_Dev)

---

Built with ❤️ by Somu Yadav
