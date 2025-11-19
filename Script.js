document.addEventListener('DOMContentLoaded', function () {
    
    const headers = document.querySelectorAll('.program-accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');

            content.classList.toggle('hidden');
            icon.textContent = content.classList.contains('hidden') ? '+' : '-';

            document.querySelectorAll('.program-accordion-content').forEach(otherContent => {
                if (otherContent !== content && !otherContent.classList.contains('hidden')) {
                    otherContent.classList.add('hidden');
                    const otherIcon = otherContent.previousElementSibling.querySelector('.toggle-icon');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });
        });
    });

    const searchInput = document.getElementById('programSearch');
    const programCards = document.querySelectorAll('.program-card');

    searchInput.addEventListener('keyup', function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        programCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const descriptionElement = card.querySelector('.program-accordion-content p');
            const description = descriptionElement ? descriptionElement.textContent.toLowerCase() : '';
            
            const searchableText = title + description;

            if (searchableText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});