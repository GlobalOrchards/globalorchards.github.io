// Helper functions
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = select('[data-mobile-menu-toggle]');
  const mobileMenu = select('[data-mobile-menu]');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
  
  // Navbar blur on scroll
  const header = select('header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-white/80');
    } else {
      header.classList.remove('bg-white/80');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Typewriter effect
  const typewriterElement = select('[data-typewriter-texts]');
  
  if (typewriterElement) {
    const texts = JSON.parse(typewriterElement.getAttribute('data-typewriter-texts').replace(/'/g, '"'));
    let textIndex = 0;
    
    const updateTypewriter = () => {
      typewriterElement.textContent = texts[textIndex];
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(updateTypewriter, 3000);
    };
    
    updateTypewriter();
  }
  
  // Product carousel
  const carousel = select('[data-carousel]');
  const prevButton = select('[data-carousel-prev]');
  const nextButton = select('[data-carousel-next]');
  
  if (carousel && prevButton && nextButton) {
    const scrollAmount = carousel.clientWidth;
    
    prevButton.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    nextButton.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
  
  // Accordion
  const accordionButtons = selectAll('.accordion-button');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
    });
  });
  
  // Intersection Observer for animations
  const animatedElements = selectAll('[data-animate]');
  
  if ('IntersectionObserver' in window && animatedElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.getAttribute('data-delay') || 0;
          
          setTimeout(() => {
            element.classList.add('reveal');
          }, delay);
          
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers without Intersection Observer
    animatedElements.forEach(element => {
      element.classList.add('reveal');
    });
  }
  
  // Stats counter
  const stats = selectAll('.stat');
  
  if ('IntersectionObserver' in window && stats.length) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const targetValue = parseInt(element.getAttribute('data-count'));
          const suffix = element.getAttribute('data-suffix') || '';
          let currentValue = 0;
          const duration = 2000; // ms
          const interval = 50; // ms
          const increment = targetValue / (duration / interval);
          
          const counter = setInterval(() => {
            currentValue += increment;
            
            if (currentValue >= targetValue) {
              element.textContent = targetValue + suffix;
              clearInterval(counter);
            } else {
              element.textContent = Math.floor(currentValue) + suffix;
            }
          }, interval);
          
          statsObserver.unobserve(element);
        }
      });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
      statsObserver.observe(stat);
    });
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Close mobile menu if it's open
      if (mobileMenu) {
        mobileMenu.style.display = 'none';
      }
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Map interactions for tooltips
  const mapDots = selectAll('.map-dot');
  
  mapDots.forEach(dot => {
    const city = dot.getAttribute('data-city');
    
    dot.addEventListener('mouseenter', () => {
      const tooltip = select(`.tooltip-${city.toLowerCase()}`);
      if (tooltip) {
        tooltip.style.display = 'block';
      }
    });
    
    dot.addEventListener('mouseleave', () => {
      const tooltip = select(`.tooltip-${city.toLowerCase()}`);
      if (tooltip) {
        tooltip.style.display = 'none';
      }
    });
  });
});