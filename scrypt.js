const blocks = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
  blocks.forEach(block => {
    const windowHeight = window.innerHeight;
    const blockTop = block.getBoundingClientRect().top;
    if (blockTop < windowHeight - 100) {
      block.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



function toggleMore() {
  const hiddenContent = document.querySelector('.more-about-me');
  const btn = document.querySelector('.read-more-btn');

  hiddenContent.classList.toggle('open');

  if (hiddenContent.classList.contains('open')) {
    btn.textContent = '🔙 Приховати';
  } else {
    btn.textContent = '📖 Читати більше';
  }
}

function createStars(count = 100) {
  const starContainer = document.getElementById('stars');
  starContainer.innerHTML = ''; // очищає старі

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = (1.5 + Math.random()) + 's';
    starContainer.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleAurora');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('aurora-mode');

    if (document.body.classList.contains('aurora-mode')) {
      toggleBtn.textContent = '🌙 Вимкнути сяйво';
      createStars(); // тут!
    } else {
      toggleBtn.textContent = '🌌 Увімкнути нічне сяйво';
      document.getElementById('stars').innerHTML = ''; // очищаємо зорі
    }
  });
});

function createShootingStar() {
  const container = document.getElementById('shooting-stars');
  const star = document.createElement('div');
  star.classList.add('shooting-star');
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';
  container.appendChild(star);

  setTimeout(() => {
    container.removeChild(star);
  }, 1000);
}

// Створювати зірку кожні 5–10 сек випадково
setInterval(() => {
  if (document.body.classList.contains('aurora-mode')) {
    createShootingStar();
  }
}, 6000);

// Метеор ☄️
function createMeteor() {
  const container = document.getElementById('shooting-stars');
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');
  container.appendChild(meteor);

  setTimeout(() => {
    container.removeChild(meteor);
  }, 1600);
}

// Падає раз на 30–45 сек
setInterval(() => {
  if (document.body.classList.contains('aurora-mode')) {
    createMeteor();
  }
}, 35000); // змінюй частоту метеора тут

