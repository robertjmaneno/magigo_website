# Magigo Trading Company Website

![Magigo Trading](public/images/MAGIGO%20TRADING%20COMPANY-02.jpg)

A modern, responsive website for Magigo Trading Company (MTC), showcasing sustainable development solutions across Malawi and the region. The website highlights our four specialized subsidiaries: Magigo Hardware, Magigo Systems, Seah Farms, and Magigo Mobile Money.

**Last updated: October 28, 2025 - All image paths fixed**

## 🌟 About Magigo Trading

Magigo Trading Company (MTC) exists to provide sustainable development solutions to communities in Malawi and the region. We offer comprehensive services in construction, information technology, agriculture, and real estate through our specialized subsidiaries.

### Our Mission
To become an effective and efficient business that provides products and services for the development of sustainable communities in Malawi and the region.

### Our Values
- **Customer Centricity**: Putting our clients first in everything we do
- **Innovation**: Embracing new technologies and solutions
- **Quality**: Delivering excellence in all our services
- **Prudence**: Making wise and careful business decisions
- **Fairness**: Treating all stakeholders with equity and respect
- **Integrity**: Maintaining the highest ethical standards

## 🚀 Features

### Core Functionality
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Fast Performance**: Optimized loading times and smooth interactions
- **SEO Optimized**: Built with best practices for search engine visibility

### Website Sections
- **Home**: Full-screen hero carousel showcasing our services
- **About Us**: Company mission, vision, and values
- **What We Do**: Detailed overview of our business operations
- **Newsletter**: Subscription service for updates and insights
- **Contact**: Complete contact information and inquiry forms

### Subsidiary Showcases
- **Magigo Hardware**: Building materials, plumbing, electrical supplies
- **Magigo Systems**: Complete IT solutions and managed services
- **Seah Farms**: Agricultural production and dairy manufacturing
- **Magigo Mobile Money**: Financial services and digital payments

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components built on Radix UI
- **Lucide React** - Beautiful & consistent icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

### Key Dependencies
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management
- **Framer Motion** - Smooth animations and transitions

## 📁 Project Structure

```
magigo_website/
├── public/
│   ├── images/          # Logo and image assets
│   └── robots.txt       # Search engine crawling instructions
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── HeroCarousel.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── layouts/        # Page layout components
│   ├── lib/            # Utility functions and configurations
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Newsletter.tsx
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   └── styles/         # Global styles and CSS variables
├── index.html          # Main HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd magigo_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

## 🎨 Customization

### Color Theme
The website uses a custom dark green color scheme defined in `src/index.css`. To modify colors:

1. Update CSS custom properties in `src/index.css`
2. Adjust Tailwind configuration in `tailwind.config.ts` if needed

### Content Updates
- **Company Information**: Update text content in respective page components
- **Images**: Replace images in the `public/images/` directory
- **Contact Details**: Modify contact information in components

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔍 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with proper alt text
- Fast loading times
- Mobile-friendly design

### Performance Optimizations
- Code splitting with Vite
- Image optimization
- CSS minification
- Lazy loading where applicable

## 🤝 Contributing

We welcome contributions to improve the Magigo Trading website!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and structure
- Test changes on multiple devices and browsers
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is proprietary software owned by Magigo Trading Company. All rights reserved.

## 📞 Contact Information

**Magigo Trading Company (MTC)**

**Address:** Malawi

**Phone:** +265 881 626 484

**Email:** mtc@magigomw.com

**Website:** [www.magigomw.com](https://www.magigomw.com)

### Business Hours
- Monday - Friday: 8:00 AM - 5:00 PM
- Saturday: 8:00 AM - 12:00 PM
- Sunday: Closed

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the icon library
- **Unsplash** for hero images
- **React** ecosystem for the robust development framework

---

*Built with ❤️ for sustainable development in Malawi and the region.*
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/91af1a1f-2288-4ac6-8570-614ded796b9f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
