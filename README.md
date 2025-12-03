# KF Portfolio - Web Scraping & Automation Specialist

A beautiful, modern portfolio website for Kaif Ali (KF), showcasing web scraping and automation services.

## 🎨 Design Features

- **Soft Cream Theme** - Warm, elegant, minimal design
- **Custom Color Palette**:
  - Background: `#F7F5EE` (soft cream)
  - Primary Text: `#1A3C34` (deep teal green)
  - Accent: `#F2A93B` (warm golden yellow)
  - Buttons: `#1A6F5C` (dark green)
- **Playful Typography** - Caveat for headings, Inter for body text
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Hover effects and transitions

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Caveat & Inter typography

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## 🛠️ Build & Deploy

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

### Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with KF logo
│   │   ├── Hero.jsx         # Hero section with profile
│   │   ├── Services.jsx     # 6 service cards
│   │   ├── Projects.jsx     # Case studies grid
│   │   ├── Contact.jsx      # Contact form & info
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx              # Main app component
│   ├── index.js             # React entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind customization
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies & scripts
```

## ✨ Sections

1. **Navbar** - Sticky navigation with Download CV button
2. **Hero** - Introduction with profile image and rating card
3. **Services** - 6 professional service offerings
4. **Projects** - Case studies with metrics
5. **Contact** - WhatsApp CTA, email, and contact form
6. **Footer** - Social links and copyright

## 🎯 Customization

### Update Profile Information:
- Edit `src/components/Hero.jsx` for name, description, and stats
- Replace placeholder image URL with your photo

### Update Contact Details:
- Edit `src/components/Contact.jsx` for WhatsApp number and email
- Update social links in `src/components/Hero.jsx` and `src/components/Footer.jsx`

### Update Services & Projects:
- Modify arrays in `src/components/Services.jsx`
- Update project data in `src/components/Projects.jsx`

### Customize Colors:
- Edit `tailwind.config.js` to change the color scheme

## 📝 License

© 2024 KF (Kaif Ali). All rights reserved.

## 🤝 Support

For questions or support, contact via:
- Email: kaifali@example.com
- WhatsApp: [Update with your number]
- GitHub: [@kaif11ali](https://github.com/kaif11ali)
