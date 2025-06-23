# cmurosdev - AI Company Landing Page

A modern, responsive landing page for cmurosdev, an AI company offering intelligent agent services. Built with HTML5, CSS3, and JavaScript, featuring bilingual support (English/Spanish) and modern animations.

## 🌟 Features

- **Bilingual Support**: Complete English and Spanish translations with easy language switching
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with AI-themed styling
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Fast loading with optimized assets

## 🚀 Services Showcased

- **AI Agents**: Intelligent autonomous agents for complex tasks
- **Machine Learning**: Custom ML models and predictive analytics
- **Data Analytics**: Advanced business intelligence solutions
- **Process Automation**: Intelligent workflow automation
- **Chatbots & NLP**: Natural language processing solutions
- **AI Security**: AI-powered security and threat detection

## 📁 Project Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Images and other assets (to be added)
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Custom Properties (variables)
  - Modern animations and transitions
  - Responsive design with media queries
- **JavaScript (ES6+)**:
  - Language switching functionality
  - Smooth scrolling navigation
  - Form validation and handling
  - Interactive animations
  - Mobile navigation
- **Libraries**:
  - AOS (Animate On Scroll)
  - Font Awesome (icons)
  - Google Fonts (Inter font family)

## 🎨 Design Features

- **Color Scheme**: Modern purple/blue gradient theme
- **Typography**: Inter font family for clean readability
- **Animations**: 
  - Floating elements with parallax effect
  - Rotating AI orb with pulsing core
  - Smooth hover transitions
  - Scroll-triggered animations
- **Layout**: Grid-based responsive design
- **Icons**: Font Awesome icons throughout

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Local web server (optional, for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Development

1. **HTML Structure**: Modify `index.html` for content changes
2. **Styling**: Edit `css/style.css` for design modifications
3. **Functionality**: Update `js/main.js` for behavior changes
4. **Translations**: Add new translations in the `translations` object in `main.js`

## 🌐 Language Support

The website supports two languages:
- **English (en)**: Default language
- **Spanish (es)**: Complete translation

Language switching is handled via the language switcher in the top-right corner. The selected language is saved in localStorage for persistence.

## 📧 Contact Form

The contact form includes:
- Name field (required)
- Email field (required, with validation)
- Company field (optional)
- Message field (required)
- Form validation and success/error messages

## 🎯 Customization

### Adding New Services

1. Add new service card in the services section of `index.html`
2. Include both English and Spanish content with `data-en` and `data-es` attributes
3. Add corresponding translations in `js/main.js`

### Changing Colors

Modify CSS custom properties in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #06b6d4;
    --accent-color: #f59e0b;
    /* ... other variables */
}
```

### Adding New Languages

1. Add new language button in the language switcher
2. Create new translation object in `js/main.js`
3. Update the language switching logic

## 📈 Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript footprint
- Lazy loading for animations
- Compressed and optimized assets

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for cmurosdev. All rights reserved.

## 🤝 Contributing

For any modifications or improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support regarding this landing page:
- Email: info@cmurosdev.com
- Website: cmurosdev.com

---

**Built with ❤️ for cmurosdev - Transforming businesses with intelligent AI solutions.** 