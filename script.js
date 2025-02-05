document.addEventListener('DOMContentLoaded', (event) => {
    // Προσθήκη smooth scrolling για τα links της πλοήγησης
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Προσθήκη ενός απλού animation στον τίτλο
    const mainTitle = document.querySelector('h1');
    mainTitle.style.opacity = '0';
    mainTitle.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        mainTitle.style.opacity = '1';
    }, 500);
});
