# Ayush's Portfolio Website

A modern, interactive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer, AI Engineer, and Game Developer.

## 🚀 Live Demo

[View Live Portfolio]((https://devninjaa.vercel.app/)) 

## ✨ Features

- **Interactive 3D Elements**: Built with Three.js and React Three Fiber
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Beautiful animations and smooth transitions
- **Dynamic Content**: Real-time project showcases and skill demonstrations
- **Contact Integration**: EmailJS integration for seamless communication
- **Performance Optimized**: Fast loading times with Vite build system

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **GSAP** - Professional animation library

### 3D & Graphics
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Three.js** - 3D graphics and animations
- **Maath** - Math utilities for 3D graphics

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Type safety (configured)
- **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── 3D/             # Three.js components (Astronaut, Computer, etc.)
│   ├── UI/             # UI components (Cards, Buttons, etc.)
│   └── Animations/     # Animation components
├── sections/           # Main page sections
│   ├── Hero.jsx        # Landing section with 3D astronaut
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Project portfolio
│   ├── Experiences.jsx # Work experience timeline
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer section
├── constants/          # Static data and configurations
└── assets/            # Images, models, and static files
```

## 🎯 Key Sections

### Hero Section
- Interactive 3D astronaut model
- Parallax background effects
- Dynamic text animations
- Responsive design for all devices

### About Section
- Personal introduction and background
- Interactive tech stack showcase
- Global reach visualization
- Contact call-to-action

### Skills Section
- Comprehensive skill categories:
  - Frontend Development (React, Next.js, TypeScript)
  - Backend Development (Node.js, Express, MongoDB)
  - Mobile Development (Swift, Kotlin, React Native)
  - AI & Machine Learning (TensorFlow, PyTorch, NLP)
  - Cybersecurity (Kali Linux, API Security)
  - Game Development (Unreal Engine, C++)

### Projects Section
- **Elementalist Ascent**: AAA-rated open-world RPG (C++, C#, Unreal Engine 5)
- **LunaAI**: Desktop AI companion with voice commands (Python, TensorFlow)
- **HotWord**: Custom wake word training model (Keras, TensorFlow)
- **Dino Game Clone**: Classic game recreation (HTML, CSS, JavaScript)
- **Brefify**: Chrome extension for web page summarization
- **Chill Chat**: Real-time chat application (React, Node.js, MongoDB)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AaYuSh11233/dev.ayush.git
   cd devayush
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Adding New Projects
Edit `src/constants/index.js` to add new projects to the portfolio:

```javascript
export const myProjects = [
  {
    id: 7,
    title: "Your Project Name",
    description: "Project description",
    subDescription: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    href: "https://github.com/yourusername/project",
    image: "/assets/projects/your-image.jpg",
    tags: [
      {
        id: 1,
        name: "Technology",
        path: "/assets/logos/tech-logo.svg"
      }
    ]
  }
];
```

### Modifying Skills
Update the skills array in `src/sections/Skills.jsx` to reflect your expertise.

### Styling
The project uses Tailwind CSS for styling. Custom styles can be added in `src/index.css` or by modifying the Tailwind configuration in `tailwind.config.js`.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any API keys or configuration:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

### EmailJS Setup
For the contact form to work, configure EmailJS:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to environment variables

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 🙏 Acknowledgments

- Three.js community for 3D graphics inspiration
- React Three Fiber for excellent React integration
- Tailwind CSS for the utility-first approach
- All the open-source contributors whose libraries made this possible

---

⭐ **Star this repository if you found it helpful!**
