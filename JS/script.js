document.addEventListener("DOMContentLoaded", () => {
    const btnTopo = document.getElementById("btnTopo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnTopo.classList.add("show");
        } else {
            btnTopo.classList.remove("show");
        }
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // O trecho abaixo é para o carousel, que você não parece estar usando ainda nessa página.
    const track = document.querySelector('.carousel-track');
    if (track) {
        const figures = Array.from(track.children);
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        let currentIndex = 0;

        function updateCarousel() {
            const slideWidth = figures[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % figures.length;
                updateCarousel();
            });

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + figures.length) % figures.length;
                updateCarousel();
            });
        }

        window.addEventListener('resize', updateCarousel);
        window.addEventListener('load', updateCarousel);
    }
});