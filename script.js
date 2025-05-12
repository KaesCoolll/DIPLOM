const banners = document.querySelectorAll('.banner-slider .banner');
const nextArrow = document.getElementById('nextArrow');
const prevArrow = document.getElementById('prevArrow');
let currentIndex = 0;
let autoSlideInterval;

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.classList.toggle('hidden', i !== index);
    });
}

function nextBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
}

function prevBanner() {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showBanner(currentIndex);
}

nextArrow.addEventListener('click', () => {
    nextBanner();
    resetAutoSlide();
});

prevArrow.addEventListener('click', () => {
    prevBanner();
    resetAutoSlide();
});

function startAutoSlide() {
    autoSlideInterval = setInterval(nextBanner, 10000); // 10 секунд
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Инициализация
showBanner(currentIndex);
startAutoSlide();

//новое
  const accordions = document.querySelectorAll('.accordion-header');

  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      const isActive = accordion.classList.contains('active');

      // Закрываем все открытые аккордеоны (если хотите только один открыт)
      document.querySelectorAll('.accordion.active').forEach(acc => {
        acc.classList.remove('active');
      });

      // Если не был открыт - открываем, иначе закрываем
      if (!isActive) {
        accordion.classList.add('active');
      }
    });
  });
