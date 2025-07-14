# Cybersecurity Department Web App

A modern, responsive web application for the Cybersecurity Department built with React, TypeScript, and Tailwind CSS.

## Features

- **Navigation**: Responsive navigation bar with smooth transitions and theme toggle
- **Home Section**: Dynamic hero section showcasing department highlights
- **About Section**: Overview of the department and its mission
- **Contact Section**: Interactive contact form for inquiries
- **Programs**: Details about cybersecurity programs and courses offered
- **Labs**: Information about research labs and facilities
- **Staffs**: Profiles of department faculty and staff members
- **Students**: Showcase of student achievements and activities
- **Courses**: Comprehensive course catalog and descriptions
- **Modern UI**: Built with shadcn-ui components and Tailwind CSS
- **Dark Mode**: Elegant theme switching with system preference support
- **Responsive Design**: Optimized for all device sizes

## Project Structure

```
cybersecurity-dept/
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn-ui components
│   │   ├── AboutSection   # Department overview
│   │   ├── ContactSection # Contact form
│   │   ├── Navigation     # Responsive navbar
│   │   └── ...           # Other section components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── pages/            # Page components
├── public/              # Static assets
├── components.json      # shadcn-ui configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Josebert2001/cybersecurity-dept.git
   cd cybersecurity-dept
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
   Navigate to `http://localhost:5173` to see the app running

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Adding New Components

1. Use shadcn-ui CLI to add new components:
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```

2. Components will be added to `src/components/ui/`

### Styling

- Uses Tailwind CSS for styling
- Custom theme configuration in `tailwind.config.ts`
- Dark mode support via `ThemeProvider`
- Global styles in `src/index.css`

### Best Practices

- Follow TypeScript best practices
- Use functional components with hooks
- Keep components small and focused
- Maintain consistent naming conventions
- Write descriptive comments
- Use proper TypeScript types

## Technologies Used

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **shadcn-ui** - UI component library
- **Lucide Icons** - Icon library

## Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy to your hosting platform**
   - Deploy the `dist` folder
   - Supports static hosting platforms:
     - Vercel
     - Netlify
     - GitHub Pages
     - AWS S3
     - Firebase Hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and lint checks
5. Submit a pull request

## License

MIT License - feel free to use this project for your own department or organization.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
