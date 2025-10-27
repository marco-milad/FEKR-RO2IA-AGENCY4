import { loadNavbar } from './navbar.js';
import { loadFooter } from './footer.js';

// تحميل الـ Navbar والـ Footer
document.querySelector('#navbar').innerHTML = loadNavbar();
document.querySelector('#footer').innerHTML = loadFooter();

// 🎬 زر كتم وتشغيل الصوت في الفيديو (لو موجود)
const video = document.getElementById('heroVideo');
const muteBtn = document.getElementById('muteToggle');

if (video && muteBtn) {
  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
    if (!video.muted) video.play().catch(err => console.log("Autoplay restriction:", err));
  });
}

// 📊 عداد الأرقام في سكشن About (لو موجود)
const aboutSection = document.querySelector('#about');
if (aboutSection) {
  function animateCountUp(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      element.textContent = current + "%";
    }, 20);
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-value').forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          animateCountUp(stat, target);
        });
        document.querySelectorAll('.progress-bar').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width') + "%";
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(aboutSection);
}

// 💬 Testimonials (يتفعل فقط لو السكشن موجود)
const testimonials = document.querySelectorAll('.testimonial-card-wrapper');
if (testimonials.length > 0) {
  let currentIndex = 0;
  const totalTestimonials = testimonials.length;
  const pageIndicator = document.getElementById('pageIndicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function showTestimonial(index) {
    testimonials.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
    if (pageIndicator) pageIndicator.textContent = `${index + 1} / ${totalTestimonials}`;
  }

  showTestimonial(currentIndex);

  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  }, 5000);

  if (nextBtn) nextBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
  });
}

// 🔝 زر الرجوع للأعلى (يُضاف في كل الصفحات)
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('backToTop')) {
    const btn = document.createElement('button');
    btn.id = 'backToTop';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 100 ? 'flex' : 'none';
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 💬 زر الواتساب الثابت (لكل الصفحات)
  if (!document.getElementById('whatsappBtn')) {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.id = 'whatsappBtn';
    whatsappBtn.href = 'https://wa.me/+966536422477';
    whatsappBtn.target = '_blank';
    whatsappBtn.setAttribute('aria-label', 'تواصل عبر واتساب');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);
  }
});
