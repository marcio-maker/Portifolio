// Função para abrir uma URL em uma nova janela
function openUrl(url) {
    window.open(url, '_blank');
}

// Adiciona a biblioteca Swiper e inicializa após o carregamento
const swiperScript = document.createElement('script');
swiperScript.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
swiperScript.onload = () => {
    // Verifica se o elemento .swiper-container existe antes de inicializar o Swiper
    if (document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
};
document.head.appendChild(swiperScript);

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o ID do alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Rola suavemente
                block: 'start' // Alinha o topo do elemento com o topo da viewport
            });
        }
    });
});

// Animação de revelação ao rolar
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

        if (isVisible) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Executa ao carregar a página

// Evento de aceitação de cookies
const cookieConsent = document.getElementById('cookieConsent');
const acceptCookiesButton = document.getElementById('acceptCookies');

if (cookieConsent && acceptCookiesButton) {
    acceptCookiesButton.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
        // Aqui você pode adicionar o código para definir o cookie de consentimento
    });
}
